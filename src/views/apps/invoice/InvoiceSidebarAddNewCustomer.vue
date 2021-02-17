<template>
  <b-sidebar
    id="sidebar-invoice-add-new-customer"
    backdrop
    bg-variant="white"
    no-header
    right
    shadow
    sidebar-class="sidebar-lg"
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
        <h5 class="mb-0">
          Add Customer
        </h5>

        <feather-icon
          class="ml-1 cursor-pointer"
          icon="XIcon"
          size="16"
          @click="hide"
        />

      </div>

      <!-- Body -->
      <b-form
        class="p-2"
        @submit.prevent
      >

        <!-- Customer Name -->
        <b-form-group
          label="Customer Name"
          label-for="customer-name"
        >
          <b-form-input
            id="customer-name"
            v-model="customer.name"
            placeholder="John Doe"
            trim
          />
        </b-form-group>

        <!-- Email -->
        <b-form-group
          label="Email"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="customer.email"
            placeholder="example@domain.com"
            trim
            type="email"
          />
        </b-form-group>

        <!-- Address -->
        <b-form-group
          label="Address"
          label-for="address"
        >
          <b-form-textarea
            id="address"
            v-model="customer.message"
            placeholder="221B Baker Street"
            trim
          />
        </b-form-group>

        <!-- Country -->
        <b-form-group
          label="Country"
          label-for="country"
        >
          <v-select
            v-model="customer.country"
            :clearable="false"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="countries"
            input-id="country"
          />
        </b-form-group>

        <!-- Contact -->
        <b-form-group
          label="Contact"
          label-for="contact"
        >
          <b-form-input
            id="contact"
            v-model="customer.contact"
            placeholder="763-242-9206"
            trim
            type="number"
          />
        </b-form-group>

        <!-- Form Actions -->
        <div class="d-flex mt-2">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="mr-2"
            type="submit"
            variant="primary"
            @click="hide"
          >
            Add
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            variant="outline-secondary"
            @click="hide"
          >
            Cancel
          </b-button>
        </div>
      </b-form>
    </template>
  </b-sidebar>
</template>

<script>
import countries from '@/@fake-db/data/other/countries'
import { ref } from '@vue/composition-api'
import {
  BButton, BForm, BFormGroup, BFormInput, BFormTextarea, BSidebar,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'

export default {
  components: {
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BButton,
    vSelect,
  },
  directives: {
    Ripple,
  },
  setup() {
    const customer = ref({
      name: '',
      email: '',
      address: '',
      country: '',
      contact: '',
    })

    return {
      customer,
      countries,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
