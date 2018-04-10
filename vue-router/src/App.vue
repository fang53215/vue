<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">Home</router-link>|
      <router-link :to="{name:'Change'}">change</router-link>|
      <router-link to="/params/100/New Title">Params</router-link>|
      <router-link to="/goHome">goHome</router-link>|
      <router-link to="/goParams/200/new new new params">goParams</router-link>
      <router-link to="/block1">block1</router-link>
      <router-link to="/fang">fang</router-link>
      <router-link to="/home1">Home1</router-link>
      <router-link to="/404444">404</router-link>
      <br/>
      <button @click="goBack">后退</button>
      <button @click="goGo">前进</button>
      <button @click="goHome">返回首页</button>
    </div>

    <transition name="fade" mode="out-in">
      <router-view/>
     </transition>
      <router-view name="left" class="left"/>
      <router-view name="right" class="right"/>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){  //vue2.0写法
      this.$router.go(-1);
    },
    goGo(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }
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
.left{
  float: left;
  width:50%;
  height: 300px;
  background-color: aquamarine;
}
.right{
  float: right;
  width:50%;
  height: 300px;
  background-color:blueviolet;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: 0.5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: 0.5s;
}
</style>
