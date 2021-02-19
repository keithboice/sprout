<template>
  <b-row>
    <b-col cols="12">
      <drag-drop-simple />
      <drag-drop-multiple-list />
      <drag-drop-clone />
      <drag-drop-animation />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }       from "bootstrap-vue";
import DragDropAnimation    from "./DragDropAnimation.vue";
import DragDropClone        from "./DragDropClone.vue";
import DragDropMultipleList from "./DragDropMultipleList.vue";
import DragDropSimple       from "./DragDropSimple.vue";


export default {
  components: {
    BRow,
    BCol,
    
    DragDropSimple,
    DragDropMultipleList,
    DragDropClone,
    DragDropAnimation
  }
};
</script>
