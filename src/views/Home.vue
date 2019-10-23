<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h2>{{message}}</h2>
  </div>
</template>

<script lang="ts">


import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '../components/HelloWorld.vue'

@Component({
  components: { HelloWorld }
})

export default class Home extends Vue {
  message: string = 'Hello! dale'

  // 组件方法也可以直接声明为实例的方法
  onClick (): void {
    window.alert(this.message)
  }
}

</script>

<style lang="scss">
</style>