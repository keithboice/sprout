import Default from './default.vue';

export default {
    title: 'Default',
    component: Default,
};

export const Default = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Default },
    template: `<default v-bind="$props" />`,
});
