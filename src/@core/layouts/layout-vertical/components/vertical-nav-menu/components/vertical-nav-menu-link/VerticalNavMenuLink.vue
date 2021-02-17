<template>
  <li
    v-if="canViewVerticalNavMenuLink(item)"
    :class="{
      'active': isActive,
      'disabled': item.disabled
    }"
    class="nav-item"
  >
    <b-link
      v-bind="linkProps"
      class="d-flex align-items-center"
    >
      <feather-icon :icon="item.icon || 'CircleIcon'" />
      <span class="menu-title text-truncate">{{ t(item.title) }}</span>
      <b-badge
        v-if="item.tag"
        :variant="item.tagVariant || 'primary'"
        class="mr-1 ml-auto"
        pill
      >
        {{ item.tag }}
      </b-badge>
    </b-link>
  </li>
</template>

<script>
import { useUtils as useAclUtils } from '@core/libs/acl'
import { useUtils as useI18nUtils } from '@core/libs/i18n'
import { BBadge, BLink } from 'bootstrap-vue'
import mixinVerticalNavMenuLink from './mixinVerticalNavMenuLink'
import useVerticalNavMenuLink from './useVerticalNavMenuLink'

export default {
  components: {
    BLink,
    BBadge,
  },
  mixins: [mixinVerticalNavMenuLink],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const {
      isActive,
      linkProps,
      updateIsActive,
    } = useVerticalNavMenuLink(props.item)
    const { t } = useI18nUtils()
    const { canViewVerticalNavMenuLink } = useAclUtils()

    return {
      isActive,
      linkProps,
      updateIsActive,

      // ACL
      canViewVerticalNavMenuLink,

      // i18n
      t,
    }
  },

}
</script>
