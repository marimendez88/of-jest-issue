
import { shallowMount } from '@vue/test-utils';
import SecondTest from '../lib/SecondTest.vue';

describe('SecondTest.vue', () => {
  it('renders a second message', () => {
    const wrapper = shallowMount(SecondTest);
    expect(wrapper.text()).toMatch(
      'This is the Second Test of lib using NWRL'
    );
  });
});
