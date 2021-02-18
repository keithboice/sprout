<template>
  <div
    :class="{'open': isCustomizerOpen}"
    class="customizer d-none d-md-block"
  >
    <!-- Toggler -->
    <b-link
      class="customizer-toggle d-flex align-items-center justify-content-center"
      @click="isCustomizerOpen = !isCustomizerOpen"
    >
      <feather-icon
        class="spinner"
        icon="SettingsIcon"
        size="15"
      />
    </b-link>
    <!-- /Toggler -->

    <!-- Header -->
    <div class="customizer-section d-flex justify-content-between align-items-center">
      <div>
        <h4 class="text-uppercase mb-0">
          Theme Customizer
        </h4>
        <small>Customize &amp; Preview in Real Time</small>
      </div>
      <feather-icon
        class="cursor-pointer"
        icon="XIcon"
        size="18"
        @click="isCustomizerOpen = !isCustomizerOpen"
      />
    </div>
    <!-- Header -->

    <vue-perfect-scrollbar
      :settings="perfectScrollbarSettings"
      class="ps-customizer-area scroll-area"
    >
      <!-- Skin, RTL, Router Animation -->
      <div class="customizer-section">

        <!-- Skin -->
        <b-form-group label="Skin">
          <b-form-radio-group
            id="skin-radio-group"
            v-model="skin"
            :options="skinOptions"
            name="skin"
          />
        </b-form-group>

        <!-- Skin -->
        <b-form-group label="Content Width">
          <b-form-radio-group
            id="content-width-radio-group"
            v-model="contentWidth"
            :options="contentWidthOptions"
            name="content-width"
          />
        </b-form-group>

        <!-- RTL -->
        <b-form-group
          label="RTL"
          label-cols="10"
        >
          <b-form-checkbox
            v-model="isRTL"
            class="mr-0 mt-50"
            inline
            name="is-rtl"
            switch
          />
        </b-form-group>

        <!-- Router Transition -->
        <b-form-group
          label="Router Transition"
          label-cols="6"
        >
          <v-select
            v-model="routerTransition"
            :clearable="false"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="routerTransitionOptions"
            :reduce="option => option.value"
            label="title"
          />
        </b-form-group>
      </div>
      <!-- /Skin, RTL, Router Animation -->

      <!-- SECTION: Menu -->
      <div class="customizer-section">

        <!-- Layout Type -->
        <b-form-group
          label="Menu Layout"
        >
          <b-form-radio-group
            v-model="layoutType"
            :options="layoutTypeOptions"
            name="layout-type"
          />
        </b-form-group>

        <!-- Collapsible -->
        <div
          v-if="layoutType === 'vertical'"
          class="d-flex justify-content-between align-items-center mt-2"
        >
          <span class="font-weight-bold">Menu Collapsed</span>
          <b-form-checkbox
            v-model="isVerticalMenuCollapsed"
            class="mr-0"
            inline
            name="is-vertical-menu-collapsed"
            switch
          />
        </div>

        <!-- Menu Visiblity -->
        <div class="d-flex justify-content-between align-items-center mt-2">
          <span class="font-weight-bold">Menu Hidden</span>
          <b-form-checkbox
            v-model="isNavMenuHidden"
            class="mr-0"
            inline
            name="is-menu-visible"
            switch
          />
        </div>

      </div>

      <!-- SECTION: Navbar -->
      <div class="customizer-section">

        <!-- Navbar Color -->
        <b-form-group
          v-show="layoutType === 'vertical'"
          label="Navbar Color"
        >
          <div
            v-for="(color, index) in navbarColors"
            :key="color"
            :class="[`bg-${color}`, {'border border-light': !index}, {'mark-active': navbarBackgroundColor === color}]"
            class="p-1 d-inline-block rounded mr-1 cursor-pointer"
            @click="navbarBackgroundColor = color"
          />
        </b-form-group>

        <!-- Navbar Type -->
        <b-form-group :label="layoutType === 'vertical' ? 'Navbar Type' : 'Menu Type'">
          <b-form-radio-group
            v-model="navbarType"
            :options="navbarTypes"
            name="navbar-type"
          />
        </b-form-group>
      </div>

      <!-- SECTION: Footer -->
      <div class="customizer-section">

        <!-- Footer Type -->
        <b-form-group label="Footer Type">
          <b-form-radio-group
            v-model="footerType"
            :options="footerTypes"
            name="footer-type"
          />
        </b-form-group>
      </div>
    </vue-perfect-scrollbar>
  </div>
</template>

<script>
import { BFormCheckbox, BFormGroup, BFormRadioGroup, BLink } from "bootstrap-vue";
import VuePerfectScrollbar                                   from "vue-perfect-scrollbar";
import vSelect                                               from "vue-select";
import useAppCustomizer                                      from "./useAppCustomizer";


export default {
  components: {
    // BSV
    BLink,
    BFormRadioGroup,
    BFormCheckbox,
    BFormGroup,

    // 3rd party
    vSelect,
    VuePerfectScrollbar,

  },
  setup() {
    const {
      // Vertical Menu
      isVerticalMenuCollapsed,

      // Customizer
      isCustomizerOpen,

      // Skin
      skin,
      skinOptions,

      // Content Width
      contentWidth,
      contentWidthOptions,

      // RTL
      isRTL,

      // routerTransition
      routerTransition,
      routerTransitionOptions,

      // Layout Type
      layoutType,
      layoutTypeOptions,

      // NavMenu Hidden
      isNavMenuHidden,

      // Navbar
      navbarColors,
      navbarTypes,
      navbarBackgroundColor,
      navbarType,

      // Footer
      footerTypes,
      footerType,
    } = useAppCustomizer()

    if (layoutType.value === 'horizontal') {
      // Remove semi-dark skin option in horizontal layout
      const skinSemiDarkIndex = skinOptions.findIndex(s => s.value === 'semi-dark')
      delete skinOptions[skinSemiDarkIndex]

      // Remove menu hidden radio in horizontal layout => As we already have switch for it
      const menuHiddneIndex = navbarTypes.findIndex(t => t.value === 'hidden')
      delete navbarTypes[menuHiddneIndex]
    }

    // Perfect Scrollbar
    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }

    return {
      // Vertical Menu
      isVerticalMenuCollapsed,

      // Customizer
      isCustomizerOpen,

      // Skin
      skin,
      skinOptions,

      // Content Width
      contentWidth,
      contentWidthOptions,

      // RTL
      isRTL,

      // routerTransition
      routerTransition,
      routerTransitionOptions,

      // Layout Type
      layoutType,
      layoutTypeOptions,

      // NavMenu Hidden
      isNavMenuHidden,

      // Navbar
      navbarColors,
      navbarTypes,
      navbarBackgroundColor,
      navbarType,

      // Footer
      footerTypes,
      footerType,

      // Perfect Scrollbar
      perfectScrollbarSettings,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>

<style lang="scss" scoped>
@import '~@core/scss/base/bootstrap-extended/include';
@import '~@core/scss/base/components/variables-dark';

.customizer-section {
  border-bottom: 1px solid #ebe9f1;
  padding: 1.5rem;

  .dark-layout & {
    border-color: $theme-dark-border-color;
  }

  #skin-radio-group ::v-deep {
    .custom-control-inline {
      margin-right: 0.7rem;
    }
  }

  .form-group {
    margin-bottom: 1.5rem;;

    &:last-of-type {
      margin-bottom: 0;
    }

    ::v-deep legend {
      font-weight: 500;
    }
  }
}

.mark-active {
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, .5);
}

.ps-customizer-area {
  height: calc(100% - 83px)
}
</style>
