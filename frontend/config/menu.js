/**
 * @description each nav item can contain icon (if it's on top level), title, route: [route_obj/route_name] (I have to resolve name somehow from the route obj), tag, tagVariant
 * @type {({route: string, icon: string, tag: string, title: string}|{route: string, title: string}|{route: string, title: string}|{route: string, title: string})[]}
 */
const menu = [
  {
    icon: 'ChatIcon',
    title: 'chat active',
    route: 'inbox.php',
    tag: 'active',
  }, {
    title: 'chat new',
    route: 'apps-chat-new',
  }, {
    title: 'chat started',
    route: 'apps-chat-started',
  }, {
    title: 'chat closed',
    route: 'apps-chat-closed',
  },
]


export default [menu]
