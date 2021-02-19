/*

Array of object

Top level object can be:
1. Header
2. Group (Group can have navItems as children)
3. navItem

* Supported Options

/--- Header ---/

header

/--- nav Grp ---/

title
icon (if it's on top level)
tag
tagVariant
children

/--- nav Item ---/

icon (if it's on top level)
title
route: [route_obj/route_name] (I have to resolve name somehow from the route obj)
tag
tagVariant

*/

const menu = [
  {
    icon: 'ChatIcon',
    title: 'chat active',
    route: 'apps/chat',
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

// Array of sections
export default [menu]
