<template>
  <b-card-code title="Aligning images">
    <b-card-text>
      <span>Align images with the boolean props </span>
      <code>left</code>
      <span> (floats left) </span>
      <code>right</code>
      <span>(floats right), and </span>
      <code>center</code>
      <span>(auto left+right margins). You can also center images by placing them in a container that has the class
      </span>
      <code>text-center.</code>
    </b-card-text>
    
    <div class="clearfix">
      <b-img
        :src="require('@/assets/images/banner/banner-34.jpg')"
        alt="Left image"
        class="mb-1 mb-sm-0"
        height="120"
        left
      />
      <b-img
        :src="require('@/assets/images/banner/banner-34.jpg')"
        alt="Right image"
        class="mb-1 mb-sm-0"
        height="120"
        right
      />
      <b-img
        :src="require('@/assets/images/banner/banner-34.jpg')"
        alt="Center image"
        center
        class="mb-1 mb-sm-0"
        height="120"
      />
    </div>
    
    <template #code>
      {{ codeAlignment }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode           from "@core/components/b-card-code";
import { BCardText, BImg } from "bootstrap-vue";
import { codeAlignment }   from "./code";


export default {
  components: {
    BCardCode,
    BCardText, // eslint-disable-next-line vue/no-unused-components
    BImg
  },
  data () {
    return {
      codeAlignment
    };
  }
};
</script>
