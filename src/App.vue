<template>
  <div id="app">
<!--    <Home msg="Welcome to Your Vue.js App"/> -->
<!-- <Home/>
<Login/> -->
	<router-view></router-view>
  </div>
</template>

<script>
 import Home from './components/Home.vue'
 import Login from './components/Login.vue'
// import StudentList from '../src/components/students/StudentList.vue'
// import InfoList from '../src/components/students/InfoList.vue'
// import Menu from '../src/components/common/Menu.vue'

export default {
  name: 'App',
  components: {
     Home,
	 Login
  }
}
</script>

<style lang="less">
@import url('@/assets/css/reset.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
