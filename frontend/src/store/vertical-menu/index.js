import { $themeConfig } from "@/conf/theme"


export default {
  namespaced: true,
  state:      {
    isVerticalMenuCollapsed: $themeConfig.layout.menu.isCollapsed
  },
  getters:    {},
  mutations:  {
    UPDATE_VERTICAL_MENU_COLLAPSED ( state, val ) {
      state.isVerticalMenuCollapsed = val
    }
  },
  actions:    {}
}
