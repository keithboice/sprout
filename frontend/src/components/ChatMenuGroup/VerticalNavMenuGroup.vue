<template>
  <li
    v-if="canViewVerticalNavMenuGroup(item)"
    :class="{
      'open': isOpen,
      'disabled': item.disabled,
      'sidebar-group-active': isActive,
    }"
    class="nav-item has-sub"
  >
    <b-link
      class="d-flex align-items-center"
      @click="() => updateGroupOpen(!isOpen)"
    >
      <feather-icon :icon="item.icon || 'CircleIcon'" />
      <span class="menu-title text-truncate">{{ t( item.title ) }}</span>
      <b-badge
        v-if="item.tag"
        :variant="item.tagVariant || 'primary'"
        class="mr-1 ml-auto"
        pill
      >
        {{ item.tag }}
      </b-badge>
    </b-link>
    <b-collapse
      v-model="isOpen"
      class="menu-content"
      tag="ul"
    >
      <component
        :is="resolveNavItemComponent(child)"
        v-for="child in item.children"
        :key="child.header || child.title"
        ref="groupChild"
        :item="child"
      />
    </b-collapse>
  </li>
</template>

<script>
import { BLink, BBadge, BCollapse }                                       from "bootstrap-vue"
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from "@utils/layouts"
import { useUtils as useI18nUtils }                                       from "@/utils/i18n"
import { useUtils as useAclUtils } from "@/utils/acl"
import VerticalNavMenuHeader from "../ChatMenuHeader"
import VerticalNavMenuLink   from "../ChatMenuLink/VerticalNavMenuLink.vue"

// Composition Function
import useVerticalNavMenuGroup   from "./useVerticalNavMenuGroup"
import mixinVerticalNavMenuGroup from "./mixinVerticalNavMenuGroup"


export default {
  name:       "VerticalNavMenuGroup",
  components: {
    VerticalNavMenuHeader,
    VerticalNavMenuLink,
    BLink,
    BBadge,
    BCollapse
  },
  mixins:     [ mixinVerticalNavMenuGroup ],
  props:      {
    item: {
      type:     Object,
      required: true
    }
  },
  setup ( props ) {
    const {
            isOpen,
            isActive,
            updateGroupOpen,
            updateIsActive
          } = useVerticalNavMenuGroup( props.item )
    
    const { t } = useI18nUtils()
    const { canViewVerticalNavMenuGroup } = useAclUtils()
    
    return {
      resolveNavItemComponent,
      isOpen,
      isActive,
      updateGroupOpen,
      updateIsActive,
      
      // ACL
      canViewVerticalNavMenuGroup,
      
      // i18n
      t
    }
  }
}
</script>

<style>

</style>