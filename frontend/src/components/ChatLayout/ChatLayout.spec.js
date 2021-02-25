import { mount } from '@vue/test-utils';
import Default from './default';

describe('Spec Default', function() {
    it('mounts', () => {
        const wrapper = mount(Default);
        expect(wrapper)
            .toBeTruthy();
    });
});
