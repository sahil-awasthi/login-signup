<template>
  <div id="signUp">
    <app-header />
    <h2>SignUp</h2>
    <form class="signUp-form">
      <input type="text" v-model="email" name="email" placeholder="Email" />
      <input type="password" v-model="password" name="password" placeholder="Password" />
      <input type="submit" value="SignUp" v-on:click="onSignUp" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onSignUp(e) {
      const userInfo = {
        email: this.email,
        password: this.password,
      };
      e.preventDefault();
      try {
        await axios.post("https://reqres.in/api/register", userInfo);
        alert("You are registered!")
        window.location.replace("./login")
      } catch (error) {
        alert(error.response.data.error);
      }
    },
  },
};
</script>

<style>
#signUp {
  margin: auto;
  min-width: 400px;
  max-width: 30%;
}

.signUp-form {
  display: flex;
  flex-direction: column;
}

.signUp-form > input {
  margin-bottom: 10px;
}

input[type="submit"]:hover {
  cursor: pointer;
  color: white;
  background-color: rgb(90, 90, 90);
}
</style>