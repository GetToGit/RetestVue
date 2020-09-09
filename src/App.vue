<template>
  <div id="app">
    <Header />
    <div class="main-section">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Header from "@/components/Header.vue"

export default {
  name: 'app',
  components:{
    Header
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
  margin-top: 0;
}
*{
  margin: 0;
  padding: 0;
}
.main-section {
    margin: auto;
    margin-top: 40px;
    width: 1200px;
}
</style>


