import Defaultwrapper from './ChatLayoutWrapper.vue';

export default {
    title: 'Defaultwrapper',
    component: Defaultwrapper,
};

export const Default = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Defaultwrapper },
    template: `<ChatLayoutWrapper v-bind="$props" />`,
});
