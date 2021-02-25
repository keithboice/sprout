import { mount }          from '@vue/test-utils'
import Userprofilesidebar from './UserProfileSidebar'

describe('Spec Userprofilesidebar', function() {
    it('mounts', () => {
        const wrapper = mount(Userprofilesidebar)
        expect(wrapper)
            .toBeTruthy()
    })
})
