<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h2>{{message}}</h2>
    <h3>{{isNewUser}}</h3>
    <h3>binaryLiteral:{{binaryLiteral}}</h3>
    <div @click="showMessage">点我</div>
  </div>
</template>

<script lang="ts">
let myNumSize:numSizeFunc

import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '../components/HelloWorld.vue'
import { Person,numSizeFunc } from '../utils/indexApi'

@Component({
  components: { HelloWorld }
})

export default class Home extends Vue {
  message: string = 'Hello! dale'
  isNewUser: boolean = false
  binaryLiteral: number = 0b1010
  fibonacci: Array<number> = [1, 1, 2, 3, 5];
  // 组件方法也可以直接声明为实例的方法
  showMessage (): void {
    let dale: Person = {
      id:123,
      name: 'dale',
      height:177
    };

    dale.name= 'dale2'

    const defaultList = this.createArray(10,'dale')
    console.log('tom',dale,this.fibonacci,defaultList,this.myNumSize(10,20))

    enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}
    console.log(Days["Sun"] === 0); // true


  }

  createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
  }



  myNumSize = function(a:number,b:number){
    return a > b ? a :b
  }



}

</script>

<style lang="scss">
</style>