<template>
  <b-row>
    <b-col>
      <images-basic />
      <images-responsive />
      <images-thumbnails />
      <images-rounded-corner />
      <images-alignment />
      <images-blank />
      <images-lazy />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }  from "bootstrap-vue";
import ImagesAlignment from "./ImagesAlignment.vue";

import ImagesBasic         from "./ImagesBasic.vue";
import ImagesBlank         from "./ImagesBlank.vue";
import ImagesLazy          from "./ImagesLazy.vue";
import ImagesResponsive    from "./ImagesResponsive.vue";
import ImagesRoundedCorner from "./ImagesRoundedCorner.vue";
import ImagesThumbnails    from "./ImagesThumbnails.vue";


export default {
  components: {
    BRow,
    BCol,
    
    ImagesBasic,
    ImagesResponsive,
    ImagesThumbnails,
    ImagesRoundedCorner,
    ImagesAlignment,
    ImagesBlank,
    ImagesLazy
  }
};
</script>
