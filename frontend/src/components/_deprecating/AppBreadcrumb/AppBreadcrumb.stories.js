import Appbreadcrumb from './AppBreadcrumb.vue';

export default {
    title: 'Appbreadcrumb',
    component: Appbreadcrumb,
};

export const Default = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Appbreadcrumb },
    template: `<AppBreadcrumb v-bind="$props" />`,
});
