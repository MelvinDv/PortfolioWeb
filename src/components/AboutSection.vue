<template>
  <section id="about">
    <v-container>
      <p
        data-aos="fade-up"
        :class="
          $vuetify.breakpoint.xs
            ? 'section-title-about-responsive'
            : 'section-title-about'
        "
      >
        {{ $t("about").toUpperCase() }}
      </p>

      <div
        :class="{
          'd-flex': true,
          'justify-space-between': !$vuetify.breakpoint.xs,
          'align-center': true,
          'flex-column': $vuetify.breakpoint.xs,
        }"
        style="width: 100%"
      >
        <v-sheet
          :class="{
            'd-flex': true,
            'align-center': true,
            'justify-center': true,
            'rounded-pill': true,
            'mb-4': $vuetify.breakpoint.xs,
          }"
          height="300"
          width="300"
          color="#a5d6a7"
        >
          <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              width: 250px;
              height: 250px;
              border-radius: 100%;
              background-color: #2e7d32;
            "
          >
            <v-img
              data-aos="zoom-in"
              data-aos-duration="500"
              class="img-face-about"
              height="200"
              src="../assets/icons/face_2.webp"
            ></v-img>
          </div>
        </v-sheet>

        <div style="width: 70%">
          <p class="grey--text text--darken-1">
            <span data-aos="fade-up">{{ $t("description.paragraph_1") }}</span>
            <br />
            <br />

            <span data-aos="fade-up">{{ $t("description.paragraph_2") }}</span>
            <br />
            <br />

            <span data-aos="fade-up">
              {{ $t("description.paragraph_3") }}

              <a
                href="https://www.behance.net/KryspiDv/projects"
                target="_blank"
                class="green--text text--darken-3 link-text font-weight-bold"
                >{{ $t("description.paragraph_4") }}</a
              >
            </span>

            <br />
            <br />

            <span data-aos="fade-up">{{ $t("description.paragraph_5") }}</span>
          </p>
          <p class="grey--text text--darken-1"></p>

          <div>
            <p
              data-aos="fade-up"
              class="text-center font-weight-bold grey--text text--darken-3 display-1"
            >
              {{ $t("experience").toUpperCase() }}
            </p>

            <v-timeline>
              <v-timeline-item data-aos="zoom-in" color="green darken-4">
                <p class="mb-0 grey--text text--darken-3">Didcom S.A de C.V</p>
                <p class="mb-0 grey--text text--darken-1">Jul 2023 - Actual</p>
                <p class="mb-0 grey--text text--darken-3 font-weight-bold">
                  Frontend Developer Jr
                </p>
              </v-timeline-item>
              <v-timeline-item
                data-aos="zoom-in"
                class="text-right"
                color="green lighten-2"
              >
                <p class="mb-0 grey--text text--darken-3">Didcom S.A de C.V</p>
                <p class="mb-0 grey--text text--darken-1">Mar - Jul 2023</p>
                <p class="mb-0 grey--text text--darken-3 font-weight-medium">
                  Frontend Developer Intership
                </p>
              </v-timeline-item>
            </v-timeline>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script scoped>
export default {
  name: "AboutSection",

  data: () => ({}),
};
</script>

<style>
.section-title-about {
  text-align: end;
  font-size: 6.7rem;
  font-weight: bold;
  color: #212121;
  margin-bottom: 0px;
}

.section-title-about-responsive {
  text-align: center;
  font-size: 6.7rem;
  font-weight: bold;
  color: #212121;
  margin-bottom: 0px;
}

.link-text {
  text-decoration: inherit;
}
</style>
