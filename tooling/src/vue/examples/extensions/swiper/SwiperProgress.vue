<template>
  <b-card-code title="Progress">
    <swiper
      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
      :options="swiperOptions"
      class="swiper-progress"
    >
      <swiper-slide
        v-for="(data,index) in swiperData"
        :key="index"
      >
        <b-img
          :src="data.img"
          fluid
        />
      </swiper-slide>
      
      <!-- Add Arrows -->
      <div
        slot="button-next"
        class="swiper-button-next"
      />
      <div
        slot="button-prev"
        class="swiper-button-prev"
      />
      <div
        slot="pagination"
        class="swiper-pagination"
      />
    </swiper>
    
    <template #code>
      {{ codeProgress }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode               from "@core/components/b-card-code/BCardCode.vue";
import { BImg }                from "bootstrap-vue";
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { codeProgress }        from "./code";


export default {
  components: {
    Swiper,
    SwiperSlide,
    BCardCode,
    BImg
  },
  data () {
    return {
      codeProgress,
      
      /* eslint-disable global-require */
      swiperData: [
        { img: require( "@/assets/images/banner/banner-8.jpg" ) },
        { img: require( "@/assets/images/banner/banner-7.jpg" ) },
        { img: require( "@/assets/images/banner/banner-20.jpg" ) },
        { img: require( "@/assets/images/banner/banner-4.jpg" ) },
        { img: require( "@/assets/images/banner/banner-5.jpg" ) }
      ], /* eslint-disable global-require */
      
      swiperOptions: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el:   ".swiper-pagination",
          type: "progressbar"
        }
      }
    };
  }
};
</script>
