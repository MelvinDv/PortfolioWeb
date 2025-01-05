<template>
  <div>
    <section id="work">
      <v-container>
        <p
          :class="
            $vuetify.breakpoint.xs
              ? 'section-title-responsive text-center'
              : 'section-title'
          "
        >
          WORK
        </p>

        <div
          v-for="(card, i) in cards"
          :key="i"
          class="work-cards"
          :style="$vuetify.breakpoint.xs ? 'place-items: center;' : ''"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              class="d-flex content-card elevation-0 mb-2"
              @click="openWork(card)"
            >
              <div
                :class="{
                  'img-container rounded-lg': true,
                  'zoom-img': hover,
                }"
                :style="{
                  backgroundImage: `url(${card.img})`,
                }"
              >
                <div
                  :class="
                    hover ? 'container-info' : 'container-info opacity-info'
                  "
                  style="min-height: 250px"
                >
                  <div class="d-flex mb-1">
                    <p
                      class="card-year font-weight-black grey--text text--lighten-3 mb-0 mx-2"
                    >
                      {{ card.year }}
                    </p>
                    <p class="card-title font-weight-black white--text mb-0">
                      {{ card.title }}
                    </p>
                  </div>

                  <div class="d-flex">
                    <v-chip
                      small
                      v-for="chip in card.tech"
                      :key="chip.id"
                      :text-color="chip.color"
                      class="ml-2"
                      :color="chip.background"
                      >{{ chip.name }}</v-chip
                    >
                  </div>
                </div>
              </div>
            </v-card>
          </v-hover>
        </div>
      </v-container>
    </section>

    <v-dialog
      v-model="dialogProject"
      width="800"
      :fullscreen="$vuetify.breakpoint.xs"
      eager
      persistent
    >
      <v-card>
        <v-card-title class="fixed-header-card white">
          <span class="text-h5">{{
            workSelected != null ? workSelected.title : ""
          }}</span>

          <v-spacer></v-spacer>

          <v-btn icon dark @click="closeWork()">
            <v-icon color="#242424">mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="overflow-auto">
          <v-img
            v-if="workSelected != null"
            class="mb-5"
            :src="workSelected.images[1]"
            max-height="400"
            max-width="800"
          ></v-img>

          <p
            v-html="workSelected != null ? workSelected.desc : ''"
            class="text-justify px-3"
          ></p>

          <v-img
            v-if="workSelected != null"
            class="mt-5"
            :src="workSelected.images[0]"
            max-width="800"
            contain
          >
          </v-img>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import workPsico from "@/assets/images/workPsico.png";
import imgPsicoEdgarTejo from "@/assets/images/edgarTrejoImg_1.png";
import imgPsicoEdgarTrejoFull from "@/assets/images/edgarTrejoImgFull.png";

export default {
  name: "WorkSection",

  data: () => ({
    cards: [
      {
        title: "Landing Page",
        year: 2024,
        img: workPsico,
        desc: `I designed and developed a fully responsive landing page for a psychologist specializing in mental health and emotional well-being services. The goal was to create a welcoming and professional platform that could effectively communicate the psychologist's expertise while encouraging potential clients to get in touch. To achieve this, I implemented a user-centered design approach, focusing on clean aesthetics and an intuitive layout that inspires trust and comfort. The landing page prominently features key elements such as service descriptions, a contact form, and strategically placed calls-to-action to maximize user engagement and drive conversions.
<br> <br> The design was fully optimized for different devices, ensuring a seamless experience whether accessed on mobile, tablet, or desktop. Leveraging technologies like HTML, CSS, JavaScript, Vue.js, and Vuetify, I built a scalable and efficient structure that aligns with modern web development standards. This project allowed me to demonstrate my ability to understand a client's vision, translate it into a functional digital product, and create a meaningful online presence for specialized professional services.`,
        images: [imgPsicoEdgarTrejoFull, imgPsicoEdgarTejo],
        tech: [
          {
            name: "Vue.js",
            color: "grey--text text--darken-4",
            background: "#42B883",
            id: 1,
          },
          {
            name: "JavaScript",
            color: "grey--text text--darken-4",
            background: "#F0D900",
            id: 2,
          },
          {
            name: "HTML",
            color: "white",
            background: "#F16529",
            id: 3,
          },
          {
            name: "CSS",
            color: "white",
            background: "#13A1DF",
            id: 4,
          },
        ],
      },
    ],
    dialogProject: false,
    workSelected: null,
  }),

  created() {
    window.work = this;
  },

  methods: {
    openWork(item) {
      this.dialogProject = true;

      console.log("THIS IS THE PROJECT SELECTED", item);
      this.workSelected = item;
    },

    closeWork() {
      this.dialogProject = false;
      this.workSelected = null;
    },
  },
};
</script>

<style scoped>
.section-title {
  font-size: 128px;
  font-weight: bold;
  color: #212121;
  margin-bottom: 0px;
}

.section-title-responsive {
  font-size: 7rem;
  font-weight: bold;
  color: #212121;
  margin-bottom: 0px;
}

.work-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}

.content-card {
  width: fit-content;
}

.img-container {
  width: 350px;
  max-height: 250px;

  background-size: 127%;
  background-position-x: center;
  background-repeat: no-repeat;

  transition: all 0.5s ease;
}

.card-year {
  font-size: 20px;
}

.card-title {
  font-size: 32px;
  line-height: normal;
}

.container-info {
  display: flex;
  flex-flow: column;
  justify-content: end;
  padding: 12px 8px;
  max-height: 250px;
  border-radius: 8px;

  opacity: 100%;
  transition: all 0.3s ease-out;
  background-color: #24242450;
  cursor: pointer;
}

.opacity-info {
  opacity: 0;
}

.zoom-img {
  background-size: 130%;
}

.fixed-header-card {
  position: sticky;
  z-index: 200;
  top: 0;
}
</style>
