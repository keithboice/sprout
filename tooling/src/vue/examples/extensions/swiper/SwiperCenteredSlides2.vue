<template>
  <b-card-code
    title="Centered Slides  Option-2"
  >
    <swiper
      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
      :options="swiperOptions"
      class="swiper-centered-slides-2 p-1"
    >
      <swiper-slide
        v-for="(data,index) in swiperData"
        :key="index"
        class="rounded swiper-shadow py-1 px-3 d-flex"
      >
        <feather-icon
          :icon="data.icon"
          class="mr-50"
          size="18"
        />
        <div class="swiper-text">
          {{ data.text }}
        </div>
      </swiper-slide>
    </swiper>
    
    <template #code>
      {{ codeCenterSlides2 }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode               from "@core/components/b-card-code/BCardCode.vue";
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { codeCenterSlides2 }   from "./code";


export default {
  components: {
    Swiper,
    SwiperSlide,
    BCardCode
  },
  data () {
    return {
      codeCenterSlides2,
      swiperData:    [
        {
          icon: "GithubIcon",
          text: "Getting Started"
        },
        {
          icon: "FacebookIcon",
          text: "Pricing & Plans"
        },
        {
          icon: "TwitterIcon",
          text: "Sales Question"
        },
        {
          icon: "InstagramIcon",
          text: "Usage Guides"
        },
        {
          icon: "FacebookIcon",
          text: "Pricing & Plans"
        }
      ],
      swiperOptions: {
        slidesPerView:  "auto",
        centeredSlides: true,
        spaceBetween:   30
      }
    };
  }
};
</script>
