import Vue from "vue";
import App from "@/App.vue";
import store from "@/store/store.js";
import vuelidate from "vuelidate";
import router from "@/router/index.js";

Vue.config.productionTip = false;
Vue.use(vuelidate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
