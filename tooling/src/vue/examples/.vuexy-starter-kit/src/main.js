// 3rd party plugins
import "@/libs/portal-vue";
import "@/libs/toastification";
import VueCompositionAPI            from "@vue/composition-api";
import { ModalPlugin, ToastPlugin } from "bootstrap-vue";
import Vue                          from "vue";
import App                          from "./App.vue";

// Global Components
import "./global-components";

import router from "./router";
import store  from "./store";

// BSV Plugin Registration
Vue.use( ToastPlugin );
Vue.use( ModalPlugin );

// Composition API
Vue.use( VueCompositionAPI );

// import core styles
require( "@core/scss/core.scss" );

// import assets styles
require( "@/assets/scss/style.scss" );

Vue.config.productionTip = false;

new Vue( {
           router,
           store,
           render: h => h( App )
         } ).$mount( "#styles" );
