// Jest test spec <Hello>

import Vue from 'vue';
import Hello from '@/page/Hello';

describe('Hello.vue', () => { //Hello.vue 를 실행하면,
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Hanu Vue Template');
  });
});
