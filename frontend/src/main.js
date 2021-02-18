// Axios Mock Adapter
import "@/@fake-db/db";
import "@/libs/acl";
import "@/libs/clipboard";

import i18n                         from "@/libs/i18n";
import "@/libs/portal-vue";
import "@/libs/sweet-alerts";
import "@/libs/toastification";
import "@/libs/tour";
import "@/libs/vue-select";

// 3rd party plugins
import "@axios";
import VueCompositionAPI            from "@vue/composition-api";
import { ModalPlugin, ToastPlugin } from "bootstrap-vue";
import Vue                          from "vue";
import App                          from "./App.vue";

// Global Components
import "./global-components";
import router                       from "./router";
import store                        from "./store";

// BSV Plugin Registration
Vue.use( ToastPlugin );
Vue.use( ModalPlugin );

// Composition API
Vue.use( VueCompositionAPI );

// Feather font icon - For form-wizard
// * Shall remove it if not using font-icons of feather-icons - For form-wizard
require( "@core/assets/fonts/feather/iconfont.css" ); // For form-wizard

// import core styles
require( "@core/scss/core.scss" );

// import assets styles
require( "@/assets/scss/style.scss" );

Vue.config.productionTip = false;

new Vue( {
           router,
           store,
           i18n,
           render: h => h( App )
         } ).$mount( "#styles" );
