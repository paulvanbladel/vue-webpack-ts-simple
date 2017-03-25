import Vue from 'vue';
import Bonjour from '../../../src/components/Bonjour.vue';
import { expect } from 'chai';
describe('Bonjour.vue', () => {
  it('should render correct contents', () => {
    debugger;
    const Constructor = Vue.extend(Bonjour);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('I am a real dump component without any logic just some data');
  });
});


