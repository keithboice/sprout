import axios from "@axios"


export default {
  namespaced: true,
  state:      {
    view:                    "active",
    windowWidth:             0,
    shallShowOverlay:        false,
    app:                     {
      appName:      "Sprout", // eslint-disable-next-line global-require
      appLogoImage: require( "@/assets/images/logo/logo.svg" )
    },
    breakpoints:             {
      xxl: 1400,
      xl:  1200,
      lg:  992,
      md:  768,
      sm:  576
    },
    isVerticalMenuCollapsed: false,
    layout:                  {
      isRTL:             false,
      skin:              "light",
      routerTransition:  "zoom-fade",
      type:              "vertical",
      contentWidth:      "full",
      menu:              {
        hidden:      false,
        isCollapsed: false
      },
      navbar:            {
        type:            "hidden", // static , sticky , floating, hidden
        backgroundColor: ""
      },
      footer:            {
        type: "hidden"
      },
      customizer:        false,
      enableScrollToTop: false
    }
  },
  getters:    {
    currentBreakPoint: state => {
      const { windowWidth } = state
      if ( windowWidth >= state.breakpoints.xl ) {
        return "xl"
      }
      if ( windowWidth >= state.breakpoints.lg ) {
        return "lg"
      }
      if ( windowWidth >= state.breakpoints.md ) {
        return "md"
      }
      if ( windowWidth >= state.breakpoints.sm ) {
        return "sm"
      }
      return "xs"
    }
  },
  mutations:  {
    viewTo ( state, payload ) {
      state.view = payload
    },
    UPDATE_WINDOW_WIDTH ( state, val ) {
      state.windowWidth = val
    },
    TOGGLE_OVERLAY ( state, val ) {
      state.shallShowOverlay = val === undefined ? !state.shallShowOverlay : val
    },
    TOGGLE_RTL ( state ) {
      state.layout.isRTL = !state.layout.isRTL
      document.documentElement.setAttribute( "dir", state.layout.isRTL ? "rtl" : "ltr" )
    },
    UPDATE_SKIN ( state, skin ) {
      state.layout.skin = skin
      
      // Update value in localStorage
      localStorage.setItem( "vuexy-skin", skin )
      
      // Update DOM for dark-layout
      if ( skin === "dark" ) {
        document.body.classList.add( "dark-layout" )
      }
      else if ( document.body.className.match( "dark-layout" ) ) {
        document.body.classList.remove( "dark-layout" )
      }
    },
    UPDATE_ROUTER_TRANSITION ( state, val ) {
      state.layout.routerTransition = val
    },
    UPDATE_LAYOUT_TYPE ( state, val ) {
      state.layout.type = val
    },
    UPDATE_CONTENT_WIDTH ( state, val ) {
      state.layout.contentWidth = val
    },
    UPDATE_NAV_MENU_HIDDEN ( state, val ) {
      state.layout.menu.hidden = val
    },
    UPDATE_NAVBAR_CONFIG ( state, obj ) {
      Object.assign( state.layout.navbar, obj )
    },
    UPDATE_FOOTER_CONFIG ( state, obj ) {
      Object.assign( state.layout.footer, obj )
    },
    UPDATE_VERTICAL_MENU_COLLAPSED ( state, val ) {
      state.isVerticalMenuCollapsed = val
    }
  },
  actions:    {
    viewTo ( { commit }, payload ) {
      commit( "view", payload )
    },
    fetchChatsAndContacts () {
      return new Promise( ( resolve, reject ) => {
        axios
          .get( "/apps/chat/chats-and-contacts" )
          .then( response => resolve( response ) )
          .catch( error => reject( error ) )
      } )
    },
    getProfileUser () {
      return new Promise( ( resolve, reject ) => {
        axios
          .get( "/apps/chat/users/profile-user" )
          .then( response => resolve( response ) )
          .catch( error => reject( error ) )
      } )
    },
    getChat ( ctx, { userId } ) {
      return new Promise( ( resolve, reject ) => {
        axios
          .get( `/apps/chat/chats/${ userId }` )
          .then( response => resolve( response ) )
          .catch( error => reject( error ) )
      } )
    },
    sendMessage ( ctx, {
      contactId,
      message,
      senderId
    } ) {
      return new Promise( ( resolve, reject ) => {
        axios
          .post( `/apps/chat/chats/${ contactId }`, {
            message,
            senderId
          } )
          .then( response => resolve( response ) )
          .catch( error => reject( error ) )
      } )
    }
  }
}
