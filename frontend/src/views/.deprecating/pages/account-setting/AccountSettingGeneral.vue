<template>
  <b-card>
    
    <!-- media -->
    <b-media no-body>
      <b-media-aside>
        <b-link>
          <b-img ref="previewEl" :src="optionsLocal.avatar" height="80" rounded />
        </b-link>
        <!--/ avatar -->
      </b-media-aside>
      
      <b-media-body class="mt-75 ml-75">
        <!-- upload button -->
        <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" class="mb-75 mr-75" size="sm" variant="primary" @click="$refs.refInputEl.$el.click()">
          Upload
        </b-button>
        <b-form-file ref="refInputEl" v-model="profileFile" :hidden="true" accept=".jpg, .png, .gif" plain @input="inputImageRenderer" />
        <!--/ upload button -->
        
        <!-- reset -->
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" class="mb-75 mr-75" size="sm" variant="outline-secondary">
          Reset
        </b-button>
        <!--/ reset -->
        <b-card-text>Allowed JPG, GIF or PNG. Max size of 800kB</b-card-text>
      </b-media-body>
    </b-media>
    <!--/ media -->
    
    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col sm="6">
          <b-form-group label="Username" label-for="account-username">
            <b-form-input v-model="optionsLocal.username" name="username" placeholder="Username" />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group label="Name" label-for="account-name">
            <b-form-input v-model="optionsLocal.fullName" name="name" placeholder="Name" />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group label="E-mail" label-for="account-e-mail">
            <b-form-input v-model="optionsLocal.email" name="email" placeholder="Email" />
          
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group label="Company" label-for="account-company">
            <b-form-input v-model="optionsLocal.company" name="company" placeholder="Company name" />
          </b-form-group>
        </b-col>
        
        <!-- alert -->
        <b-col class="mt-75" cols="12">
          <b-alert class="mb-50" show variant="warning">
            <h4 class="alert-heading">
              Your email is not confirmed. Please check your inbox. </h4>
            <div class="alert-body">
              <b-link class="alert-link">
                Resend confirmation
              </b-link>
            </div>
          </b-alert>
        </b-col>
        <!--/ alert -->
        
        <b-col cols="12">
          <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" class="mt-2 mr-1" variant="primary">
            Save changes
          </b-button>
          <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" class="mt-2" type="reset" variant="outline-secondary" @click.prevent="resetForm">
            Reset
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import {
  BFormFile, BButton, BForm, BFormGroup, BFormInput, BRow, BCol, BAlert, BCard, BCardText, BMedia, BMediaAside, BMediaBody, BLink, BImg
}                                from "bootstrap-vue"
import Ripple                    from "vue-ripple-directive"
import { useInputImageRenderer } from "@utils/comp-functions/forms/form-utils"
import { ref }                   from "@vue/composition-api"


export default {
  components: {
    BButton,
    BForm,
    BImg,
    BFormFile,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    BAlert,
    BCard,
    BCardText,
    BMedia,
    BMediaAside,
    BMediaBody,
    BLink
  },
  directives: {
    Ripple
  },
  props:      {
    generalData: {
      type:    Object,
      default: () => {}
    }
  },
  data () {
    return {
      optionsLocal: JSON.parse( JSON.stringify( this.generalData ) ),
      profileFile:  null
    }
  },
  methods: {
    resetForm () {
      this.optionsLocal = JSON.parse( JSON.stringify( this.generalData ) )
    }
  },
  setup () {
    const refInputEl = ref( null )
    const previewEl = ref( null )
    
    const { inputImageRenderer } = useInputImageRenderer( refInputEl, previewEl )
    
    return {
      refInputEl,
      previewEl,
      inputImageRenderer
    }
  }
}
</script>
