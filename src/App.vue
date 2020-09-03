<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>{{test}}<br>
    {{info}}
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
    data(){
    return{
      test:'aa',
      info: null,
    }
   
  },
     mounted () {
      //  console.log('test')
    // axios.get('https://www.runoob.com/try/ajax/json_demo.json')
    axios.get("/api")
      .then(response => (this.info = response))
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
