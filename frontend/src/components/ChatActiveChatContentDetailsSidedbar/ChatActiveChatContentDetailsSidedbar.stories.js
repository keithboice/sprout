import Chatactivechatcontentdetailssidedbar from './ChatActiveChatContentDetailsSidedbar.vue';

export default {
    title: 'Chatactivechatcontentdetailssidedbar',
    component: Chatactivechatcontentdetailssidedbar,
};

export const Default = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Chatactivechatcontentdetailssidedbar },
    template: `<ChatActiveChatContentDetailsSidedbar v-bind="$props" />`,
});
