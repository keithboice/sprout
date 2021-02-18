<template>
  <div>
    <b-card-code title="Icon Only">
      <b-card-text class="mb-0">
        You can only use .btn-icon when you only want icon in your button
      </b-card-text>
      
      <div class="demo-inline-spacing">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          class="btn-icon"
          variant="warning"
        >
          <feather-icon icon="ArchiveIcon" />
        </b-button>
        
        <b-button
          class="btn-icon"
          variant="gradient-danger"
        >
          <feather-icon icon="UserPlusIcon" />
        </b-button>
        
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          class="btn-icon rounded-circle"
          variant="warning"
        >
          <feather-icon icon="ArchiveIcon" />
        </b-button>
        
        <b-button
          class="btn-icon rounded-circle"
          variant="gradient-danger"
        >
          <feather-icon icon="UserPlusIcon" />
        </b-button>
        
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          class="btn-icon"
          variant="outline-primary"
        >
          <feather-icon icon="SearchIcon" />
        </b-button>
        
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          class="btn-icon"
          disabled
          variant="outline-primary"
        >
          <feather-icon icon="SearchIcon" />
        </b-button>
        
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          class="btn-icon rounded-circle"
          variant="outline-primary"
        >
          <feather-icon icon="SearchIcon" />
        </b-button>
        
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          class="btn-icon rounded-circle"
          disabled
          variant="outline-primary"
        >
          <feather-icon icon="SearchIcon" />
        </b-button>
        
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          class="btn-icon rounded-circle"
          variant="flat-success"
        >
          <feather-icon icon="CameraIcon" />
        </b-button>
        
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          class="btn-icon"
          variant="flat-success"
        >
          <feather-icon icon="CameraIcon" />
        </b-button>
      </div>
      
      <template #code>
        {{ codeButtonIconOnly }}
      </template>
    </b-card-code>
  </div>
</template>

<script>
import BCardCode              from "@core/components/b-card-code";
import { BButton, BCardText } from "bootstrap-vue";
import Ripple                 from "vue-ripple-directive";
import { codeButtonIconOnly } from "./code";


export default {
  components: {
    BCardCode,
    BButton,
    BCardText
  },
  directives: {
    Ripple
  },
  data () { return { codeButtonIconOnly }; }
};
</script>
