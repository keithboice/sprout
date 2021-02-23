import Vue       from "vue"
import VueRouter from "vue-router"


Vue.use( VueRouter )

// Routes
const routes = [
  
  // *===============================================---*
  // *--------- CHAT  ---------------------------------------*
  // *===============================================---*
  {
    path:      "/apps/chat",
    name:      "apps-chat",
    component: () => import("@/views/chat/Chat.vue"),
    meta:      {
      contentRenderer: "sidebar-left",
      contentClass:    "chat-application",
      navActiveLink:   "apps-chat"
    }
  }, {
    path:      "/apps/chat/active",
    name:      "apps-chat-active",
    component: () => import("@/views/chat/Chat.vue"),
    meta:      {
      contentRenderer: "sidebar-left",
      contentClass:    "chat-application",
      navActiveLink:   "apps-chat-active"
    }
  }, {
    path:      "/apps/chat/new",
    name:      "apps-chat-new",
    component: () => import("@/views/chat/Chat.vue"),
    meta:      {
      contentRenderer: "open-chat",
      contactId:       "1",
      contentClass:    "chat-application",
      navActiveLink:   "apps-chat-new"
    }
  }, {
    path:      "/apps/chat/started",
    name:      "apps-chat-started",
    component: () => import("@/views/chat/Chat.vue"),
    meta:      {
      contentRenderer: "sidebar-left",
      contentClass:    "chat-application",
      navActiveLink:   "apps-chat-started"
    }
  }, {
    path:      "/apps/chat/closed",
    name:      "apps-chat-closed",
    component: () => import("@/views/chat/Chat.vue"),
    meta:      {
      contentRenderer: "sidebar-left",
      contentClass:    "chat-application",
      navActiveLink:   "apps-chat-closed"
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
                                    redirect: { name: "apps-chat" }
                                  }, ...routes, {
                                    path:     "*",
                                    redirect: "error-404"
                                  }
                                ]
                              } )

router.beforeEach( ( to, _, next ) => next() )
/* const isLoggedIn = isUserLoggedIn()
 
 if (!canNavigate(to)) {
 // Redirect to login if not logged in
 if (!isLoggedIn) return next({ name: 'auth-login' })
 
 // If logged in => not authorized
 return next({ name: 'misc-not-authorized' })
 }
 
 // Redirect if logged in
 if (to.meta.redirectIfLoggedIn && isLoggedIn) {
 const userData = getUserData()
 next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
 } */

export default router
