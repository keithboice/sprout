<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">
      
      <!-- Forgot Password v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <!-- logo -->
          <sprout-logo />
          
          <h2 class="brand-text text-primary ml-1">
            Sprout
          </h2>
        </b-link>
        
        <b-card-title class="mb-1">
          Forgot Password? 🔒
        </b-card-title>
        <b-card-text class="mb-2">
          Enter your email and we'll send you instructions to reset your password
        </b-card-text>
        
        <!-- form -->
        <validation-observer ref="simpleRules">
          <b-form
            class="auth-forgot-password-form mt-2"
            @submit.prevent="validationForm"
          >
            <!-- email -->
            <b-form-group
              label="Email"
              label-for="forgot-password-email"
            >
              <validation-provider
                #default="{ errors }"
                name="Email"
                rules="required|email"
              >
                <b-form-input
                  id="forgot-password-email"
                  v-model="userEmail"
                  :state="errors.length > 0 ? false:null"
                  name="forgot-password-email"
                  placeholder="john@example.com"
                />
                <small class="text-danger">{{ errors[ 0 ] }}</small>
              </validation-provider>
            </b-form-group>
            
            <!-- submit button -->
            <b-button
              block
              type="submit"
              variant="primary"
            >
              Send reset link
            </b-button>
          </b-form>
        </validation-observer>
        
        <b-card-text class="text-center mt-2">
          <b-link :to="{name:'auth-login-v1'}">
            <feather-icon icon="ChevronLeftIcon" />
            Back to login
          </b-link>
        </b-card-text>
      
      </b-card>
      <!-- /Forgot Password v1 -->
    </div>
  </div>
</template>

<script>
import SproutLogo                                                                      from "@core/layouts/components/Logo.vue";
import { email, required }                                                             from "@validations";
import { BButton, BCard, BCardText, BCardTitle, BForm, BFormGroup, BFormInput, BLink } from "bootstrap-vue";
import { ValidationObserver, ValidationProvider }                                      from "vee-validate";


export default {
  components: {
    SproutLogo,
    BCard,
    BLink,
    BCardText,
    BCardTitle,
    BFormGroup,
    BFormInput,
    BButton,
    BForm,
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      userEmail: "", // validation
      required,
      email
    };
  },
  methods: {
    validationForm () {
      this.$refs.simpleRules.validate()
        .then( success => {
          if ( success ) {
            this.$router.push( { name: "auth-reset-password-v1" } );
          }
        } );
    }
  }
};
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
