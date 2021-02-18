<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      
      <!-- Brand logo-->
      <b-link class="brand-logo">
        <sprout-logo />
        
        <h2 class="brand-text text-primary ml-1">
          Sprout
        </h2>
      </b-link>
      <!-- /Brand logo-->
      
      <!-- Left Text-->
      <b-col
        class="d-none d-lg-flex align-items-center p-5"
        lg="8"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            :src="imgUrl"
            alt="Forgot password V2"
            fluid
          />
        </div>
      </b-col>
      <!-- /Left Text-->
      
      <!-- Forgot password-->
      <b-col
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
        lg="4"
      >
        <b-col
          class="px-xl-2 mx-auto"
          lg="12"
          md="6"
          sm="8"
        >
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
              
              <b-button
                block
                type="submit"
                variant="primary"
              >
                Send reset link
              </b-button>
            </b-form>
          </validation-observer>
          
          <p class="text-center mt-2">
            <b-link :to="{name:'auth-login'}">
              <feather-icon icon="ChevronLeftIcon" />
              Back to login
            </b-link>
          </p>
        </b-col>
      </b-col>
      <!-- /Forgot password-->
    </b-row>
  </div>
</template>

<script>
import store                                                                                      from "@/store";
import ToastificationContent
                                                                                                  from "@core/components/toastification/ToastificationContent.vue";
import SproutLogo                                                                                 from "@core/layouts/components/Logo.vue";
import { email, required }                                                                        from "@validations";
import { BButton, BCardText, BCardTitle, BCol, BForm, BFormGroup, BFormInput, BImg, BLink, BRow } from "bootstrap-vue";
/* eslint-disable global-require */
import { ValidationObserver, ValidationProvider }                                                 from "vee-validate";


export default {
  components: {
    SproutLogo,
    BRow,
    BCol,
    BLink,
    BImg,
    BForm,
    BButton,
    BFormGroup,
    BFormInput,
    BCardTitle,
    BCardText,
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      userEmail: "",
      sideImg:   require( "@/assets/images/pages/forgot-password-v2.svg" ), // validation
      required,
      email
    };
  },
  computed: {
    imgUrl () {
      if ( store.state.appConfig.layout.skin === "dark" ) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require( "@/assets/images/pages/forgot-password-v2-dark.svg" );
        return this.sideImg;
      }
      return this.sideImg;
    }
  },
  methods:  {
    validationForm () {
      this.$refs.simpleRules.validate()
        .then( success => {
          if ( success ) {
            this.$toast( {
                           component: ToastificationContent,
                           props:     {
                             title:   "This is for UI purpose only.",
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
