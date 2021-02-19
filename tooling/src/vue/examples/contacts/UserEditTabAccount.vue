<template>
  <div>
    
    <!-- Media -->
    <b-media class="mb-2">
      <template #aside>
        <b-avatar
          ref="previewEl"
          :src="userData.avatar"
          :text="avatarText(userData.fullName)"
          :variant="`light-${resolveUserRoleVariant(userData.role)}`"
          rounded
          size="90px"
        />
      </template>
      <h4 class="mb-1">
        {{ userData.fullName }}
      </h4>
      <div class="d-flex flex-wrap">
        <b-button
          variant="primary"
          @click="$refs.refInputEl.click()"
        >
          <input
            ref="refInputEl"
            class="d-none"
            type="file"
            @input="inputImageRenderer"
          >
          <span class="d-none d-sm-inline">Update</span>
          <feather-icon
            class="d-inline d-sm-none"
            icon="EditIcon"
          />
        </b-button>
        <b-button
          class="ml-1"
          variant="outline-secondary"
        >
          <span class="d-none d-sm-inline">Remove</span>
          <feather-icon
            class="d-inline d-sm-none"
            icon="TrashIcon"
          />
        </b-button>
      </div>
    </b-media>
    
    <!-- User Info: Input Fields -->
    <b-form>
      <b-row>
        
        <!-- Field: Username -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Username"
            label-for="username"
          >
            <b-form-input
              id="username"
              v-model="userData.username"
            />
          </b-form-group>
        </b-col>
        
        <!-- Field: Full Name -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Name"
            label-for="full-name"
          >
            <b-form-input
              id="full-name"
              v-model="userData.fullName"
            />
          </b-form-group>
        </b-col>
        
        <!-- Field: Email -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Email"
            label-for="email"
          >
            <b-form-input
              id="email"
              v-model="userData.email"
              type="email"
            />
          </b-form-group>
        </b-col>
        
        <!-- Field: Status -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Status"
            label-for="user-status"
          >
            <v-select
              v-model="userData.status"
              :clearable="false"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="statusOptions"
              :reduce="val => val.value"
              input-id="user-status"
            />
          </b-form-group>
        </b-col>
        
        <!-- Field: Role -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="User Role"
            label-for="user-role"
          >
            <v-select
              v-model="userData.role"
              :clearable="false"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="roleOptions"
              :reduce="val => val.value"
              input-id="user-role"
            />
          </b-form-group>
        </b-col>
        
        <!-- Field: Email -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Company"
            label-for="company"
          >
            <b-form-input
              id="company"
              v-model="userData.company"
            />
          </b-form-group>
        </b-col>
      
      </b-row>
    </b-form>
    
    <!-- PERMISSION TABLE -->
    <b-card
      class="border mt-1"
      no-body
    >
      <b-card-header class="p-1">
        <b-card-title class="font-medium-2">
          <feather-icon
            icon="LockIcon"
            size="18"
          />
          <span class="align-middle ml-50">Permission</span>
        </b-card-title>
      </b-card-header>
      <b-table
        :items="permissionsData"
        class="mb-0"
        responsive
        striped
      >
        <template #cell(module)="data">
          {{ data.value }}
        </template>
        <template #cell()="data">
          <b-form-checkbox :checked="data.value" />
        </template>
      </b-table>
    </b-card>
    
    <!-- Action Buttons -->
    <b-button
      :block="$store.getters['app/currentBreakPoint'] === 'xs'"
      class="mb-1 mb-sm-0 mr-0 mr-sm-1"
      variant="primary"
    >
      Save Changes
    </b-button>
    <b-button
      :block="$store.getters['app/currentBreakPoint'] === 'xs'"
      type="reset"
      variant="outline-secondary"
    >
      Reset
    </b-button>
  </div>
</template>

<script>
import { useInputImageRenderer } from "@core/comp-functions/forms/form-utils";
import { avatarText }            from "@core/utils/filter";
import { ref }                   from "@vue/composition-api";
import {
  BAvatar, BButton, BCard, BCardHeader, BCardTitle, BCol, BForm, BFormCheckbox, BFormGroup, BFormInput, BMedia, BRow, BTable
}                                from "bootstrap-vue";
import vSelect                   from "vue-select";
import useUsersList              from "./useUsersList";


export default {
  components: {
    BButton,
    BMedia,
    BAvatar,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BTable,
    BCard,
    BCardHeader,
    BCardTitle,
    BFormCheckbox,
    vSelect
  },
  props:      {
    userData: {
      type:     Object,
      required: true
    }
  },
  setup ( props ) {
    const { resolveUserRoleVariant } = useUsersList();
    
    const roleOptions = [
      {
        label: "Admin",
        value: "admin"
      }, {
        label: "Author",
        value: "author"
      }, {
        label: "Editor",
        value: "editor"
      }, {
        label: "Maintainer",
        value: "maintainer"
      }, {
        label: "Subscriber",
        value: "subscriber"
      }
    ];
    
    const statusOptions = [
      {
        label: "Pending",
        value: "pending"
      }, {
        label: "Active",
        value: "active"
      }, {
        label: "Inactive",
        value: "inactive"
      }
    ];
    
    const permissionsData = [
      {
        module: "Admin",
        read:   true,
        write:  false,
        create: false,
        delete: false
      }, {
        module: "Staff",
        read:   false,
        write:  true,
        create: false,
        delete: false
      }, {
        module: "Author",
        read:   true,
        write:  false,
        create: true,
        delete: false
      }, {
        module: "Contributor",
        read:   false,
        write:  false,
        create: false,
        delete: false
      }, {
        module: "User",
        read:   false,
        write:  false,
        create: false,
        delete: true
      }
    ];
    
    // ? Demo Purpose => Update image on click of update
    const refInputEl = ref( null );
    const previewEl = ref( null );
    
    const { inputImageRenderer } = useInputImageRenderer( refInputEl, base64 => {
      // eslint-disable-next-line no-param-reassign
      props.userData.avatar = base64;
    } );
    
    return {
      resolveUserRoleVariant,
      avatarText,
      roleOptions,
      statusOptions,
      permissionsData,
      
      //  ? Demo - Update Image on click of update button
      refInputEl,
      previewEl,
      inputImageRenderer
    };
  }
};
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
