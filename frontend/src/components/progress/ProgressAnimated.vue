<template>
  <b-card-code title="Animated Progress">
    <b-card-text class="mb-0">
      <span>The striped gradient can also be animated by setting the</span>
      <code>animated</code>
      <span>prop.</span>
    </b-card-text>
    
    <b-row
      v-for="bar in bars"
      :key="bar.variant"
    >
      <b-col
        class="pt-2"
        md="2"
      >
        {{ bar.variant }}:
      </b-col>
      <b-col
        class="pt-md-2"
        md="10"
      >
        <b-progress
          :key="bar.variant"
          :class="'progress-bar-'+bar.variant"
          :value="bar.value"
          :variant="bar.variant"
          animated
        />
      </b-col>
    </b-row>
    
    <template #code>
      {{ codeAnimated }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                            from "@core/components/b-card-code";
import { BCardText, BCol, BProgress, BRow } from "bootstrap-vue";
import { codeAnimated }                     from "./code";


export default {
  components: {
    BRow,
    BCol,
    BCardCode,
    BProgress,
    BCardText
  },
  data () {
    return {
      codeAnimated,
      bars:  [
        {
          variant: "primary",
          value:   75
        },
        {
          variant: "secondary",
          value:   75
        },
        {
          variant: "success",
          value:   75
        },
        {
          variant: "info",
          value:   75
        },
        {
          variant: "danger",
          value:   75
        },
        {
          variant: "warning",
          value:   75
        }
      ],
      timer: null
    };
  },
  mounted () {
    this.timer = setInterval( () => {
      // eslint-disable-next-line
      this.bars.forEach( bar => (
        bar.value = 25 + Math.random() * 75
      ) );
    }, 2000 );
  },
  beforeDestroy () {
    clearInterval( this.timer );
    this.timer = null;
  }
};
</script>
