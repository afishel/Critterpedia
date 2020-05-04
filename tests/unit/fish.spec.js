// import { shallowMount } from '@vue/test-utils';
import fish from '@/content/fish.yaml';

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message';
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

describe('fish.yaml', () => {
  it('is an array', () => {
    expect(Array.isArray(fish)).toBe(true);
  });

  it('is array of objects', () => {
    fish.forEach((x) => {
      expect(typeof x === 'object').toBe(true);
    });
  });

  it('has required properties', () => {
    fish.forEach((x) => {
      expect(typeof x.name === 'string').toBe(true);
      expect(typeof x.price === 'number').toBe(true);
      expect(typeof x.location === 'string').toBe(true);
      expect(typeof x.size === 'number').toBe(true);
      expect(x.time === -1 || Array.isArray(x.time)).toBe(true);
      expect(x.months === -1 || Array.isArray(x.months)).toBe(true);
    });
  });
});
