<template>
  <li
    v-if="canViewHorizontalNavMenuHeaderLink(item)"
    :class="{'sidebar-group-active active': isActive}"
    class="nav-item"
  >
    <b-link
      :to="{ name: item.route }"
      class="nav-link"
    >
      <feather-icon
        :icon="item.icon"
        size="14"
      />
      <span>{{ t( item.title ) }}</span>
    </b-link>
  </li>
</template>

<script>
import { BLink }                        from "bootstrap-vue"
import { useUtils as useI18nUtils }     from "@/utils/i18n"
import { useUtils as useAclUtils }      from "@/utils/acl"
import useHorizontalNavMenuHeaderLink   from "./useHorizontalNavMenuHeaderLink"
import mixinHorizontalNavMenuHeaderLink from "./mixinHorizontalNavMenuHeaderLink"


export default {
  components: {
    BLink
  },
  mixins:     [ mixinHorizontalNavMenuHeaderLink ],
  props:      {
    item: {
      type:     Object,
      required: true
    }
  },
  setup ( props ) {
    const {
            isActive,
            updateIsActive
          } = useHorizontalNavMenuHeaderLink( props.item )
    
    const { t } = useI18nUtils()
    const { canViewHorizontalNavMenuHeaderLink } = useAclUtils()
    
    return {
      isActive,
      updateIsActive,
      
      // ACL
      canViewHorizontalNavMenuHeaderLink,
      
      // i18n
      t
    }
  }
}
</script>
