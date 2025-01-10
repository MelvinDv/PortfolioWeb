<template>
  <div>
    <!-- --------------- -->
    <!-- BACKGROUND TEXT -->
    <!-- --------------- -->
    <v-sheet class="background-container">
      <vue-marquee-slider
        id="marquee-slider"
        :speed="80000"
        :space="50"
        autoWidth
      >
        <p
          class="font-weight-bold grey--text text--lighten-2 mb-0 text-marquee"
        >
          FRONTEND
        </p>
      </vue-marquee-slider>

      <vue-marquee-slider
        id="marquee-slider-reverse"
        reverse
        :speed="80000"
        :space="50"
        autoWidth
      >
        <p
          class="font-weight-bold grey--text text--lighten-2 mb-0 text-marquee"
        >
          DEVELOPER
        </p>
      </vue-marquee-slider>
    </v-sheet>

    <!-- ------------ -->
    <!-- FRONT HEADER -->
    <!-- ------------ -->

    <v-sheet class="body-container">
      <v-sheet class="header-img-container">
        <v-img
          class="img-face"
          height="200"
          src="../assets/icons/face_1.webp"
        ></v-img>
      </v-sheet>

      <div>
        <p
          :class="{
            'text-body': true,
            'font-weight-bold': true,
            'grey--text': true,
            'text--darken-4': true,
            'mb-0': true,
            'text-center': $vuetify.breakpoint.xs,
            'text-start': !$vuetify.breakpoint.xs,
          }"
        >
          Hi, I'm
        </p>

        <p
          :class="{
            'text-name': true,
            'font-weight-bold': true,
            'grey--text': true,
            'text--darken-4': true,
            'mb-0': !$vuetify.breakpoint.xs,
            'mb-2': $vuetify.breakpoint.xs,
            'text-center': $vuetify.breakpoint.xs,
          }"
        >
          <span class="green--text text--darken-3">Melvin</span> Durán Vega
        </p>
      </div>

      <div class="chip-header">Frontend Developer</div>
    </v-sheet>
  </div>
</template>

<script>
import Vue from "vue";
import VueMarqueeSlider from "vue-marquee-slider";
Vue.use(VueMarqueeSlider);

export default {
  name: "HeaderPortfolio",

  data: () => ({}),
};
</script>

<style scoped>
.background-container {
  width: 100%;
  height: 100%;
}

.theme--light.v-sheet {
  background-color: transparent;
}

.text-marquee {
  font-size: 280px;
  line-height: 100%;
}

.body-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 560px;
  background-color: transparent;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}

.text-body {
  font-size: 32px;
  line-height: normal;
}

.text-name {
  font-size: 48px;
  line-height: normal;
}

.header-img-container {
  background-color: white;
  width: 220px;
  height: 220px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chip-header {
  background-color: #2e7d32;
  border-radius: 16px;
  font-weight: 400;
  color: white;
  padding: 4px 20px;
}

.img-face {
  transform: rotate(-0.05turn);
}
</style>
