import { mount } from '@vue/test-utils'
import Chatlog   from './ChatLog'

describe('Spec Chatlog', function() {
    it('mounts', () => {
        const wrapper = mount(Chatlog)
        expect(wrapper)
            .toBeTruthy()
    })
})
