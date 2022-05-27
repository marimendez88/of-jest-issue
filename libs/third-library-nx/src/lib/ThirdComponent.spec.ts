/**
 * @jest-environment jsdom
 */


import { mount } from '@vue/test-utils';
import ThirdComponent from '../lib/ThirdComponent.vue';


describe('SecondTest.vue', () => {
  it('renders a second message', () => {
    const wrapper = mount(ThirdComponent);
    expect(wrapper.text()).toBe(
      'External 3 Library'
    );
  });
});
