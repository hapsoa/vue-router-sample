<template lang="pug">
  #app-6
    p {{ message }}
    input(v-model="message")
</template>

<script>
import { store } from '../vuex/store';

export default {
  name: 'HelloWorld',
  store,
  data() {
    return {
      message: '안녕하세요 Vue!'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">


</style>
