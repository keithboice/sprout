import Chatcontact from './ChatContact.vue';

export default {
    title: 'Chatcontact',
    component: Chatcontact,
};

export const Default = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Chatcontact },
    template: `<ChatContact v-bind="$props" />`,
});
