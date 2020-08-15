<template>
  <div class="header">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "Header",
  beforeCreate() {
    const token = localStorage.getItem("token");
    const currentPath = window.location.pathname;
    if (token) {
      if (currentPath !== "/") {
        window.location.replace("/");
      }
    } else {
      if (currentPath === "/") {
        window.location.replace("/login")
      }
    }
  },
};
</script>

<style>
.header {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
