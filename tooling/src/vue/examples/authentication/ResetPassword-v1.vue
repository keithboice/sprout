<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">
      <!-- Reset Password v1 -->
      <b-card class="mb-0">
        
        <!-- logo -->
        <b-link class="brand-logo">
          <sprout-logo />
          
          <h2 class="brand-text text-primary ml-1">
            Sprout
          </h2>
        </b-link>
        
        <b-card-title class="mb-1">
          Reset Password 🔒
        </b-card-title>
        <b-card-text class="mb-2">
          Your new password must be different from previously used passwords
        </b-card-text>
        
        <!-- form -->
        <validation-observer ref="simpleRules">
          <b-form
            class="auth-reset-password-form mt-2"
            method="POST"
            @submit.prevent="validationForm"
          >
            
            <!-- password -->
            <b-form-group
              label="New Password"
              label-for="reset-password-new"
            >
              <validation-provider
                #default="{ errors }"
                name="Password"
                rules="required|password"
                vid="Password"
              >
                <b-input-group
                  :class="errors.length > 0 ? 'is-invalid':null"
                  class="input-group-merge"
                >
                  <b-form-input
                    id="reset-password-new"
                    v-model="password"
                    :state="errors.length > 0 ? false:null"
                    :type="password1FieldType"
                    class="form-control-merge"
                    name="reset-password-new"
                    placeholder="············"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      :icon="password1ToggleIcon"
                      class="cursor-pointer"
                      @click="togglePassword1Visibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[ 0 ] }}</small>
              </validation-provider>
            </b-form-group>
            
            <!-- confirm password -->
            <b-form-group
              label="Confirm Password"
              label-for="reset-password-confirm"
            >
              <validation-provider
                #default="{ errors }"
                name="Confirm Password"
                rules="required|confirmed:Password"
              >
                <b-input-group
                  :class="errors.length > 0 ? 'is-invalid':null"
                  class="input-group-merge"
                >
                  <b-form-input
                    id="reset-password-confirm"
                    v-model="cPassword"
                    :state="errors.length > 0 ? false:null"
                    :type="password2FieldType"
                    class="form-control-merge"
                    name="reset-password-confirm"
                    placeholder="············"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      :icon="password2ToggleIcon"
                      class="cursor-pointer"
                      @click="togglePassword2Visibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[ 0 ] }}</small>
              </validation-provider>
            </b-form-group>
            
            <!-- submit button -->
            <b-button
              block
              type="submit"
              variant="primary"
            >
              Set New Password
            </b-button>
          </b-form>
        </validation-observer>
        
        <p class="text-center mt-2">
          <b-link :to="{name:'auth-login-v1'}">
            <feather-icon icon="ChevronLeftIcon" />
            Back to login
          </b-link>
        </p>
      
      </b-card>
      <!-- /Reset Password v1 -->
    </div>
  </div>

</template>

<script>
import ToastificationContent                                                                                           from "@core/components/toastification/ToastificationContent.vue";
import SproutLogo
                                                                                                                       from "@core/layouts/components/Logo.vue";
import { required }                                                                                                    from "@validations";
import { BButton, BCard, BCardText, BCardTitle, BForm, BFormGroup, BFormInput, BInputGroup, BInputGroupAppend, BLink } from "bootstrap-vue";
import { ValidationObserver, ValidationProvider }                                                                      from "vee-validate";


export default {
  components: {
    SproutLogo,
    BCard,
    BButton,
    BCardTitle,
    BCardText,
    BForm,
    BFormGroup,
    BInputGroup,
    BLink,
    BFormInput,
    BInputGroupAppend,
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      userEmail: "",
      cPassword: "",
      password:  "", // validation
      required,
      
      // Toggle Password
      password1FieldType: "password",
      password2FieldType: "password"
    };
  },
  computed: {
    password1ToggleIcon () {
      return this.password1FieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
    password2ToggleIcon () {
      return this.password2FieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    }
  },
  methods:  {
    togglePassword1Visibility () {
      this.password1FieldType = this.password1FieldType === "password" ? "text" : "password";
    },
    togglePassword2Visibility () {
      this.password2FieldType = this.password2FieldType === "password" ? "text" : "password";
    },
    validationForm () {
      this.$refs.simpleRules.validate()
        .then( success => {
          if ( success ) {
            this.$toast( {
                           component: ToastificationContent,
                           props:     {
                             title:   "Form Submitted",
                             icon:    "EditIcon",
                             variant: "success"
                           }
                         } );
          }
        } );
    }
  }
};
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
