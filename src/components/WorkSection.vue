<template>
  <div>
    <section id="work">
      <v-container>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          :class="
            $vuetify.breakpoint.xs
              ? 'section-title-responsive text-center'
              : 'section-title'
          "
        >
          {{ $t("work").toUpperCase() }}
        </p>

        <v-row>
          <v-col
            sm="12"
            md="4"
            lg="4"
            no-gutters
            justify="start"
            dense
            v-for="card in cards"
            :key="card.id"
          >
            <v-hover
              v-slot="{ hover }"
              class="work-cards"
              :style="$vuetify.breakpoint.xs ? 'place-items: center;' : ''"
            >
              <v-card
                data-aos="fade-up"
                class="d-flex content-card elevation-0 mb-2"
                @click="openWork(card)"
              >
                <div
                  :class="['img-container rounded-lg', { 'zoom-img': hover }]"
                  :style="{
                    backgroundImage: `url(${card.img})`,
                  }"
                >
                  <div
                    :class="['container-info', { 'opacity-info': !hover }]"
                    style="min-height: 250px"
                  >
                    <div class="d-flex mb-1">
                      <p
                        class="card-year font-weight-black grey--text text--lighten-3 mb-0 mx-2"
                      >
                        {{ card.year }}
                      </p>
                      <p class="card-title font-weight-black white--text mb-0">
                        {{ card.shortTitle }}
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
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-bottom-sheet
      v-model="dialogProject"
      :fullscreen="$vuetify.breakpoint.xs"
      scrollable
    >
      <v-card class="rounded-xxl-b-0">
        <v-card-title class="d-flex justify-end">
          <v-btn icon dark @click="closeWork()">
            <v-icon color="#242424">mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <div class="d-flex flex-column justify-center">
            <span
              class="text-h4 text-center font-weight-bold grey--text text--darken-4"
              >{{ workSelected?.title.toUpperCase() }}</span
            >

            <span
              class="font-weight-medium grey--text text--darken-3 text-center mb-2"
            >
              - {{ workSelected?.subtitle }} -
            </span>

            <div class="d-flex justify-center mb-4">
              <v-chip
                small
                v-for="chip in workSelected?.tech"
                :key="chip.id"
                :text-color="chip.color"
                class="ml-2"
                :color="chip.background"
                >{{ chip.name }}</v-chip
              >
            </div>
          </div>

          <div class="d-flex flex-column justify-center align-center">
            <v-img
              v-if="workSelected != null"
              class="mb-5 rounded-xxl"
              :src="workSelected.images[1]"
              :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '800px'"
            ></v-img>

            <p
              v-html="
                workSelected != null
                  ? $i18n.locale == 'en'
                    ? workSelected.desc
                    : workSelected.desc_esp
                  : ''
              "
              class="text-justify px-3"
              style="max-width: 800px"
            ></p>
          </div>

          <v-tabs v-model="tab" color="green darken-4" centered fixed-tabs>
            <v-tabs-slider color="green darken-4"></v-tabs-slider>

            <v-tab> Web </v-tab>
            <v-tab v-if="workSelected?.images.length > 2">
              {{ $t("mobile") }}
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-img
                v-if="workSelected != null"
                class="mt-5 rounded-xxl"
                :src="workSelected.images[0]"
                contain
                width="100%"
                :height="$vuetify.breakpoint.smAndDown ? '520px' : '100%'"
                max-height="800px"
                style="aspect-ratio: 16/9"
              >
              </v-img>
            </v-tab-item>

            <v-tab-item v-if="workSelected?.images.length > 2">
              <v-img
                class="mt-5 rounded-xxl"
                :src="workSelected.images[2]"
                width="100%"
                :max-width="$vuetify.breakpoint.smAndDown ? '320px' : '100%'"
                height="auto"
                style="object-fit: contain"
              >
              </v-img>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>

<script>
import workPsico from "@/assets/images/workPsico.webp";
import imgPsicoEdgarTejo from "@/assets/images/edgarTrejoImg_1.webp";
import imgPsicoEdgarTrejoFullMobile from "@/assets/images/edgar-mobile.webp";
import imgPsicoEdgarTrejoFullWeb from "@/assets/images/edgar-web.webp";

import workNutrio from "../assets/images/nutriologaWork.webp";
import imgNutriologa from "../assets/images/work/nutriologa/imgNutriologa.webp";
import imgNutriologaFullWeb from "../assets/images/work/nutriologa/Nutriologa.webp";

