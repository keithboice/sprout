<template>
  <b-card-code
    title="Carousel Interval"
  >
    <b-card-text>
      <span>Carousel defaults to an </span>
      <code>interval</code>
      <span> of 5000ms (5 seconds).</span>
    </b-card-text>
    
    <b-carousel
      id="carousel-interval"
      :interval="400"
      controls
      indicators
    >
      <b-carousel-slide :img-src="require('@/assets/images/slider/01.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/images/slider/02.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/images/slider/03.jpg')" />
    </b-carousel>
    
    <template #code>
      {{ codeCarouselInterval }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                from "@core/components/b-card-code";
import { BCardText, BCarousel, BCarouselSlide } from "bootstrap-vue";
import { codeCarouselInterval }                 from "./code";


export default {
  components: {
    BCardCode,
    BCarousel,
    BCarouselSlide,
    BCardText
  },
  data () {
    return {
      codeCarouselInterval
    };
  }
};
</script>
