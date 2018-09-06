<template lang="pug">
  #app-7
    ol
      todo-item(v-for="item in groceryList"
                v-bind:todo="item"
                v-bind:key="item.id")
</template>

<script>
import { store } from '../vuex/store';

export default {
  name: 'HelloWorld',
  store,
  data() {
    return {
      message: '안녕하세요! Vue.js!'
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">


</style>
