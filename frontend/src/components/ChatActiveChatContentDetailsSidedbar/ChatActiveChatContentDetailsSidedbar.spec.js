import { mount }                            from '@vue/test-utils'
import Chatactivechatcontentdetailssidedbar from './ChatActiveChatContentDetailsSidedbar'

describe('Spec Chatactivechatcontentdetailssidedbar', function() {
    it('mounts', () => {
        const wrapper = mount(Chatactivechatcontentdetailssidedbar)
        expect(wrapper)
            .toBeTruthy()
    })
})
