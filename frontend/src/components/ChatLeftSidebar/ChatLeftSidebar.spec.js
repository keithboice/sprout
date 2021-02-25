import { mount }       from '@vue/test-utils'
import Chatleftsidebar from './ChatLeftSidebar'

describe('Spec Chatleftsidebar', function() {
    it('mounts', () => {
        const wrapper = mount(Chatleftsidebar)
        expect(wrapper)
            .toBeTruthy()
    })
})
