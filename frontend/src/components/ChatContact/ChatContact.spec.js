import { mount }   from '@vue/test-utils'
import Chatcontact from './ChatContact'

describe('Spec Chatcontact', function() {
    it('mounts', () => {
        const wrapper = mount(Chatcontact)
        expect(wrapper)
            .toBeTruthy()
    })
})
