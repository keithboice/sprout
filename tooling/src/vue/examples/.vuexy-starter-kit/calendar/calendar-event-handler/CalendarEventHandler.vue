<template>
  <div>
    <b-sidebar
      id="sidebar-add-new-event"
      :visible="isEventHandlerSidebarActive"
      backdrop
      bg-variant="white"
      no-header
      right
      shadow
      sidebar-class="sidebar-lg"
      @change="(val) => $emit('update:is-event-handler-sidebar-active', val)"
    >
      <template #default="{ hide }">
        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
          <h5 class="mb-0">
            {{ eventLocal.id ? "Update" : "Add" }} Event
          </h5>
          <div>
            <feather-icon
              v-if="eventLocal.id"
              class="cursor-pointer"
              icon="TrashIcon"
              @click="$emit('remove-event'); hide();"
            />
            <feather-icon
              class="ml-1 cursor-pointer"
              icon="XIcon"
              size="16"
              @click="hide"
            />
          </div>
        </div>
        
        <!-- Body -->
        <validation-observer
          ref="refFormObserver"
          #default="{ handleSubmit }"
        >
          
          <!-- Form -->
          <b-form
            class="p-2"
            @submit.prevent="handleSubmit(onSubmit)"
            @reset.prevent="resetForm"
          >
            
            <!-- Title -->
            <validation-provider
              #default="validationContext"
              name="Title"
              rules="required"
            >
              <b-form-group
                label="Title"
                label-for="event-title"
              >
                <b-form-input
                  id="event-title"
                  v-model="eventLocal.title"
                  :state="getValidationState(validationContext)"
                  autofocus
                  placeholder="Event Title"
                  trim
                />
                
                <b-form-invalid-feedback>
                  {{ validationContext.errors[ 0 ] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
            
            <!-- Calendar -->
            <validation-provider
              #default="validationContext"
              name="Calendar"
              rules="required"
            >
              
              <b-form-group
                :state="getValidationState(validationContext)"
                label="Calendar"
                label-for="calendar"
              >
                <v-select
                  v-model="eventLocal.extendedProps.calendar"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  :options="calendarOptions"
                  :reduce="calendar => calendar.label"
                  input-id="calendar"
                  label="label"
                >
                  
                  <template #option="{ color, label }">
                    <div
                      :class="`bg-${color}`"
                      class="rounded-circle d-inline-block mr-50"
                      style="height:10px;width:10px"
                    />
                    <span> {{ label }}</span>
                  </template>
                  
                  <template #selected-option="{ color, label }">
                    <div
                      :class="`bg-${color}`"
                      class="rounded-circle d-inline-block mr-50"
                      style="height:10px;width:10px"
                    />
                    <span> {{ label }}</span>
                  </template>
                </v-select>
                
                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                  {{ validationContext.errors[ 0 ] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
            
            <!-- Start Date -->
            <validation-provider
              #default="validationContext"
              name="Start Date"
              rules="required"
            >
              
              <b-form-group
                :state="getValidationState(validationContext)"
                label="Start Date"
                label-for="start-date"
              >
                <flat-pickr
                  v-model="eventLocal.start"
                  :config="{ enableTime: true, dateFormat: 'Y-m-d H:i'}"
                  class="form-control"
                />
                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                  {{ validationContext.errors[ 0 ] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
            
            <!-- End Date -->
            <validation-provider
              #default="validationContext"
              name="End Date"
              rules="required"
            >
              
              <b-form-group
                :state="getValidationState(validationContext)"
                label="End Date"
                label-for="end-date"
              >
                <flat-pickr
                  v-model="eventLocal.end"
                  :config="{ enableTime: true, dateFormat: 'Y-m-d H:i'}"
                  class="form-control"
                />
                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                  {{ validationContext.errors[ 0 ] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
            
            <!-- All Day -->
            <b-form-group>
              <b-form-checkbox
                v-model="eventLocal.allDay"
                inline
                name="check-button"
                switch
              >
                All Day
              </b-form-checkbox>
            </b-form-group>
            
            <!-- Event URL -->
            <validation-provider
              #default="validationContext"
              name="Event URL"
              rules="url"
            >
              
              <b-form-group
                label="Event URL"
                label-for="event-url"
              >
                <b-form-input
                  id="event-url"
                  v-model="eventLocal.eventUrl"
                  :state="getValidationState(validationContext)"
                  placeholder="htttps://www.google.com"
                  trim
                  type="url"
                />
                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                  {{ validationContext.errors[ 0 ] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
            
            <!-- Guests -->
            <b-form-group
              label="Add Guests"
              label-for="add-guests"
            >
              <v-select
                v-model="eventLocal.extendedProps.guests"
                :close-on-select="false"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="guestsOptions"
                input-id="add-guests"
                label="name"
                multiple
              >
                
                <template #option="{ avatar, name }">
                  <b-avatar
                    :src="avatar"
                    size="sm"
                  />
                  <span class="ml-50 align-middle"> {{ name }}</span>
                </template>
                
                <template #selected-option="{ avatar, name }">
                  <b-avatar
                    :src="avatar"
                    class="border border-white"
                    size="sm"
                  />
                  <span class="ml-50 align-middle"> {{ name }}</span>
                </template>
              </v-select>
            </b-form-group>
            
            <!-- Location -->
            <b-form-group
              label="Location"
              label-for="event-location"
            >
              <b-form-input
                id="event-location"
                v-model="eventLocal.extendedProps.location"
                placeholder="Event Location"
                trim
              />
            </b-form-group>
            
            <!-- Textarea -->
            <b-form-group
              label="Description"
              label-for="event-description"
            >
              <b-form-textarea
                id="event-description"
                v-model="eventLocal.extendedProps.description"
              />
            </b-form-group>
            
            <!-- Form Actions -->
            <div class="d-flex mt-2">
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                class="mr-2"
                type="submit"
                variant="primary"
              >
                {{ eventLocal.id ? "Update" : "Add " }}
              </b-button>
              <b-button
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                type="reset"
                variant="outline-secondary"
              >
                Reset
              </b-button>
            </div>
          </b-form>
        </validation-observer>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import formValidation                                                                                                    from "@core/comp-functions/forms/form-validation";
import { email, required, url }                                                                                          from "@validations";
import { ref, toRefs }                                                                                                   from "@vue/composition-api";
import { BAvatar, BButton, BForm, BFormCheckbox, BFormGroup, BFormInput, BFormInvalidFeedback, BFormTextarea, BSidebar } from "bootstrap-vue";
import { ValidationObserver, ValidationProvider }                                                                        from "vee-validate";
import flatPickr
                                                                                                                         from "vue-flatpickr-component";
import Ripple                                                                                                            from "vue-ripple-directive";
import vSelect                                                                                                           from "vue-select";
import useCalendarEventHandler
                                                                                                                         from "./useCalendarEventHandler";


export default {
  components: {
    BButton,
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BFormTextarea,
    BAvatar,
    vSelect,
    flatPickr,
    ValidationProvider,
    BFormInvalidFeedback,
    ValidationObserver
  },
  directives: {
    Ripple
  },
  model:      {
    prop:  "isEventHandlerSidebarActive",
    event: "update:is-event-handler-sidebar-active"
  },
  props:      {
    isEventHandlerSidebarActive: {
      type:     Boolean,
      required: true
    },
    event:                       {
      type:     Object,
      required: true
    },
    clearEventData:              {
      type:     Function,
      required: true
    }
  },
  data () {
    return {
      required,
      email,
      url
    };
  },
  setup ( props, { emit } ) {
    /*
     ? This is handled quite differently in SFC due to deadlock of `useFormValidation` and this composition function.
     ? If we don't handle it the way it is being handled then either of two composition function used by this SFC get undefined as one of it's argument.
     * The Trick:
     
     * We created reactive property `clearFormData` and set to null so we can get `resetEventLocal` from `useCalendarEventHandler` composition function.
     * Once we get `resetEventLocal` function which is required by `useFormValidation` we will pass it to `useFormValidation` and in return we will get `clearForm` function which shall be original value of `clearFormData`.
     * Later we just assign `clearForm` to `clearFormData` and can resolve the deadlock. 😎
     
     ? Behind The Scene
     ? When we passed it to `useCalendarEventHandler` for first time it will be null but right after it we are getting correct value (which is `clearForm`) and assigning that correct value.
     ? As `clearFormData` is reactive it is being changed from `null` to corrent value and thanks to reactivity it is also update in `useCalendarEventHandler` composition function and it is getting correct value in second time and can work w/o any issues.
     */
    const clearFormData = ref( null );
    
    const {
            eventLocal,
            resetEventLocal,
            calendarOptions,
      
            // UI
            onSubmit,
            guestsOptions
          } = useCalendarEventHandler( toRefs( props ), clearFormData, emit );
    
    const {
            refFormObserver,
            getValidationState,
            resetForm,
            clearForm
          } = formValidation( resetEventLocal, props.clearEventData );
    
    clearFormData.value = clearForm;
    
    return {
      // Add New Event
      eventLocal,
      calendarOptions,
      onSubmit,
      guestsOptions,
      
      // Form Validation
      resetForm,
      refFormObserver,
      getValidationState
    };
  }
};
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
