import Vue  from "vue"
import Vuex from "vuex"

// Modules
import ecommerceStoreModule from "@/views/.deprecating/apps/e-commerce/eCommerceStoreModule"
import app                  from "./app"
import appConfig            from "./app-config"
import verticalMenu         from "./vertical-menu"
import chat                 from "./chat"


Vue.use( Vuex )

export default new Vuex.Store( {
                                 modules: {
                                   app,
                                   appConfig,
                                   verticalMenu,
                                   "app-ecommerce": ecommerceStoreModule,
                                   chat
                                 },
                                 strict:  process.env.DEV
                               } )
