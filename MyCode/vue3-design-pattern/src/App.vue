<template>
  <nav>
    <router-link to="/"><a-button type="primary">Home</a-button></router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/props">Props</router-link> |
    <router-link to="/antd">Antd</router-link> |
    <router-link to="/provideinject">ProvideInject</router-link> |
    <router-link to="/datetime">DateTime</router-link> |
    <router-link to="/formvalidation">FormValidation</router-link> |
    <router-link to="/tictactoe">TicTacToe</router-link>
  </nav>
  <router-view />
</template>

<script>
import { onMounted } from 'vue';
export default {
  setup() {
    onMounted(() => {
      console.log(process.env.BASE_URL);
    });
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
