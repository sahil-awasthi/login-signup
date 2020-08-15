<template>
  <div id="signUp">
    <Header />
    <h2>SignUp</h2>
    <form class="signUp-form">
      <input type="text" v-model="email" name="email" placeholder="Email" />
      <input type="password" v-model="password" name="password" placeholder="Password" />
      <input type="submit" value="SignUp" v-on:click="onSignUp" />
    </form>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "SignUp",
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
    onSignUp(e) {
      e.preventDefault();
      axios({
        method: "POST",
        url: "https://reqres.in/api/register",
        data: {
          email: this.email,
          password: this.password,
        },
      })
      .then((result) => {
          alert("You are registered!")
          console.log(result)
          window.location.replace("./login")
      })
      .catch((error) => {
          alert(error.response.data.error)
      });
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