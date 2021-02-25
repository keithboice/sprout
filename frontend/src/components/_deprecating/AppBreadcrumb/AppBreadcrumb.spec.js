import { mount }     from '@vue/test-utils'
import Appbreadcrumb from './AppBreadcrumb'

describe('Spec Appbreadcrumb', function() {
    it('mounts', () => {
        const wrapper = mount(Appbreadcrumb)
        expect(wrapper)
            .toBeTruthy()
    })
})