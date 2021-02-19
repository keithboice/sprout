<template>
  <b-row>
    <b-col cols="12">
      <button-toolbar-navigation />
      <button-toolbar-input />
      <button-toolbar-dropdown />
      <button-toolbar-size />
      <button-toolbar-justify />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }          from "bootstrap-vue";
import ButtonToolbarDropdown   from "./ButtonToolbarDropdown.vue";
import ButtonToolbarInput      from "./ButtonToolbarInput.vue";
import ButtonToolbarJustify    from "./ButtonToolbarJustify.vue";
import ButtonToolbarNavigation from "./ButtonToolbarNavigation.vue";
import ButtonToolbarSize       from "./ButtonToolbarSize.vue";


export default {
  components: {
    BRow,
    BCol,
    
    ButtonToolbarNavigation,
    ButtonToolbarInput,
    ButtonToolbarDropdown,
    ButtonToolbarSize,
    ButtonToolbarJustify
  }
};
</script>
