<template>
  <b-card no-body>
    <b-card-header class="pb-50">
      <h5>
        Filters
      </h5>
    </b-card-header>
    <b-card-body>
      <b-row>
        <b-col
          class="mb-md-0 mb-2"
          cols="12"
          md="4"
        >
          <label>Role</label>
          <v-select
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="roleOptions"
            :reduce="val => val.value"
            :value="roleFilter"
            class="w-100"
            @input="(val) => $emit('update:roleFilter', val)"
          />
        </b-col>
        <b-col
          class="mb-md-0 mb-2"
          cols="12"
          md="4"
        >
          <label>Plan</label>
          <v-select
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="planOptions"
            :reduce="val => val.value"
            :value="planFilter"
            class="w-100"
            @input="(val) => $emit('update:planFilter', val)"
          />
        </b-col>
        <b-col
          class="mb-md-0 mb-2"
          cols="12"
          md="4"
        >
          <label>Status</label>
          <v-select
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="statusOptions"
            :reduce="val => val.value"
            :value="statusFilter"
            class="w-100"
            @input="(val) => $emit('update:statusFilter', val)"
          />
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardBody, BCardHeader, BCol, BRow,
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    vSelect,
  },
  props: {
    roleFilter: {
      type: [String, null],
      default: null,
    },
    planFilter: {
      type: [String, null],
      default: null,
    },
    statusFilter: {
      type: [String, null],
      default: null,
    },
    roleOptions: {
      type: Array,
      required: true,
    },
    planOptions: {
      type: Array,
      required: true,
    },
    statusOptions: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
