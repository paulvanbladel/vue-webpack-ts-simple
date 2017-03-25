import Vue from 'vue';
import Component from 'vue-class-component';


@Component({
   name: 'hello'
})
export default class Hello extends Vue {
  msg: string = 'Welcome to Your Vue.js App';
  mymethod(): string {
    console.log('here we are');
    return 'ok';
  }
}
