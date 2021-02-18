<template>
  <b-card-code title="Modal Themes">
    <b-card-text class="mb-0">
      <span>Use class </span>
      <code>modal-class="modal-{color}"</code>
      <span> with your </span>
      <code>&lt;b-modal&gt;</code>
      <span> to change theme of modal</span>
    </b-card-text>
    
    <!-- button trigger -->
    <div class="demo-inline-spacing">
      <b-button
        v-b-modal.modal-primary
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Primary
      </b-button>
      <b-button
        v-b-modal.modal-seconday
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        variant="outline-secondary"
      >
        Secondary
      </b-button>
      <b-button
        v-b-modal.modal-success
        v-ripple.400="'rgba(40, 199, 111, 0.15)'"
        variant="outline-success"
      >
        Success
      </b-button>
      <b-button
        v-b-modal.modal-danger
        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
        variant="outline-danger"
      >
        Danger
      </b-button>
      <b-button
        v-b-modal.modal-warning
        v-ripple.400="'rgba(255, 159, 67, 0.15)'"
        variant="outline-warning"
      >
        Warning
      </b-button>
      <b-button
        v-b-modal.modal-info
        v-ripple.400="'rgba(0, 207, 232, 0.15)'"
        variant="outline-info"
      >
        Info
      </b-button>
      <b-button
        v-b-modal.modal-dark
        v-ripple.400="'rgba(30, 30, 30, 0.15)'"
        variant="outline-dark"
      >
        Dark
      </b-button>
    </div>
    
    <!-- modal -->
    <b-modal
      id="modal-primary"
      centered
      modal-class="modal-primary"
      ok-only
      ok-title="Accept"
      title="Primary Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>
    
    <b-modal
      id="modal-seconday"
      centered
      modal-class="modal-secondary"
      ok-only
      ok-title="Accept"
      ok-variant="secondary"
      title="Secondary Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>
    
    <b-modal
      id="modal-success"
      centered
      modal-class="modal-success"
      ok-only
      ok-title="Accept"
      ok-variant="success"
      title="Success Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>
    
    <b-modal
      id="modal-danger"
      centered
      modal-class="modal-danger"
      ok-only
      ok-title="Accept"
      ok-variant="danger"
      title="Danger Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>
    
    <b-modal
      id="modal-info"
      centered
      modal-class="modal-info"
      ok-only
      ok-title="Accept"
      ok-variant="info"
      title="Info Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>
    
    <b-modal
      id="modal-warning"
      centered
      modal-class="modal-warning"
      ok-only
      ok-title="Accept"
      ok-variant="warning"
      title="Warning Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>
    
    <b-modal
      id="modal-dark"
      centered
      modal-class="modal-dark"
      ok-only
      ok-title="Accept"
      ok-variant="dark"
      title="Dark Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>
    
    <template #code>
      {{ codeThemes }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                               from "@core/components/b-card-code";
import { BButton, BCardText, BModal, VBModal } from "bootstrap-vue";
import Ripple                                  from "vue-ripple-directive";
import { codeThemes }                          from "./code";

// set ripple zIndex to 1 so it doesn't overlap on modal
Ripple.zIndex = 1;

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
    BModal
  },
  directives: {
    "b-modal": VBModal,
    Ripple
  },
  data () {
    return {
      codeThemes
    };
  }
};
</script>
