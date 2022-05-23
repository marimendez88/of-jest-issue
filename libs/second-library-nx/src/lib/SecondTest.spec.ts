/**
 * @jest-environment jsdom
 */


import { mount } from '@vue/test-utils';
import SecondTest from '../lib/SecondTest.vue';


test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});
describe('SecondTest.vue', () => {
  it('renders a second message', () => {
    const wrapper = mount(SecondTest);
    expect(wrapper.text()).toBe(
      'This is the Second Test of lib using NWRL'
    );
  });
});
