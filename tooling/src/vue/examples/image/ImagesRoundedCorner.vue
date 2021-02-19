<template>
  <b-card-code title="Rounded corners">
    <b-card-text class="mb-0">
      <span>You can control which corners are rounded by setting the rounded prop to one of the following values:</span>
      <code>true,false,top,right,bottom,left,circle,0</code>
    </b-card-text>
    
    <div class="demo-inline-spacing">
      <b-img
        v-bind="mainProps"
        alt="Rounded image"
        class="d-inline-block"
        rounded
      />
      <b-img
        v-bind="mainProps"
        alt="Top-rounded image"
        class="d-inline-block"
        rounded="top"
      />
      <b-img
        v-bind="mainProps"
        alt="Right-rounded image"
        class="d-inline-block"
        rounded="right"
      />
      <b-img
        v-bind="mainProps"
        alt="Bottom-rounded image"
        class="d-inline-block"
        rounded="bottom"
      />
      <b-img
        v-bind="mainProps"
        alt="Left-rounded image"
        class="d-inline-block"
        rounded="left"
      />
      <b-img
        v-bind="mainProps"
        alt="Circle image"
        class="d-inline-block"
        rounded="circle"
      />
      <b-img
        v-bind="mainProps"
        alt="Not rounded image"
        class="d-inline-block"
        rounded="0"
      />
    </div>
    
    <template #code>
      {{ codeRoundedCorner }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode             from "@core/components/b-card-code";
import { BCardText, BImg }   from "bootstrap-vue";
import { codeRoundedCorner } from "./code";


export default {
  components: {
    BCardCode,
    BImg,
    BCardText
  },
  data () {
    return {
      mainProps: {
        blank:      true,
        blankColor: "#777",
        width:      75,
        height:     75,
        class:      "m1"
      },
      codeRoundedCorner
    };
  }
};
</script>
