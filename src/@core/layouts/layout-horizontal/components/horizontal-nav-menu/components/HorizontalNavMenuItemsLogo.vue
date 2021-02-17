<template>

  <div
    class="mr-auto nav-logo"
  >
    <b-link
      to="/"
    >
      <b-img
        :src="appLogoImage"
        alt="logo"
        class="nav-logo"
      />
    </b-link>
  </div>
</template>

<script>
import { $themeConfig } from '@themeConfig'
import { BImg, BLink } from 'bootstrap-vue'

export default {
  components: {
    BLink,
    BImg,
  },
  setup() {
    // App Name
    const {
      appName,
      appLogoImage,
    } = $themeConfig.app
    return {
      appName,
      appLogoImage,
    }
  },
}
</script>

<style>

</style>
