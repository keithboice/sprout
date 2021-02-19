<template>
  <b-card-code
    title="Crossfade"
  >
    <b-card-text>
      <span>Set the</span>
      <code>&lt;b-carousel&gt;fade</code>
      <span>prop to</span>
      <code>true</code>
      <span>to animate slides with a fade transition instead of the default slide animation.</span>
    </b-card-text>
    
    <b-carousel
      id="carousel-crossfade"
      controls
      fade
      indicators
    >
      <b-carousel-slide :img-src="require('@/assets/images/slider/01.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/images/slider/02.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/images/slider/03.jpg')" />
    </b-carousel>
    
    <template #code>
      {{ codeCarouselCrossfade }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                from "@core/components/b-card-code";
import { BCardText, BCarousel, BCarouselSlide } from "bootstrap-vue";
import { codeCarouselCrossfade }                from "./code";


export default {
  components: {
    BCardCode,
    BCarousel,
    BCarouselSlide,
    BCardText
  },
  data () {
    return {
      codeCarouselCrossfade
    };
  }
};
</script>
