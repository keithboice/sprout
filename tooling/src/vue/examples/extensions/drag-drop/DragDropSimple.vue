<template>
  <b-card-code title="Simple">
    <b-card-text>
      <span>Simple Draggable list with in sync to original list. Remove </span>
      <code>list</code>
      <span> prop to break synchronization with original list.</span>
    </b-card-text>
    
    <!-- draggable -->
    <draggable
      v-model="list"
      class="list-group list-group-flush cursor-move"
      tag="ul"
    >
      <b-list-group-item
        v-for="(item, index) in list"
        :key="index"
        tag="li"
      >
        <strong> {{ item }}</strong>
      </b-list-group-item>
    </draggable>
    
    <!-- code -->
    <prism
      class="rounded mt-2"
      language="javascript"
    >list: {{ list }}
    </prism>
    
    <!-- togglable code -->
    <template #code>
      {{ codeSimple }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                     from "@core/components/b-card-code/BCardCode.vue";
import { BCardText, BListGroupItem } from "bootstrap-vue";
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import Prism                         from "vue-prism-component";
import draggable                     from "vuedraggable";
import { codeSimple }                from "./code";


export default {
  components: {
    BCardCode,
    draggable,
    BListGroupItem,
    Prism,
    BCardText
  },
  data () {
    return {
      codeSimple,
      list: [
        "Marzipan I love I love. Soufflé donut I love gummi bears powder. Candy danish biscuit.",
        "Halvah bonbon bonbon brownie sugar plum. Halvah I love cupcake I love.",
        "Cake muffin icing topping wafer topping gummi bears apple pie.",
        "Cotton candy gummi bears bear claw cake brownie jelly-o lemon drops croissant sweet roll."
      ]
    };
  }
};
</script>
