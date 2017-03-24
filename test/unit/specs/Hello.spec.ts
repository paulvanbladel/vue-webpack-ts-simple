import Vue from 'vue';

import Hello from '../../../src/components/Hello.vue';
import { expect } from 'chai';
describe('Hello.vue', () => {
  it('should render correct contents', () => {
    // surprisingly this test needs to be setup with a template and components param in the vue extend method, WHY??????

    const Constructor = Vue.extend({ template: '<div><hello></hello></div>', components: { 'hello': Hello } });
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App');
      console.log('here we go', vm);
    let resultFromMyMethod = (<any>vm.$children[0]).mymethod();
    expect(resultFromMyMethod).to.equal('ok');
    
  });
});


