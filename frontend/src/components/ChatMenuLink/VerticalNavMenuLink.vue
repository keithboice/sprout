<template>
  <div
    v-if="canViewVerticalNavMenuLink(item)"
    :class="{
      'active': isActive,
      'disabled': item.disabled
    }"
    class="nav-item"
  >
    {{ item.toString() }}
    <!--
    <b-link
      v-bind="linkProps"
      class="d-flex align-items-center btn btn-primary"
    >
      <feather-icon :icon="item.icon || 'CircleIcon'" />
      <span class="menu-title text-truncate">{{ t(item.title) }}</span>
      <b-badge
        v-if="item.tag"
        pill
        :variant="item.tagVariant || 'dark'"
        class="mr-1 ml-auto"
      >
        {{ item.tag }}
      </b-badge>
    </b-link>-->
  </div>
</template>

<script>
import { useUtils as useAclUtils }  from "@/utils/acl"
/* import { BLink, BBadge } from 'bootstrap-vue' */
import { useUtils as useI18nUtils } from "@/utils/i18n"
import useVerticalNavMenuLink       from "./useVerticalNavMenuLink"
import mixinVerticalNavMenuLink     from "./mixinVerticalNavMenuLink"


export default {
  /* components: {
   BLink,
   BBadge,
   }, */
  mixins: [ mixinVerticalNavMenuLink ],
  props:  {
    item: {
      type:     Object,
      required: true
    }
  },
  setup ( props ) {
    const {
            isActive,
            linkProps,
            updateIsActive
          } = useVerticalNavMenuLink( props.item )
    const { t } = useI18nUtils()
    const { canViewVerticalNavMenuLink } = useAclUtils()
    
    return {
      isActive,
      linkProps,
      updateIsActive,
      
      // ACL
      canViewVerticalNavMenuLink,
      
      // i18n
      t
    }
  }
  
}
</script>
