<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      
      <!-- Left Text-->
      <b-col
        class="d-none d-lg-flex align-items-center p-5"
        lg="8"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            alt="Login V2"
            fluid
            src="https://crm.sprout.online/images/logo-sprout-v2.png"
          />
        </div>
      </b-col>
      <!-- /Left Text-->
      
      <!-- Login-->
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
          <b-card-title
            class="mb-1 font-weight-bold"
            title-tag="h2"
          >
            Welcome!
          </b-card-title>
          <b-card-text class="mb-2">
            Please sign-in to your account
          </b-card-text>
          
          <b-alert
            show
            variant="primary"
          >
            <div class="alert-body font-small-2">
              <p>
                <small class="mr-50"><span class="font-weight-bold">Admin:</span> admin@demo.com | admin</small>
              </p>
              <p>
                <small class="mr-50"><span class="font-weight-bold">Client:</span> client@demo.com | client</small>
              </p>
            </div>
            <feather-icon
              v-b-tooltip.hover.left="'This is just for ACL demo purpose'"
              class="position-absolute"
              icon="HelpCircleIcon"
              size="18"
              style="top: 10; right: 10;"
            />
          </b-alert>
          
          <!-- form -->
          <validation-observer
            ref="loginForm"
            #default="{invalid}"
          >
            <b-form
              class="auth-login-form mt-2"
              @submit.prevent="login"
            >
              <!-- email -->
              <b-form-group
                label="Email"
                label-for="login-email"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  rules="required|email"
                  vid="email"
                >
                  <b-form-input
                    id="login-email"
                    v-model="userEmail"
                    :state="errors.length > 0 ? false:null"
                    name="login-email"
                    placeholder="john@example.com"
                  />
                  <small class="text-danger">{{ errors[ 0 ] }}</small>
                </validation-provider>
              </b-form-group>
              
              <!-- forgot password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password">Password</label>
                  <b-link :to="{name:'auth-forgot-password'}">
                    <small>Forgot Password?</small>
                  </b-link>
                </div>
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  rules="required"
                  vid="password"
                >
                  <b-input-group
                    :class="errors.length > 0 ? 'is-invalid':null"
                    class="input-group-merge"
                  >
                    <b-form-input
                      id="login-password"
                      v-model="password"
                      :state="errors.length > 0 ? false:null"
                      :type="passwordFieldType"
                      class="form-control-merge"
                      name="login-password"
                      placeholder="Password"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        :icon="passwordToggleIcon"
                        class="cursor-pointer"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[ 0 ] }}</small>
                </validation-provider>
              </b-form-group>
              
              <!-- checkbox -->
              <b-form-group>
                <b-form-checkbox
                  id="remember-me"
                  v-model="status"
                  name="checkbox-1"
                >
                  Remember Me
                </b-form-checkbox>
              </b-form-group>
              
              <!-- submit buttons -->
              <b-button
                :disabled="invalid"
                block
                type="submit"
                variant="primary"
              >
                Sign in
              </b-button>
            </b-form>
          </validation-observer>
          
          <b-card-text class="text-center mt-2">
            <span>New on our platform? </span>
            <b-link :to="{name:'auth-register'}">
              <span>&nbsp;Create an account</span>
            </b-link>
          </b-card-text>
          
          <!-- divider -->
          <div class="divider my-2">
            <div class="divider-text">
              or
            </div>
          </div>
          
          <!-- social buttons -->
          <div class="auth-footer-btn d-flex justify-content-center">
            <b-button
              href="javascript:void(0)"
              variant="facebook"
            >
              <feather-icon icon="FacebookIcon" />
            </b-button>
            <b-button
              href="javascript:void(0)"
              variant="twitter"
            >
              <feather-icon icon="TwitterIcon" />
            </b-button>
            <b-button
              href="javascript:void(0)"
              variant="google"
            >
              <feather-icon icon="MailIcon" />
            </b-button>
            <b-button
              href="javascript:void(0)"
              variant="github"
            >
              <feather-icon icon="GithubIcon" />
            </b-button>
          </div>
        </b-col>
      </b-col>
      <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
import useJwt                          from "@/auth/jwt/useJwt";
import { getHomeRouteForLoggedInUser } from "@/auth/utils";

import ToastificationContent                      from "@core/components/toastification/ToastificationContent.vue";
import { togglePasswordVisibility }               from "@core/mixins/ui/forms";
import { email, required }                        from "@validations";
import {
  BAlert, BButton, BCardText, BCardTitle, BCol, BForm, BFormCheckbox, BFormGroup, BFormInput, BImg, BInputGroup, BInputGroupAppend, BLink, BRow,
  VBTooltip
}                                                 from "bootstrap-vue"; /* eslint-disable global-require */
import { ValidationObserver, ValidationProvider } from "vee-validate";


export default {
  directives: {
    "b-tooltip": VBTooltip
  },
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    BAlert,
    ValidationProvider,
    ValidationObserver
  },
  mixins:     [ togglePasswordVisibility ],
  data () {
    return {
      status:    "",
      password:  "admin",
      userEmail: "admin@demo.com",
      sideImg:   require( "@/assets/images/pages/login-v2.svg" ),
      
      // validation rules
      required,
      email
    };
  },
  computed: {
    passwordToggleIcon () {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    } /*
     imgUrl() {
     if (store.state.appConfig.layout.skin === 'dark') {
     // eslint-disable-next-line vue/no-side-effects-in-computed-properties
     this.sideImg = require('~/images/logo/logo.png')
     return this.sideImg
     }
     return this.sideImg
     }, */
  },
  methods:  {
    login () {
      this.$refs.loginForm.validate()
        .then( success => {
          if ( success ) {
            useJwt.login( {
                            email:    this.userEmail,
                            password: this.password
                          } )
              .then( response => {
                const { userData } = response.data;
                useJwt.setToken( response.data.accessToken );
                useJwt.setRefreshToken( response.data.refreshToken );
                localStorage.setItem( "userData", JSON.stringify( userData ) );
                this.$ability.update( userData.ability );
                
                // ? This is just for demo purpose as well.
                // ? Because we are showing eCommerce styles's cart items count in navbar
                this.$store.commit( "styles-dashboard-ecomm/UPDATE_CART_ITEMS_COUNT", userData.extras.eCommerceCartItemsCount );
                
                // ? This is just for demo purpose. Don't think CASL is role based in this case, we used role in if condition just for ease
                this.$router.replace( getHomeRouteForLoggedInUser( userData.role ) )
                  .then( () => {
                    this.$toast( {
                                   component: ToastificationContent,
                                   position:  "top-right",
                                   props:     {
                                     title:   `Welcome ${ userData.fullName || userData.username }`,
                                     icon:    "CoffeeIcon",
                                     variant: "success",
                                     text:    `You have successfully logged in as ${ userData.role }. Now you can start to explore!`
                                   }
                                 } );
                  } )
                  .catch( error => {
                    this.$refs.loginForm.setErrors( error.response.data.error );
                  } );
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
