import Vue  from "vue"
import Vuex from "vuex"

// Modules
import chat                 from "./chat"


Vue.use( Vuex )

export default new Vuex.Store( {
                                 modules: {
                                   chat
                                 },
                                 strict:  false
                               } )
