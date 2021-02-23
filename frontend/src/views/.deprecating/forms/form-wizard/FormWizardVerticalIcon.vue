<template>
  <div>
    <form-wizard
      :subtitle="null"
      :title="null"
      back-button-text="Previous"
      class="vertical-steps steps-transparent mb-3"
      color="#7367F0"
      finish-button-text="Submit"
      layout="vertical"
      @on-complete="formSubmitted"
    >
      
      <!-- account details tab -->
      <tab-content
        icon="feather icon-file-text"
        title="Account Details"
      >
        <b-row>
          <b-col
            class="mb-2"
            cols="12"
          >
            <h5 class="mb-0">
              Account Details </h5>
            <small class="text-muted"> Enter Your Account Details. </small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Username"
              label-for="vi-username"
            >
              <b-form-input
                id="vi-username"
                placeholder="johndoe"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Email"
              label-for="vi-email"
            >
              <b-form-input
                id="vi-email"
                placeholder="john.doe@email.com"
                type="email"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Password"
              label-for="vi-password"
            >
              <b-form-input
                id="vi-password"
                placeholder="Password"
                type="password"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Confirm Password"
              label-for="vi-c-password"
            >
              <b-form-input
                id="vi-c-password"
                placeholder="Re-type Password"
                type="password"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>
      
      <!-- personal details tab -->
      <tab-content
        icon="feather icon-user"
        title="Personal Info"
      >
        <b-row>
          <b-col
            class="mb-2"
            cols="12"
          >
            <h5 class="mb-0">
              Personal Info </h5>
            <small class="text-muted">Enter Your Personal Info.</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="First Name"
              label-for="vi-first-name"
            >
              <b-form-input
                id="vi-first-name"
                placeholder="John"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Last Name"
              label-for="vi-last-name"
            >
              <b-form-input
                id="vi-last-name"
                placeholder="Doe"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Country"
              label-for="vi-country"
            >
              <v-select
                id="vi-country"
                v-model="selectedContry"
                :dir="$store.state.chat.isRTL ? 'rtl' : 'ltr'"
                :options="countryName"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Language"
              label-for="vi-language"
            >
              <v-select
                id="vi-language"
                v-model="selectedLanguage"
                :dir="$store.state.chat.isRTL ? 'rtl' : 'ltr'"
                :options="languageName"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>
      
      <!-- address -->
      <tab-content
        icon="feather icon-map-pin"
        title="Address"
      >
        <b-row>
          <b-col
            class="mb-2"
            cols="12"
          >
            <h5 class="mb-0">
              Address </h5>
            <small class="text-muted">Enter Your Address.</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Address"
              label-for="vi-address"
            >
              <b-form-input
                id="vi-address"
                placeholder="98 Borough bridge Road, Birmingham"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Landmark"
              label-for="vi-landmark"
            >
              <b-form-input
                id="vi-landmark"
                placeholder="Borough bridge"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Pincode"
              label-for="vi-pincode"
            >
              <b-form-input
                id="vi-pincode"
                placeholder="658921"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="City"
              label-for="vi-city"
            >
              <b-form-input
                id="vi-city"
                placeholder="Birmingham"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>
      
      <!-- social link -->
      <tab-content
        icon="feather icon-link"
        title="Social Links"
      >
        <b-row>
          <b-col
            class="mb-2"
            cols="12"
          >
            <h5 class="mb-0">
              Social Links </h5>
            <small class="text-muted">Enter Your Social Links</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Twitter"
              label-for="vi-twitter"
            >
              <b-form-input
                id="vi-twitter"
                placeholder="https://twitter.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Facebook"
              label-for="vi-facebook"
            >
              <b-form-input
                id="vi-facebook"
                placeholder="https://facebook.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Google+"
              label-for="vi-google-plus"
            >
              <b-form-input
                id="vi-google-plus"
                placeholder="https://plus.google.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="LinkedIn"
              label-for="vi-linked-in"
            >
              <b-form-input
                id="vi-linked-in"
                placeholder="https://linkedin.com/abc"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>
    </form-wizard>
  
  </div>
</template>

<script>
import { FormWizard, TabContent }             from "vue-form-wizard"
import vSelect                                from "vue-select"
import "vue-form-wizard/dist/vue-form-wizard.min.css"
import { BRow, BCol, BFormGroup, BFormInput } from "bootstrap-vue"
import ToastificationContent                  from "@core/components/toastification/ToastificationContent.vue"
import { codeIconInfo }                       from "./code"


export default {
  components: {
    FormWizard,
    TabContent,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    vSelect, // eslint-disable-next-line vue/no-unused-components
    ToastificationContent
  },
  data () {
    return {
      selectedContry:   "select_value",
      selectedLanguage: "nothing_selected",
      codeIconInfo,
      countryName:      [
        {
          value: "select_value",
          text:  "Select Value"
        },
        {
          value: "Russia",
          text:  "Russia"
        },
        {
          value: "Canada",
          text:  "Canada"
        },
        {
          value: "China",
          text:  "China"
        },
        {
          value: "United States",
          text:  "United States"
        },
        {
          value: "Brazil",
          text:  "Brazil"
        },
        {
          value: "Australia",
          text:  "Australia"
        },
        {
          value: "India",
          text:  "India"
        }
      ],
      languageName:     [
        {
          value: "nothing_selected",
          text:  "Nothing Selected"
        },
        {
          value: "English",
          text:  "English"
        },
        {
          value: "Chinese",
          text:  "Mandarin Chinese"
        },
        {
          value: "Hindi",
          text:  "Hindi"
        },
        {
          value: "Spanish",
          text:  "Spanish"
        },
        {
          value: "Arabic",
          text:  "Arabic"
        },
        {
          value: "Malay",
          text:  "Malay"
        },
        {
          value: "Russian",
          text:  "Russian"
        }
      ]
    }
  },
  methods: {
    formSubmitted () {
      this.$toast( {
                     component: ToastificationContent,
                     props:     {
                       title:   "Form Submitted",
                       icon:    "EditIcon",
                       variant: "success"
                     }
                   } )
    }
  }
}
</script>
