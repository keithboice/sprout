<template>
  <b-card-code title="Image thumbnails">
    <b-card-text>
      <span>You can use prop </span>
      <code>thumbnail</code>
      <span>to give an image a rounded light border appearance.</span>
    </b-card-text>
    
    <b-container
      class="p-1 bg-dark"
      fluid
    >
      <b-row>
        <b-col>
          <b-img
            :src="require('@/assets/images/avatars/1.png')"
            alt="Image 1"
            fluid
            thumbnail
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/images/avatars/2.png')"
            alt="Image 2"
            fluid
            thumbnail
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/images/avatars/3.png')"
            alt="Image 3"
            fluid
            thumbnail
          />
        </b-col>
      </b-row>
    </b-container>
    
    <template #code>
      {{ codeThumbnails }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                   from "@core/components/b-card-code";
import { BCardText, BCol, BContainer, BImg, BRow } from "bootstrap-vue";
import { codeThumbnails }                          from "./code";


export default {
  components: {
    BCardCode,
    BImg,
    BContainer,
    BCardText,
    BRow,
    BCol
  },
  data () {
    return {
      codeThumbnails
    };
  }
};
</script>
