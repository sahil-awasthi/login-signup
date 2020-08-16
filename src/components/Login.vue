<template>
  <div id="login">
    <Header />
    <h2>Login</h2>
    <form class="login-form">
      <input type="text" v-model="email" name="email" placeholder="Email" />
      <input type="password" v-model="password" name="password" placeholder="Password" />
      <div class="buttons">
        <input type="submit" value="Login" v-on:click="onLogin" />
        <input type="button" value="SignUp" v-on:click="onSignUp" />
      </div>
    </form>
  </div>
</template> 

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "Login",
  components: {
    Header,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onLogin(e) {
      const userInfo = {
        email: this.email,
        password: this.password,
      };

      e.preventDefault();
      try {
        const result = await axios.post("https://reqres.in/api/login", userInfo);
        localStorage.setItem("token", result.data.token);
        window.location.replace("/");
        console.log(result.data.token);
      } catch (error) {
        alert(error.response.data.error);
      }
    },

    onSignUp() {
      const currentPath = window.location.pathname;
      if (currentPath !== "/signup") {
        window.location.replace("/signup");
        console.log(localStorage.getItem("tokens"));
      }
    },
  },
};
</script>

<style>
#login {
  margin: auto;
  min-width: 400px;
  max-width: 30%;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-form > input {
  margin-bottom: 10px;
}

.buttons > input {
  min-width: 40%;
  margin-right: 10px;
}

input[type="submit"]:hover,
input[type="button"]:hover {
  cursor: pointer;
  color: white;
  background-color: rgb(90, 90, 90);
}
</style>