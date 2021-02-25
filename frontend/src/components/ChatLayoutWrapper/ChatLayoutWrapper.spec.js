import { mount }      from '@vue/test-utils';
import Defaultwrapper from './ChatLayoutWrapper';

describe('Spec Defaultwrapper', function() {
    it('mounts', () => {
        const wrapper = mount(Defaultwrapper);
        expect(wrapper)
            .toBeTruthy();
    });
});
