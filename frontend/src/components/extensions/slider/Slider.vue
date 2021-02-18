<template>
  <div>
    <slider-single />
    <slider-multiple />
    <slider-ranger-value />
    <slider-rtl />
    <slider-lazy />
    <slider-disabled />
    <slider-adsorb />
    <slider-contained />
    <slider-behavior />
    <slider-color />
    <slider-input />
    <slider-vertical />
  </div>
</template>

<script>
import SliderAdsorb      from "./SliderAdsorb.vue";
import SliderBehavior    from "./SliderBehavior.vue";
import SliderColor       from "./SliderColor.vue";
import SliderContained   from "./SliderContained.vue";
import SliderDisabled    from "./SliderDisabled.vue";
import SliderInput       from "./SliderInput.vue";
import SliderLazy        from "./SliderLazy.vue";
import SliderMultiple    from "./SliderMultiple.vue";
import SliderRangerValue from "./SliderRangerValue.vue";
import SliderRtl         from "./SliderRtl.vue";
import SliderSingle      from "./SliderSingle.vue";
import SliderVertical    from "./SliderVertical.vue";


export default {
  components: {
    SliderSingle,
    SliderMultiple,
    SliderRangerValue,
    SliderRtl,
    SliderLazy,
    SliderDisabled,
    SliderAdsorb,
    SliderContained,
    SliderBehavior,
    SliderColor,
    SliderInput,
    SliderVertical
  }
};
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-slider.scss';
</style>
