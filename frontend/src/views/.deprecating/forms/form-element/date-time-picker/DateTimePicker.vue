<template>
  <b-card-code title="Flat Picker">
    <b-row>
      
      <!-- default -->
      <b-col md="6">
        <b-form-group>
          <h5 class="font-weight-bold">
            Default </h5>
          <flat-pickr v-model="dateDefault" class="form-control" />
        </b-form-group>
      </b-col>
      
      <!-- time picker -->
      <b-col md="6">
        <b-form-group>
          <h5>Time picker</h5>
          <flat-pickr v-model="timePicker" :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i',}" class="form-control" />
        </b-form-group>
      </b-col>
      
      <!-- date and time -->
      <b-col md="6">
        <b-form-group>
          <h5>Date & TIme</h5>
          <flat-pickr v-model="dateNtim" :config="{ enableTime: true,dateFormat: 'Y-m-d H:i'}" class="form-control" />
        </b-form-group>
      </b-col>
      
      <!-- multiple dates -->
      <b-col md="6">
        <b-form-group>
          <h5>Multiple Dates</h5>
          <flat-pickr v-model="multiDate" :config="{ mode: 'multiple',dateFormat: 'Y-m-d'}" class="form-control" />
        </b-form-group>
      </b-col>
      
      <!-- range -->
      <b-col md="6">
        <b-form-group>
          <h5>Range</h5>
          <flat-pickr v-model="rangeDate" :config="{ mode: 'range'}" class="form-control" />
        </b-form-group>
      </b-col>
      
      <!-- human friendly -->
      <b-col md="6">
        <b-form-group>
          <h5>Human Friendly</h5>
          <flat-pickr v-model="humanDate" :config="{ altInput: true,altFormat: 'F j, Y', dateFormat: 'Y-m-d',}" class="form-control" />
        </b-form-group>
      </b-col>
      
      <!-- disabled range -->
      <b-col md="6">
        <b-form-group>
          <h5>Disabled Range</h5>
          <flat-pickr v-model="disableDate" :config="{ dateFormat: 'Y-m-d',disable:[{from:'2020-08-20',to:'2020-08-25'}]}" class="form-control" />
        </b-form-group>
      </b-col>
      
      <!-- inline -->
      <b-col md="6">
        <b-form-group>
          <h5>Inline</h5>
          <flat-pickr v-model="inlineDate" :config="{ inline: true}" class="form-control" />
        </b-form-group>
      </b-col>
    </b-row>
    
    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                  from "@core/components/b-card-code/BCardCode.vue"
import { BRow, BCol, BFormGroup } from "bootstrap-vue"
import flatPickr                  from "vue-flatpickr-component"
import { codeBasic }              from "./code"


export default {
  components: {
    BRow,
    BCol,
    
    flatPickr,
    BCardCode,
    BFormGroup
  },
  data () {
    return {
      date:        null,
      dateDefault: null,
      timePicker:  null,
      dateNtim:    null,
      multiDate:   null,
      rangeDate:   null,
      humanDate:   null,
      disableDate: null,
      inlineDate:  null,
      codeBasic
    }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
