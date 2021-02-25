import Vue                          from "vue"
import { ToastPlugin, ModalPlugin } from "bootstrap-vue"
import VueCompositionAPI            from "@vue/composition-api"

import i18n   from "@/libs/i18n"
import router from "./router"
import store  from "./store"
import App    from "./App.vue"

// Global Components
import "../config/globals"

// 3rd party plugins
import "@axios"
import "@/libs/acl"
import "@/libs/portal-vue"
import "@/libs/clipboard"
import "@/libs/toastification"
import "@/libs/sweet-alerts"
import "@/libs/vue-select"
import "@/libs/tour"

// Axios Mock Adapter
import "@/@fake-db/db"

// Bootstrap Plugin Registration
Vue.use( ToastPlugin )
Vue.use( ModalPlugin )

// Composition API
Vue.use( VueCompositionAPI )

// Parent styles
require( "@/assets/scss/reset.scss" )


// Core styles
require( "@/assets/scss/core.scss" )

// Assets styles
require( "@/assets/scss/style.scss" )

Vue.config.productionTip = false

new Vue( {
           router,
           store,
           i18n,
           render: h => h( App )
         } ).$mount( "#app" )