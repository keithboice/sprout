<template>
  <b-card-code title="v-model support">
    <b-card-text>
      <span>Programmatically control which slide is showing via </span>
      <code>v-model</code>
      <span> (which binds to the </span>
      <code>value</code><span> prop).</span>
    </b-card-text>
    
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        background="#ababab"
        controls
        img-height="380"
        img-width="924"
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          :img-src="require('@/assets/images/slider/05.jpg')"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        />
        
        <!-- Slides with custom text -->
        <b-carousel-slide :img-src="require('@/assets/images/slider/06.jpg')" />
        
        <!-- Slides with image only -->
        <b-carousel-slide :img-src="require('@/assets/images/slider/03.jpg')" />
        
        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
              :src="require('@/assets/images/slider/04.jpg')"
              alt="image slot"
              class="d-block img-fluid w-100"
              height="380"
              width="924"
            >
          </template>
        </b-carousel-slide>
      </b-carousel>
      
      <b-card-text class="mt-1 mb-0">
        <strong>Slide #:</strong> {{ slide }} <strong>Sliding:</strong> {{ sliding }}
      </b-card-text>
    </div>
    
    <template #code>
      {{ codeVsupport }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                from "@core/components/b-card-code";
import { BCardText, BCarousel, BCarouselSlide } from "bootstrap-vue";
import { codeVsupport }                         from "./code";


export default {
  components: {
    BCardCode,
    BCarousel,
    BCarouselSlide,
    BCardText
  },
  data () {
    return {
      slide:   0,
      sliding: null,
      codeVsupport
    };
  },
  methods: {
    onSlideStart () {
      this.sliding = true;
    },
    onSlideEnd () {
      this.sliding = false;
    }
  }
};
</script>
