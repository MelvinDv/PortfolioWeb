import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueScrollTo from "vue-scrollto";
import "font-awesome/css/font-awesome.css";
import "vuetify/dist/vuetify.min.css";

Vue.use(VueScrollTo, {
  duration: 800, // Duración del scroll en milisegundos
  easing: "ease-in", // Efecto de suavizado del scroll
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
