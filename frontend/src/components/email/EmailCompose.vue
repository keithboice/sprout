<template>
  <b-modal
    id="compose-mail"
    :visible="shallShowEmailComposeModal"
    body-class="p-0"
    footer-class="d-flex justify-content-between"
    hide-backdrop
    modal-class="modal-sticky"
    no-fade
    size="lg"
    static
    title="Compose Email"
    @change="(val) => $emit('update:shall-show-email-compose-modal', val)"
  >
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
        Compose Mail
      </h5>
      <div class="modal-actions">
        <feather-icon
          class="cursor-pointer"
          icon="MinusIcon"
          @click="$emit('update:shall-show-email-compose-modal', false)"
        />
        <feather-icon
          class="ml-1 cursor-pointer"
          icon="Maximize2Icon"
        />
        <feather-icon
          class="ml-1 cursor-pointer"
          icon="XIcon"
          @click="discardEmail"
        />
      </div>
    </template>
    
    <!-- Modal Footer -->
    <template #modal-footer>
      <!-- Footer: Left Content -->
      <div>
        <b-dropdown
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          right
          split
          text="Send"
          variant="primary"
          @click="sendEmail"
        >
          <b-dropdown-item>
            Schedule Send
          </b-dropdown-item>
        </b-dropdown>
        <feather-icon
          class="ml-2 cursor-pointer"
          icon="PaperclipIcon"
          size="17"
        />
      </div>
      
      <!-- Footer: Right Content -->
      <div>
        
        <!-- Dropdown: More Actions -->
        <b-dropdown
          no-caret
          right
          toggle-class="p-0"
          variant="link"
        >
          <template #button-content>
            <feather-icon
              class="text-body"
              icon="MoreVerticalIcon"
              size="17"
            />
          </template>
          
          <b-dropdown-item>
            Add Label
          </b-dropdown-item>
          
          <b-dropdown-item>
            Plain Text Mode
          </b-dropdown-item>
          
          <b-dropdown-divider />
          
          <b-dropdown-item>
            Print
          </b-dropdown-item>
          <b-dropdown-item>
            Check Spelling
          </b-dropdown-item>
        </b-dropdown>
        
        <!-- Discard Compose -->
        <feather-icon
          class="ml-75 cursor-pointer"
          icon="TrashIcon"
          size="17"
          @click="discardEmail"
        />
      </div>
    </template>
    
    <!-- Modal: Body -->
    <b-form>
      
      <!-- Field: To -->
      <div class="compose-mail-form-field">
        <label
          class="form-label"
          for="email-to"
        >To: </label>
        <v-select
          v-model="composeData.to"
          :close-on-select="false"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          :options="emailToOptions"
          class="flex-grow-1 email-to-selector"
          input-id="email-to"
          label="name"
          multiple
        >
          
          <template #option="{ avatar, name }">
            <b-avatar
              :src="avatar"
              size="sm"
            />
            <span class="ml-50"> {{ name }}</span>
          </template>
          
          <template #selected-option="{ avatar, name }">
            <b-avatar
              :src="avatar"
              class="border border-white"
              size="sm"
            />
            <span class="ml-50"> {{ name }}</span>
          </template>
        </v-select>
        <span
          class="cursor-pointer"
          @click="showCcField=!showCcField"
        >Cc</span>
        <span
          class="ml-1 cursor-pointer"
          @click="showBccField=!showBccField"
        >Bcc</span>
      </div>
      
      <!-- Field: Cc (Hidden Initially) -->
      <div
        v-show="showCcField"
        class="compose-mail-form-field"
      >
        <label for="email-cc">CC: </label>
        <v-select
          v-model="composeData.cc"
          :close-on-select="false"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          :options="emailToOptions"
          class="flex-grow-1 email-cc-selector"
          input-id="email-cc"
          label="name"
          multiple
        >
          
          <template #option="{ avatar, name }">
            <b-avatar
              :src="avatar"
              size="sm"
            />
            <span class="ml-50"> {{ name }}</span>
          </template>
          
          <template #selected-option="{ avatar, name }">
            <b-avatar
              :src="avatar"
              class="border border-white"
              size="sm"
            />
            <span class="ml-50"> {{ name }}</span>
          </template>
        </v-select>
      </div>
      
      <!-- Field: Bcc (Hidden Initially) -->
      <div
        v-show="showBccField"
        class="compose-mail-form-field"
      >
        <label for="email-bcc">Bcc </label>
        <v-select
          v-model="composeData.bcc"
          :close-on-select="false"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          :options="emailToOptions"
          class="flex-grow-1 email-bcc-selector"
          input-id="email-bcc"
          label="name"
          multiple
        >
          
          <template #option="{ avatar, name }">
            <b-avatar
              :src="avatar"
              size="sm"
            />
            <span class="ml-50"> {{ name }}</span>
          </template>
          
          <template #selected-option="{ avatar, name }">
            <b-avatar
              :src="avatar"
              class="border border-white"
              size="sm"
            />
            <span class="ml-50"> {{ name }}</span>
          </template>
        </v-select>
      </div>
      
      <!-- Field: Subject -->
      <div class="compose-mail-form-field">
        <label for="email-subject">Subject: </label>
        <b-form-input
          id="email-subject"
          v-model="composeData.subject"
        />
      </div>
      
      <!-- Field: Message - Quill Editor -->
      <div class="message-editor">
        <quill-editor
          id="quil-content"
          v-model="composeData.message"
          :options="editorOption"
        />
        <div
          id="quill-toolbar"
          class="d-flex border-bottom-0"
        >
          <!-- Add a bold button -->
          <button class="ql-bold" />
          <button class="ql-italic" />
          <button class="ql-underline" />
          <button class="ql-align" />
          <button class="ql-link" />
        </div>
      </div>
    </b-form>
  
  </b-modal>
