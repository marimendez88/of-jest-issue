import { mount } from '@vue/test-utils';
import Header from '../../src/lib/Header.vue';
/**
 * @jest-environment jsdom
 */
describe('Header.vue', () => {
  it('renders welcome message', () => {
    const wrapper = mount(Header);
    expect(wrapper.text()).toBe(
      'This is a test header component'
    );
  });
});