export default {
  name: "WorkSection",

  data: () => ({
    cards: [
      {
        id: 1,
        title: "Edgar Trejo",
        subtitle: "Landing Page",
        shortTitle: "Langing Page",
        year: 2024,
        img: workPsico,
        desc: `I designed and developed a fully responsive landing page for a psychologist specializing in mental health and emotional well-being services. The goal was to create a welcoming and professional platform that could effectively communicate the psychologist's expertise while encouraging potential clients to get in touch. To achieve this, I implemented a user-centered design approach, focusing on clean aesthetics and an intuitive layout that inspires trust and comfort. The landing page prominently features key elements such as service descriptions, a contact form, and strategically placed calls-to-action to maximize user engagement and drive conversions.
<br> <br> The design was fully optimized for different devices, ensuring a seamless experience whether accessed on mobile, tablet, or desktop. Leveraging technologies like HTML, CSS, JavaScript, Vue.js, and Vuetify, I built a scalable and efficient structure that aligns with modern web development standards. This project allowed me to demonstrate my ability to understand a client's vision, translate it into a functional digital product, and create a meaningful online presence for specialized professional services.`,
        desc_esp: `Diseñé y desarrollé una landing page totalmente responsiva para un psicólogo especializado en servicios de salud mental y bienestar emocional.  El objetivo era crear una plataforma acogedora y profesional que pudiera comunicar eficazmente la experiencia del psicólogo y, al mismo tiempo, animar a los clientes potenciales a ponerse en contacto. Para lograrlo, apliqué un enfoque de diseño centrado en el usuario, centrándome en una estética limpia y un diseño intuitivo que inspira confianza y comodidad. La landing page cuenta con elementos clave como descripciones de servicios, un formulario de contacto y llamadas a la acción estratégicamente situadas para maximizar el compromiso del usuario e impulsar las conversiones.
        <br> <br> El diseño se optimizó completamente para diferentes dispositivos, garantizando una experiencia fluida tanto si se accede desde un móvil, una tableta o una PC. Aprovechando tecnologías como HTML, CSS, JavaScript, Vue.js y Vuetify, construí una estructura escalable y eficiente que se alinea con los estándares modernos de desarrollo web. Este proyecto me permitió demostrar mi capacidad para entender la visión de un cliente, traducirla en un producto digital funcional y crear una presencia en línea significativa para servicios profesionales especializados.`,
        images: [
          imgPsicoEdgarTrejoFullWeb,
          imgPsicoEdgarTejo,
          imgPsicoEdgarTrejoFullMobile,
        ],
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
      {
        id: 2,
        title: "Nutriologa",
        subtitle: "Landing Page",
        shortTitle: "Langing Page",
        year: 2025,
        img: workNutrio,
        desc: `Modern and user-friendly landing page design for a professional nutritionist. This layout focuses on clarity and accessibility, highlighting key services, credentials, and client benefits. The design features a clean and inviting aesthetic with a well-structured layout, ensuring an intuitive user experience. Emphasizing trust and professionalism, it includes a dedicated ‘About Me’ section, service descriptions, and a contact form to enhance client engagement.`,
        desc_esp: `Landing page diseñada para una nutrióloga profesional, enfocada en destacar sus servicios, experiencia y la confianza que brinda a sus pacientes. El diseño presenta una estética limpia y moderna, con una paleta de colores frescos y naturales que evocan bienestar y salud. Sección por sección, la página guía al usuario a través de los servicios ofrecidos, el perfil profesional de la nutrióloga, testimonios de pacientes satisfechos y datos de contacto. Gracias a un diseño responsivo y una estructura intuitiva, la navegación es fluida y accesible en cualquier dispositivo.`,
        images: [imgNutriologaFullWeb, imgNutriologa],
        tech: [
          {
            name: "Figma",
            color: "white",
            background: "#9C27B0",
            id: 1,
          },
        ],
      },
    ],
    dialogProject: false,
    workSelected: null,
    tab: null,
  }),

  created() {
    window.work = this;
  },

  methods: {
    openWork(item) {
      this.dialogProject = true;
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
  font-size: 5rem;
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
  border-radius: 8px;

  opacity: 1;
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

/*TABS*/
.theme--light.v-tabs-items {
  display: flex;
  justify-content: center;
}
</style>
