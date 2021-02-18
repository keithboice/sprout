<template>
  <div
    :class="{'show': y > 250}"
    class="btn-scroll-to-top"
  >
    <!-- We have wrapper because ripple effect give position relative to this absolute positioned btn -->
    <!-- Hence due to that our btn get lost -->
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      class="btn-icon"
      variant="info"
      @click="scrollToTop"
    >
      <feather-icon
        icon="ArrowUpIcon"
        size="16"
      />
    </b-button>
  </div>
</template>

<script>
import { useWindowScroll } from "@vueuse/core";
import { BButton }         from "bootstrap-vue";
import Ripple              from "vue-ripple-directive";


export default {
  directives: {
    Ripple,
  },
  components: {
    BButton,
  },
  setup() {
    const { y } = useWindowScroll()

    const scrollToTop = () => {
      const rootEle = document.documentElement
      rootEle.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    return {
      y,
      scrollToTop,
    }
  },

}
</script>

<style lang="scss" scoped>
.btn-scroll-to-top {
  bottom: 5%;
  opacity: 0;
  position: fixed;
  right: 30px;

  transition: all .5s ease;
  // transform: translateY(100px);
  z-index: 99;

  &.show {
    opacity: 1;
    // transform: translateY(0)
  }
}
</style>
