<template>
  <b-card-code title="Merged">
    <div class="demo-vertical-spacing">
      <!-- basic search -->
      <b-input-group class="input-group-merge">
        <b-input-group-prepend is-text>
          <feather-icon icon="SearchIcon" />
        </b-input-group-prepend>
        <b-form-input placeholder="Search" />
      </b-input-group>
      
      <!-- password -->
      <b-form-group>
        <label for="basic-password1">Password</label>
        <b-input-group class="input-group-merge">
          <b-form-input id="basic-password1" :type="passwordFieldType" placeholder="Your Password" />
          <b-input-group-append is-text>
            <feather-icon :icon="passwordToggleIcon" class="cursor-pointer" @click="togglePasswordVisibility" />
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
      
      <!-- with prop prepend  -->
      <b-input-group class="input-group-merge" prepend="@">
        <b-form-input placeholder="Username" />
      </b-input-group>
      
      <!-- with prop append -->
      <b-input-group append="@example.com" class="input-group-merge">
        <b-form-input placeholder="Recipient's username" />
      </b-input-group>
      
      <b-input-group class="input-group-merge" prepend="https://example.com/users/">
        <b-form-input />
      </b-input-group>
      
      <!-- append and pepend -->
      <b-input-group append=".00" class="input-group-merge" prepend="$">
        <b-form-input placeholder="100" />
      </b-input-group>
      
      <!-- textarea -->
      <b-input-group class="input-group-merge" prepend="With textarea">
        <b-form-textarea />
      </b-input-group>
    </div>
    
    <template #code>
      {{ codeMerged }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                                                                     from "@core/components/b-card-code"
import { BInputGroup, BFormInput, BInputGroupPrepend, BInputGroupAppend, BFormGroup, BFormTextarea } from "bootstrap-vue"
import { togglePasswordVisibility }                                                                  from "@utils/mixins/ui/forms"
import { codeMerged }                                                                                from "./code"


export default {
  components: {
    BCardCode,
    BFormTextarea,
    BInputGroup,
    BFormGroup,
    BFormInput,
    BInputGroupPrepend,
    BInputGroupAppend
  },
  mixins:     [ togglePasswordVisibility ],
  data () {
    return {
      codeMerged
    }
  },
  computed: {
    passwordToggleIcon () {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon"
    }
  }
}
</script>
