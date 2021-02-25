import Chatleftsidebar from './ChatLeftSidebar.vue';

export default {
    title: 'Chatleftsidebar',
    component: Chatleftsidebar,
};

export const Default = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Chatleftsidebar },
    template: `<ChatLeftSidebar v-bind="$props" />`,
});
