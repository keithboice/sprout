// Modules
import ecommerceStoreModule from "@/views/apps/e-commerce/eCommerceStoreModule";
import Vue                  from "vue";
import Vuex                 from "vuex";
import appConfig            from "./config";
import verticalMenu         from "./menu";
import app                  from "./styles";


Vue.use( Vuex );

export default new Vuex.Store( {
                                 modules: {
                                   app,
                                   appConfig,
                                   verticalMenu,
                                   "app-ecommerce": ecommerceStoreModule
                                 },
                                 strict:  process.env.DEV
                               } );
