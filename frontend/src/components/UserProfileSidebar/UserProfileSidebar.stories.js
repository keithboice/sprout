import Userprofilesidebar from './UserProfileSidebar.vue';

export default {
    title: 'Userprofilesidebar',
    component: Userprofilesidebar,
};

export const Default = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Userprofilesidebar },
    template: `<UserProfileSidebar v-bind="$props" />`,
});
