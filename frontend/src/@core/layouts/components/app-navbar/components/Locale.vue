<template>
  <b-nav-item-dropdown
    id="dropdown-grouped"
    class="mr-2 dropdown-language"
    right
    variant="link"
  >
    <template #button-content>
      <b-img
        :alt="currentLocale.locale"
        :src="currentLocale.img"
        height="14px"
        width="22px"
      />
      <span class="ml-50 text-body">{{ currentLocale.name }}</span>
    </template>
    <b-dropdown-item
      v-for="localeObj in locales"
      :key="localeObj.locale"
      @click="$i18n.locale = localeObj.locale"
    >
      <b-img
        :alt="localeObj.locale"
        :src="localeObj.img"
        height="14px"
        width="22px"
      />
      <span class="ml-50">{{ localeObj.name }}</span>
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import { BDropdownItem, BImg, BNavItemDropdown } from "bootstrap-vue";


export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
    BImg,
  }, // ! Need to move this computed property to comp function once we get to Vue 3
  computed: {
    currentLocale() {
      return this.locales.find(l => l.locale === this.$i18n.locale)
    },
  },
  setup() {
    /* eslint-disable global-require */
    const locales = [
      {
        locale: 'en',
        img: require('@/assets/images/flags/en.png'),
        name: 'English',
      }, {
        locale: 'fr',
        img: require('@/assets/images/flags/fr.png'),
        name: 'French',
      }, {
        locale: 'de',
        img: require('@/assets/images/flags/de.png'),
        name: 'German',
      }, {
        locale: 'pt',
        img: require('@/assets/images/flags/pt.png'),
        name: 'Portuguese',
      },
    ]
    /* eslint-disable global-require */

    return {
      locales,
    }
  },
}
</script>

<style>

</style>
