<template>
  <b-card-code
    title="Validating Multiple Rules"
  >
    
    <!-- form -->
    <validation-observer ref="simpleRules">
      <b-form>
        <b-row>
          <b-col md="6">
            <b-form-group>
              <validation-provider
                #default="{ errors }"
                name="Name"
                rules="required"
              >
                <b-form-input
                  v-model="name"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Your Name"
                />
                <small class="text-danger">{{ errors[ 0 ] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group>
              <validation-provider
                #default="{ errors }"
                name="Email"
                rules="required|email"
              >
                <b-form-input
                  v-model="emailValue"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Your Email"
                  type="email"
                />
                <small class="text-danger">{{ errors[ 0 ] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group>
              <validation-provider
                #default="{ errors }"
                name="Password"
                rules="required|password"
                vid="Password"
              >
                <b-form-input
                  v-model="PasswordValue"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Your Password"
                  type="password"
                />
                <small class="text-danger">{{ errors[ 0 ] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group>
              <validation-provider
                #default="{ errors }"
                name="Password Confirm"
                rules="required|confirmed:Password"
              >
                <b-form-input
                  v-model="passwordCon"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Confirm Password"
                  type="password"
                />
                <small class="text-danger">{{ errors[ 0 ] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          
          <!-- submit button -->
          <b-col>
            <b-button
              type="submit"
              variant="primary"
              @click.prevent="validationForm"
            >
              Submit
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>
    
    <template #code>
      {{ codeMultiple }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                              from "@core/components/b-card-code";
import { confirmed, email, password, required }               from "@validations";
import { BButton, BCol, BForm, BFormGroup, BFormInput, BRow } from "bootstrap-vue";
import { ValidationObserver, ValidationProvider }             from "vee-validate";
import { codeMultiple }                                       from "./code";


export default {
  components: {
    BCardCode,
    ValidationProvider,
    ValidationObserver,
    BFormInput,
    BFormGroup,
    BForm,
    BRow,
    BCol,
    BButton
  },
  data () {
    return {
      emailValue:    "",
      name:          "",
      PasswordValue: "",
      passwordCon:   "",
      required,
      password,
      email,
      confirmed,
      codeMultiple
    };
  },
  methods: {
    validationForm () {
      this.$refs.simpleRules.validate()
        .then( success => {
          if ( success ) {
            // eslint-disable-next-line
            alert( "form submitted!" );
          }
        } );
    }
  }
};
</script>
