import Vue from 'vue'
import App from './App.vue'
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";

Vue.config.productionTip = false

const NotFound = { template: "<p>Page not found</p>" };
const routes = {
  "/": App,
  "/login": Login,
  "/signup": SignUp
};

new Vue({
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound;
    },
  },
  render(h) {
    return h(this.ViewComponent);
  }
}).$mount('#app')

