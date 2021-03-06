<template>
  <b-sidebar
    id="add-new-user-sidebar"
    :visible="isAddNewUserSidebarActive"
    backdrop
    bg-variant="white"
    no-header
    right
    shadow
    sidebar-class="sidebar-lg"
    @change="(val) => $emit('update:is-add-new-contacts-sidebar-active', val)"
    @hidden="resetForm"
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
        <h5 class="mb-0">
          Add New User
        </h5>
        
        <feather-icon
          class="ml-1 cursor-pointer"
          icon="XIcon"
          size="16"
          @click="hide"
        />
      
      </div>
      
      <!-- BODY -->
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
          
          <!-- Full Name -->
          <validation-provider
            #default="validationContext"
            name="Full Name"
            rules="required"
          >
            <b-form-group
              label="Full Name"
              label-for="full-name"
            >
              <b-form-input
                id="full-name"
                v-model="userData.fullName"
                :state="getValidationState(validationContext)"
                autofocus
                placeholder="John Doe"
                trim
              />
              
              <b-form-invalid-feedback>
                {{ validationContext.errors[ 0 ] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          
          <!-- Username -->
          <validation-provider
            #default="validationContext"
            name="Username"
            rules="required|alpha-num"
          >
            <b-form-group
              label="Username"
              label-for="username"
            >
              <b-form-input
                id="username"
                v-model="userData.username"
                :state="getValidationState(validationContext)"
                trim
              />
              
              <b-form-invalid-feedback>
                {{ validationContext.errors[ 0 ] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          
          <!-- Email -->
          <validation-provider
            #default="validationContext"
            name="Email"
            rules="required|email"
          >
            <b-form-group
              label="Email"
              label-for="email"
            >
              <b-form-input
                id="email"
                v-model="userData.email"
                :state="getValidationState(validationContext)"
                trim
              />
              
              <b-form-invalid-feedback>
                {{ validationContext.errors[ 0 ] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          
          <!-- Company -->
          <validation-provider
            #default="validationContext"
            name="Contact"
            rules="required"
          >
            <b-form-group
              label="Contact"
              label-for="contact"
            >
              <b-form-input
                id="contact"
                v-model="userData.contact"
                :state="getValidationState(validationContext)"
                trim
              />
              
              <b-form-invalid-feedback>
                {{ validationContext.errors[ 0 ] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          
          <!-- Company -->
          <validation-provider
            #default="validationContext"
            name="Company"
            rules="required"
          >
            <b-form-group
              label="Company"
              label-for="company"
            >
              <b-form-input
                id="company"
                v-model="userData.company"
                :state="getValidationState(validationContext)"
                trim
              />
              
              <b-form-invalid-feedback>
                {{ validationContext.errors[ 0 ] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          
          <!-- Country -->
          <validation-provider
            #default="validationContext"
            name="Country"
            rules="required"
          >
            <b-form-group
              :state="getValidationState(validationContext)"
              label="Country"
              label-for="country"
            >
              <v-select
                v-model="userData.country"
                :clearable="false"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="countries"
                input-id="country"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[ 0 ] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          
          <!-- User Role -->
          <validation-provider
            #default="validationContext"
            name="User Role"
            rules="required"
          >
            <b-form-group
              :state="getValidationState(validationContext)"
              label="User Role"
              label-for="user-role"
            >
              <v-select
                v-model="userData.role"
                :clearable="false"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="roleOptions"
                :reduce="val => val.value"
                input-id="user-role"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[ 0 ] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          
          <!-- Plan -->
          <validation-provider
            #default="validationContext"
            name="Plan"
            rules="required"
          >
            <b-form-group
              :state="getValidationState(validationContext)"
              label="Plan"
              label-for="plan"
            >
              <v-select
                v-model="userData.currentPlan"
                :clearable="false"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="planOptions"
                :reduce="val => val.value"
                input-id="plan"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[ 0 ] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          
          <!-- Form Actions -->
          <div class="d-flex mt-2">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              class="mr-2"
              type="submit"
              variant="primary"
            >
              Add
            </b-button>
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="button"
              variant="outline-secondary"
              @click="hide"
            >
              Cancel
            </b-button>
          </div>
        
        </b-form>
      </validation-observer>
    </template>
  </b-sidebar>
</template>

<script>
import countries                                                                  from "@/@fake-db/data/other/countries";
import store                                                                      from "@/store";
import formValidation                                                             from "@core/comp-functions/forms/form-validation";
import { alphaNum, email, required }                                              from "@validations";
import { ref }                                                                    from "@vue/composition-api";
import { BButton, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BSidebar } from "bootstrap-vue";
import { ValidationObserver, ValidationProvider }                                 from "vee-validate";
import Ripple                                                                     from "vue-ripple-directive";
import vSelect                                                                    from "vue-select";


export default {
  components: {
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BButton,
    vSelect,
    
    // Form Validation
    ValidationProvider,
    ValidationObserver
  },
  directives: {
    Ripple
  },
  model:      {
    prop:  "isAddNewUserSidebarActive",
    event: "update:is-add-new-contacts-sidebar-active"
  },
  props:      {
    isAddNewUserSidebarActive: {
      type:     Boolean,
      required: true
    },
    roleOptions:               {
      type:     Array,
      required: true
    },
    planOptions:               {
      type:     Array,
      required: true
    }
  },
  data () {
    return {
      required,
      alphaNum,
      email,
      countries
    };
  },
  setup ( props, { emit } ) {
    const blankUserData = {
      fullName:    "",
      username:    "",
      email:       "",
      role:        null,
      currentPlan: null,
      company:     "",
      country:     "",
      contact:     ""
    };
    
    const userData = ref( JSON.parse( JSON.stringify( blankUserData ) ) );
    const resetuserData = () => {
      userData.value = JSON.parse( JSON.stringify( blankUserData ) );
    };
    
    const onSubmit = () => {
      store.dispatch( "styles-contacts/addUser", userData.value )
        .then( () => {
          emit( "refetch-data" );
          emit( "update:is-add-new-contacts-sidebar-active", false );
        } );
    };
    
    const {
            refFormObserver,
            getValidationState,
            resetForm
          } = formValidation( resetuserData );
    
    return {
      userData,
      onSubmit,
      
      refFormObserver,
      getValidationState,
      resetForm
    };
  }
};
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

#add-new-user-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
</style>
