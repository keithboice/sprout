import Chatlog from './ChatLog.vue';

export default {
    title: 'Chatlog',
    component: Chatlog,
};

export const Default = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Chatlog },
    template: `<ChatLog v-bind="$props" />`,
});
