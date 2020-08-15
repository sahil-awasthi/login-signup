<template>
  <div class="app">
    <Header />
    <h3>Welcome to Vue JS demo project!</h3>
    <input type="button" value="SignOut" v-on:click="onSignout" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  methods: {
    onSignout() {
      localStorage.removeItem("token")
      window.location.replace("/login");
    },
  },
};
</script>

<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
