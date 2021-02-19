<template>
  <b-card-code title="Form confirmation prompt and upload status">
    <b-card-text>
      <span>This example is a bit more complex, but shows the use of </span>
      <code>no-wrap</code>
      <span> , and using the </span>
      <code>overlay</code>
      <span> slot to present the user with a prompt dialog, and once confirmed it shows a uploading status indicator. This
        example also demonstrates additional accessibility markup.
      </span>
    </b-card-text>
    
    <div>
      <b-form
        class="position-relative"
        @submit.prevent="onSubmit"
      >
        <b-form-group
          label="Name"
          label-cols-lg="2"
          label-for="form-name"
        >
          <b-input-group>
            <b-input-group-prepend is-text>
              <feather-icon
                icon="UserIcon"
              />
            </b-input-group-prepend>
            <b-form-input
              id="form-name"
              :disabled="busy"
            />
          </b-input-group>
        </b-form-group>
        <b-form-group
          label="Email"
          label-cols-lg="2"
          label-for="form-mail"
        >
          <b-input-group>
            <b-input-group-prepend is-text>
              <feather-icon icon="MailIcon" />
            </b-input-group-prepend>
            <b-form-input
              id="form-email"
              :disabled="busy"
              type="email"
            />
          </b-input-group>
        </b-form-group>
        <b-form-group
          label="Image"
          label-cols-lg="2"
          label-for="form-image"
        >
          <b-input-group>
            <b-input-group-prepend is-text>
              <feather-icon icon="ImageIcon" />
            </b-input-group-prepend>
            <b-form-file
              id="form-image"
              :disabled="busy"
              accept="image/*"
            />
          </b-input-group>
        </b-form-group>
        <div class="d-flex justify-content-center">
          <b-button
            ref="submit"
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            :disabled="busy"
            type="submit"
            variant="primary"
          >
            Submit
          </b-button>
        </div>
        
        <b-overlay
          :show="busy"
          no-wrap
          @hidden="onHidden"
          @shown="onShown"
        >
          <template #overlay>
            <div
              v-if="processing"
              class="text-center p-3 bg-primary text-light rounded"
            >
              <feather-icon
                icon="UploadCloudIcon"
                size="20"
              />
              <div class="mb-2">
                Processing...
              </div>
              <b-progress
                :value="counter"
                class="mx-n3"
                height="6px"
                max="20"
                min="1"
                variant="success"
              />
            </div>
            <div
              v-else
              ref="dialog"
              aria-labelledby="form-confirm-label"
              aria-modal="false"
              class="text-center p-3"
              role="dialog"
              tabindex="-1"
            >
              <b-card-text class="font-weight-bolder">
                Are you sure?
              </b-card-text>
              <div class="d-flex">
                <b-button
                  v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                  class="mr-3"
                  variant="outline-danger"
                  @click="onCancel"
                >
                  Cancel
                </b-button>
                <b-button
                  v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                  variant="outline-success"
                  @click="onOK"
                >
                  OK
                </b-button>
              </div>
            </div>
          </template>
        </b-overlay>
      </b-form>
    </div>
    
    <template #code>
      {{ codeForm }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                                                                                              from "@core/components/b-card-code";
import { BButton, BCardText, BForm, BFormFile, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BOverlay, BProgress } from "bootstrap-vue";
import Ripple
                                                                                                                              from "vue-ripple-directive";
import { codeForm }                                                                                                           from "./code";


export default {
  components: {
    BButton,
    BOverlay,
    BForm,
    BProgress,
    BFormGroup,
    BInputGroup,
    BCardCode,
    BInputGroupPrepend,
    BFormInput,
    BFormFile,
    BCardText
  },
  directives: {
    Ripple
  },
  data () {
    return {
      busy:       false,
      processing: false,
      counter:    1,
      interval:   null,
      codeForm
    };
  },
  beforeDestroy () {
    this.clearInterval();
  },
  methods: {
    clearInterval () {
      if ( this.interval ) {
        clearInterval( this.interval );
        this.interval = null;
      }
    },
    onShown () {
      // Focus the dialog prompt
      this.$refs.dialog.focus();
    },
    onHidden () {
      // In this case, we return focus to the submit button
      // You may need to alter this based on your application requirements
      this.$refs.submit.focus();
    },
    onSubmit () {
      this.processing = false;
      this.busy = true;
    },
    onCancel () {
      this.busy = false;
    },
    onOK () {
      this.counter = 1;
      this.processing = true;
      // Simulate an async request
      this.clearInterval();
      this.interval = setInterval( () => {
        if ( this.counter < 20 ) {
          this.counter += 1;
        }
        else {
          this.clearInterval();
          this.$nextTick( () => {
            // eslint-disable-next-line
            this.busy = this.processing = false;
          } );
        }
      }, 350 );
    }
  }
};
</script>
