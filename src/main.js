import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueScrollTo from "vue-scrollto";
import "font-awesome/css/font-awesome.css";
import "vuetify/dist/vuetify.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import VueI18n from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";

Vue.use(VueScrollTo, {
  duration: 800, // Duración del scroll en milisegundos
  easing: "ease-in", // Efecto de suavizado del scroll
});

AOS.init({
  duration: 1200, // Duración de las animaciones en ms
  once: false, // Si se anima solo una vez
});

Vue.use(VueI18n);

Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: "en", // Idioma predeterminado
  fallbackLocale: "en", // Idioma de respaldo
  messages: {
    en,
    es,
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  i18n,
}).$mount("#app");
