import Vue       from "vue"
import VueRouter from "vue-router"


Vue.use( VueRouter )

// Routes
const routes = [
  
  {
    path:      "*",
    name:      "inbox",
    component: () => import("@/components/Chat/Chat.vue"),
    meta:      {
      contentRenderer: "sidebar-left",
      contentClass:    "chat-application",
      navActiveLink:   "inbox"
    }
  }

]

const router = new VueRouter( {
                                mode: "history",
                                base: process.env.BASE_URL,
                                scrollBehavior () {
                                  return {
                                    x: 0,
                                    y: 0
                                  }
                                },
                                routes: [
                                  {
                                    path:     "/",
                                    redirect: { name: "inbox" }
                                  }, ...routes, {
                                    path:     "*",
                                    redirect: { name: "inbox" }
                                  }
                                ]
                              } )
/*

router.beforeEach( ( to, _, next ) => next() )
*/

export default router