<template>
  <b-card-code title="Validation Locale">
    <b-card-text>VeeValidate has built-in localization support for validation messages. Localization is opt-in and is not configured by default.</b-card-text>
    
    <!-- form -->
    <validation-observer ref="form">
      <b-row>
        <b-col md="6">
          <b-form-group>
            <validation-provider
              #default="{ errors }"
              name="email"
              rules="required|email"
            >
              <b-form-input
                v-model="email"
                :state="errors.length > 0 ? false:null"
                placeholder="Email"
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
              name="password"
              rules="required|min:6"
            >
              <b-form-input
                v-model="passwordValue"
                :state="errors.length > 0 ? false:null"
                placeholder="Password"
                type="password"
              />
              <small class="text-danger">{{ errors[ 0 ] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
      </b-row>
    </validation-observer>
    
    <!-- button to switch locale -->
    <b-button
      variant="primary"
      @click="switchLoc"
    >
      Switch Locale
    </b-button>
    
    <template #code>
      {{ codeLocale }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                                  from "@core/components/b-card-code";
import { password, required }                                     from "@validations";
import { BButton, BCardText, BCol, BFormGroup, BFormInput, BRow } from "bootstrap-vue";
import { localize, ValidationObserver, ValidationProvider }       from "vee-validate";
import { codeLocale }                                             from "./code";


export default {
  components: {
    BCardCode,
    BFormInput,
    BFormGroup,
    BButton,
    BCardText,
    BRow,
    BCol,
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      // ? Default locale for VeeValidate is 'en'
      locale:        "en",
      email:         "",
      passwordValue: "",
      password,
      required,
      codeLocale
    };
  },
  methods: {
    switchLoc () {
      // switch the locale.
      this.locale = this.locale === "en" ? "ar" : "en";
      localize( this.locale );
      
      // re-validate to re-generate the messages.
      this.$refs.form.validate();
    }
  }
};
</script>
