<template>
  <b-row>
    <b-col cols="12">
      <tooltip-position />
      <tooltip-variant />
      <tooltip-trigger />
      <tooltip-option />
      <tooltip-method />
      <tooltip-event />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }  from "bootstrap-vue";
import TooltipEvent    from "./TooltipEvent.vue";
import TooltipMethod   from "./TooltipMethod.vue";
import TooltipOption   from "./TooltipOption.vue";
import TooltipPosition from "./TooltipPosition.vue";
import TooltipTrigger  from "./TooltipTrigger.vue";
import TooltipVariant  from "./TooltipVariant.vue";


export default {
  components: {
    BRow,
    BCol,
    TooltipPosition,
    TooltipVariant,
    TooltipTrigger,
    TooltipOption,
    TooltipMethod,
    TooltipEvent
  }
};
</script>
