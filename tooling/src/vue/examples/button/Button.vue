<template>
  <b-row>
    <b-col cols="12">
      <button-filled />
      <button-border />
      <button-flat />
      <button-gradient />
      <button-relief />
      <button-rounded />
      <button-icons />
      <button-icons-only />
      <button-size />
      <button-checkbox-radio />
      <button-router />
      <button-link />
      <button-block />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow }      from "bootstrap-vue";
import ButtonBlock         from "./ButtonBlock.vue";
import ButtonBorder        from "./ButtonBorder.vue";
import ButtonCheckboxRadio from "./ButtonCheckboxRadio.vue";
import ButtonFilled        from "./ButtonFilled.vue";
import ButtonFlat          from "./ButtonFlat.vue";
import ButtonGradient      from "./ButtonGradient.vue";
import ButtonIconsOnly     from "./ButtonIconOnly.vue";
import ButtonIcons         from "./ButtonIcons.vue";
import ButtonLink          from "./ButtonLink.vue";
import ButtonRelief        from "./ButtonRelief.vue";
import ButtonRounded       from "./ButtonRounded.vue";
import ButtonRouter        from "./ButtonRouter.vue";
import ButtonSize          from "./ButtonSize.vue";


export default {
  components: {
    BRow,
    BCol,
    
    ButtonFilled,
    ButtonFlat,
    ButtonBlock,
    ButtonSize,
    ButtonRelief,
    ButtonIcons,
    ButtonIconsOnly,
    ButtonBorder,
    ButtonGradient,
    ButtonRounded,
    ButtonRouter,
    ButtonLink,
    ButtonCheckboxRadio
  }
};
</script>
