<template>
  <v-app>
    <v-app-bar app dense flat color="transparent" dark style="z-index: 200">
      <p class="grey--text text--darken-4 font-weight-bold mb-0">
        <span class="green--text text--darken-4">{</span>
        melvinduranvega.com
        <span class="green--text text--darken-4">}</span>
      </p>

      <v-spacer></v-spacer>

      <div v-if="!$vuetify.breakpoint.xs" class="d-flex">
        <span
          class="font-weight-medium toolbarStyle"
          @click="$scrollTo('#work')"
          >{{ $t("work") }}</span
        >
        <span
          class="ml-4 font-weight-medium toolbarStyle"
          @click="$scrollTo('#about')"
          >{{ $t("about") }}</span
        >
        <span
          class="ml-4 font-weight-medium toolbarStyle"
          @click="$scrollTo('#contact')"
          >{{ $t("contact") }}</span
        >
      </div>

      <v-icon
        v-if="$vuetify.breakpoint.xs"
        @click="openDrawer"
        class="green--text text--darken-4"
        >fa-solid fa-bars</v-icon
      >

      <v-navigation-drawer
        v-model="drawer"
        color="white"
        absolute
        right
        temporary
        overlay-color="transparent"
      >
        <div class="d-flex flex-column">
          <span
            class="font-weight-medium toolbarStyle mb-2 mt-2 text-center"
            style="font-size: 24px"
            @click="$scrollTo('#work')"
            >Work</span
          >
          <span
            class="font-weight-medium toolbarStyle mb-2 text-center"
            style="font-size: 24px"
            @click="$scrollTo('#about')"
            >About</span
          >
          <span
            class="font-weight-medium toolbarStyle mb-2 text-center"
            style="font-size: 24px"
            @click="$scrollTo('#contact')"
            >Contact Me</span
          >
        </div>
      </v-navigation-drawer>

      <v-btn
        @click="changeLang('es')"
        dense
        depressed
        rounded
        :color="$i18n.locale == 'es' ? 'green darken-4' : 'transparent'"
        :class="{
          'ml-5': true,
          'mr-1': true,
          'grey--text text--darken-4': $i18n.locale == 'en',
        }"
        >ES</v-btn
      >
      <v-btn
        @click="changeLang('en')"
        dense
        depressed
        rounded
        :color="$i18n.locale == 'en' ? 'green darken-4' : 'transparent'"
        :class="$i18n.locale == 'en' ? '' : 'grey--text text--darken-4'"
        >EN</v-btn
      >
    </v-app-bar>

    <v-main style="width: 100vw; max-width: 100vw; min-width: 100vw">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    selectedItem: null,
    drawer: false,
  }),

  created() {
    window.home = this;
    const userLang = localStorage.getItem("userLang") || "en";
    this.$i18n.locale = userLang;
  },

  methods: {
    openDrawer() {
      this.drawer = !this.drawer;
    },

    changeLang(lng) {
      this.$i18n.locale = lng;
      localStorage.setItem("userLang", lng);
    },
  },
};
</script>

<style>
.toolbarStyle {
  cursor: pointer;
  color: #212121;
}

.toolbarStyle:hover {
  color: #1b5e20 !important;
}

/* === RESPONSIVE NAVBAR */
.v-navigation-drawer__content {
  height: fit-content;
}

.v-overlay--active {
  height: 100vh;
}

.v-navigation-drawer--right.v-navigation-drawer--is-mobile {
  min-height: fit-content;
  top: 40px !important;
  width: 100vw !important;
  box-shadow: none !important;
}
</style>
