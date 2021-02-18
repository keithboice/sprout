<template>
  <b-row>
    <b-col cols="12">
      <popover-position />
      <popover-variant />
      <popover-trigger />
      <popover-option />
      <popover-method />
      <popover-event />
      <popover-advance />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }  from "bootstrap-vue";
import PopoverAdvance  from "./PopoverAdvance.vue";
import PopoverEvent    from "./PopoverEvent.vue";
import PopoverMethod   from "./PopoverMethod.vue";
import PopoverOption   from "./PopoverOption.vue";
import PopoverPosition from "./PopoverPosition.vue";
import PopoverTrigger  from "./PopoverTrigger.vue";
import PopoverVariant  from "./PopoverVariant.vue";


export default {
  components: {
    BRow,
    BCol,
    
    PopoverPosition,
    PopoverTrigger,
    PopoverOption,
    PopoverMethod,
    PopoverEvent,
    PopoverVariant,
    PopoverAdvance
  }
};
</script>