</template>

<script>
import { ref }                                                                    from "@vue/composition-api";
import { BAvatar, BDropdown, BDropdownDivider, BDropdownItem, BForm, BFormInput } from "bootstrap-vue";
import { quillEditor }                                                            from "vue-quill-editor";
import Ripple                                                                     from "vue-ripple-directive";
import vSelect                                                                    from "vue-select";


export default {
  directives: {
    Ripple
  },
  components: {
    
    // BSV
    BDropdown,
    BDropdownItem,
    BForm,
    BFormInput,
    BAvatar,
    BDropdownDivider,
    
    // 3rd Party
    quillEditor,
    vSelect
  },
  model:      {
    prop:  "shallShowEmailComposeModal",
    event: "update:shall-show-email-compose-modal"
  },
  props:      {
    shallShowEmailComposeModal: {
      type:     Boolean,
      required: true
    }
  },
  setup ( _, { emit } ) {
    const composeData = ref( {} );
    const showCcField = ref( false );
    const showBccField = ref( false );
    
    const editorOption = {
      modules:     {
        toolbar: "#quill-toolbar"
      },
      placeholder: "Message"
    };
    
    /* eslint-disable global-require */
    const emailToOptions = [
      {
        avatar: require( "@/assets/images/avatars/1-small.png" ),
        name:   "Jane Foster"
      }, {
        avatar: require( "@/assets/images/avatars/3-small.png" ),
        name:   "Donna Frank"
      }, {
        avatar: require( "@/assets/images/avatars/5-small.png" ),
        name:   "Gabrielle Robertson"
      }, {
        avatar: require( "@/assets/images/avatars/7-small.png" ),
        name:   "Lori Spears"
      }, {
        avatar: require( "@/assets/images/avatars/9-small.png" ),
        name:   "Sandy Vega"
      }, {
        avatar: require( "@/assets/images/avatars/11-small.png" ),
        name:   "Cheryl May"
      }
    ];
    /* eslint-enable global-require */
    
    const sendEmail = () => {
      composeData.value = {};
      emit( "update:shall-show-email-compose-modal", false );
      
      // ? Send your Email
    };
    
    const discardEmail = () => {
      composeData.value = {};
      emit( "update:shall-show-email-compose-modal", false );
    };
    
    return {
      composeData,
      editorOption,
      emailToOptions,
      showCcField,
      showBccField,
      
      // Email actions
      sendEmail,
      discardEmail
    };
  }
};
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/quill.scss';
</style>

<style lang="scss" scoped>
form ::v-deep {
  
  // Mail To vue-select style
  .v-select {
    .vs__dropdown-toggle {
      border: 0;
      box-shadow: none;
    }
    
    .vs__open-indicator {
      display: none;
    }
  }
  
  // Quill Editor Style
  .quill-editor {
    .ql-container.ql-snow {
      border-bottom: 0 !important;
    }
  }
}
</style>
