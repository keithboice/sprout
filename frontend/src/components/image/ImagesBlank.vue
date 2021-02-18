<template>
  <b-card-code title="Blank (or solid color) images">
    <b-card-text class="mb-0">
      <code>&lt;b-img&gt;</code>
      <span>
        provides built-in support for generating blank images (transparent by default) of any width and height, by
        setting the
      </span>
      <code>blank</code>
      <span> prop, and specifying </span>
      <code>width</code>
      <span> and </span>
      <code>height</code>
      <span>values (in pixels). You can apply any of the other </span>
      <code>&lt;b-img&gt;</code>
      <span> props to change the style/behavior of the generated image.</span>
    </b-card-text>
    
    <div class="demo-inline-spacing">
      
      <!--transparent img -->
      <b-img
        v-bind="mainProps"
        alt="Transparent image"
        class="d-inline-block border"
        rounded
      />
      
      <!-- primary color  -->
      <b-img
        v-bind="mainProps"
        alt="HEX shorthand color image (#777)"
        blank-color="#5A8DEE"
        class="d-inline-block"
        rounded
      />
      
      <!-- secondary -->
      <b-img
        v-bind="mainProps"
        alt="Named color image (red)"
        blank-color="#82868b"
        class="d-inline-block"
        rounded
      />
      
      <!-- success -->
      <b-img
        v-bind="mainProps"
        alt="Named color image (black)"
        blank-color="#39DA8A"
        class="d-inline-block"
        rounded
      />
      
      <!-- warning -->
      <b-img
        v-bind="mainProps"
        alt="RGBa color image"
        blank-color="#FDAC41"
        class="d-inline-block"
        rounded
      />
      
      <!-- danger -->
      <b-img
        v-bind="mainProps"
        alt="HEX color image"
        blank-color="#FF5B5C"
        class="d-inline-block"
        rounded
      />
      
      <!-- info -->
      <b-img
        v-bind="mainProps"
        alt="HEX shorthand color (#88f)"
        blank-color="#00CFDD"
        class="d-inline-block"
        rounded
      />
    </div>
    
    <template #code>
      {{ codeBlank }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode           from "@core/components/b-card-code";
import { BCardText, BImg } from "bootstrap-vue";
import { codeBlank }       from "./code";


export default {
  components: {
    BCardCode,
    BCardText,
    BImg
  },
  data () {
    return {
      mainProps: {
        blank:  true,
        width:  75,
        height: 75,
        class:  "m1"
      },
      codeBlank
    };
  }
};
</script>
