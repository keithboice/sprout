import { computed, watch } from "@vue/composition-api"
import store               from "@/store"


export default function useAppConfig () {
  // ------------------------------------------------
  // isVerticalMenuCollapsed
  // ------------------------------------------------
  const isVerticalMenuCollapsed = computed( {
                                              get: () => store.state.chat.isVerticalMenuCollapsed,
                                              set: val => {
                                                store.commit( "chat/UPDATE_VERTICAL_MENU_COLLAPSED", val )
                                              }
                                            } )
  
  // ------------------------------------------------
  // RTL
  // ------------------------------------------------
  const isRTL = computed( {
                            get: () => store.state.chat.layout.isRTL,
                            set: val => {
                              store.commit( "chat/TOGGLE_RTL", val )
                            }
                          } )
  
  // ------------------------------------------------
  // Skin
  // ------------------------------------------------
  const skin = computed( {
                           get: () => store.state.chat.layout.skin,
                           set: val => {
                             store.commit( "chat/UPDATE_SKIN", val )
                           }
                         } )
  
  const skinClasses = computed( () => {
    if ( skin.value === "bordered" ) {
      return "bordered-layout"
    }
    if ( skin.value === "semi-dark" ) {
      return "semi-dark-layout"
    }
    
    // Do not return any class for dark layout because dark layout updates class in body
    // Do not return any class for light layout as that is default layout
    return null
  } )
  
  // ------------------------------------------------
  // routerTransition
  // ------------------------------------------------
  const routerTransition = computed( {
                                       get: () => store.state.chat.layout.routerTransition,
                                       set: val => {
                                         store.commit( "chat/UPDATE_ROUTER_TRANSITION", val )
                                       }
                                     } )
  
  // *===============================================---*
  // *--------- LAYOUT ---------------------------------------*
  // *===============================================---*
  
  // ------------------------------------------------
  // layoutType
  // ------------------------------------------------
  
  const layoutType = computed( {
                                 get: () => store.state.chat.layout.type,
                                 set: val => {
                                   store.commit( "chat/UPDATE_LAYOUT_TYPE", val )
                                 }
                               } )
  
  // Reset skin if skin is semi-dark and move to horizontal layout
  watch( layoutType, val => {
    if ( val === "horizontal" && skin.value === "semi-dark" ) {
      skin.value = "light"
    }
  } )
  
  // ------------------------------------------------
  // Content Width (Full/Boxed)
  // ------------------------------------------------
  const contentWidth = computed( {
                                   get: () => store.state.chat.layout.contentWidth,
                                   set: val => {
                                     store.commit( "chat/UPDATE_CONTENT_WIDTH", val )
                                   }
                                 } )
  
  // ------------------------------------------------
  // isNavMenuHidden
  // ------------------------------------------------
  const isNavMenuHidden = computed( {
                                      get: () => store.state.chat.layout.menu.hidden,
                                      set: val => {
                                        store.commit( "chat/UPDATE_NAV_MENU_HIDDEN", val )
                                      }
                                    } )
  
  // *===============================================---*
  // *--------- NAVBAR ---------------------------------------*
  // *===============================================---*
  
  const navbarBackgroundColor = computed( {
                                            get: () => store.state.chat.layout.navbar.backgroundColor,
                                            set: val => {
                                              store.commit( "chat/UPDATE_NAVBAR_CONFIG", { backgroundColor: val } )
                                            }
                                          } )
  
  const navbarType = computed( {
                                 get: () => store.state.chat.layout.navbar.type,
                                 set: val => {
                                   store.commit( "chat/UPDATE_NAVBAR_CONFIG", { type: val } )
                                 }
                               } )
  
  // *===============================================---*
  // *--------- FOOTER ---------------------------------------*
  // *===============================================---*
  
  const footerType = computed( {
                                 get: () => store.state.chat.layout.footer.type,
                                 set: val => {
                                   store.commit( "chat/UPDATE_FOOTER_CONFIG", { type: val } )
                                 }
                               } )
  
  return {
    isVerticalMenuCollapsed,
    isRTL,
    skin,
    skinClasses,
    routerTransition,
    
    // Navbar
    navbarBackgroundColor,
    navbarType,
    
    // Footer
    footerType,
    
    // Layout
    layoutType,
    contentWidth,
    isNavMenuHidden
  }
}
