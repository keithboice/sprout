<template>
  <b-card-code title="Fade transition">
    <b-card-text>
      <span>By default, the overlay uses Bootstrap's fade transition when showing or hiding. You can disable the fade
        transition via adding the
      </span>
      <code>no-fade</code>
      <span> prop to </span>
      <code> &lt;b-overlay&gt;.</code>
    </b-card-text>
    
    <div>
      <b-overlay
        :show="show"
        no-fade
        rounded="sm"
      >
        <div
          :aria-hidden="show ? 'true' : null"
          title="Card with overlay"
        >
          <b-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptatibus doloremque dolor nesciunt
            est nobis consequuntur maxime ea ipsam? Doloribus quidem doloremque ad laudantium ullam eos, consequuntur
            velit quas vero.
          </b-card-text>
          
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            :disabled="show"
            variant="outline-primary"
            @click="show = true"
          >
            Show overlay
          </b-button>
        </div>
      </b-overlay>
      
      <!-- trigger button -->
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        class="mt-1"
        variant="primary"
        @click="show = !show"
      >
        Toggle overlay
      </b-button>
    </div>
    
    <template #code>
      {{ codeFade }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                        from "@core/components/b-card-code";
import { BButton, BCardText, BOverlay } from "bootstrap-vue";
import Ripple                           from "vue-ripple-directive";
import { codeFade }                     from "./code";


export default {
  components: {
    BCardCode,
    BOverlay,
    BButton,
    BCardText
  },
  directives: {
    Ripple
  },
  data () {
    return {
      show: false,
      codeFade
    };
  }
};
</script>
