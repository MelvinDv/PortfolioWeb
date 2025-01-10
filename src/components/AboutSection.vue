<template>
  <section id="about">
    <v-container>
      <p
        :class="
          $vuetify.breakpoint.xs
            ? 'section-title-about-responsive'
            : 'section-title-about'
        "
      >
        ABOUT
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
              class="img-face-about"
              height="200"
              src="../assets/icons/face_2.webp"
            ></v-img>
          </div>
        </v-sheet>

        <div style="width: 70%">
          <p class="grey--text text--darken-1">
            Hi! I'm Melvin, a 23-year-old Front-end Developer. I'm passionate
            about web design and specialize in creating minimalistic,
            responsive, and user-friendly interfaces with smooth transitions. My
            skill set includes technologies like HTML, CSS, JavaScript, Vue,
            Vuetify, Node.js, Figma, and Git, which I use to bring digital ideas
            to life. <br />
            <br />

            I have extensive experience developing web platforms from scratch,
            starting with mockups and transforming them into functional and
            visually appealing interfaces. For example, I’ve worked on a
            platform to manage vehicle fleets, incorporating features like
            scheduling, real-time location tracking, and data visualization, all
            designed to provide a seamless user experience. In addition to
            platforms, I also create landing pages for clients looking to expand
            their brands or businesses. My goal is always to deliver solutions
            that reflect their vision while ensuring accessibility and aesthetic
            appeal. <br />
            <br />

            Beyond development, my background as a video editor—having
            collaborated with recognized Mexican streamers—has sharpened my eye
            for detail and design. This unique skill set helps me craft digital
            experiences that are not only functional but also visually engaging.
            If you're curious to see more
            <a
              href="https://www.behance.net/KryspiDv/projects"
              target="_blank"
              class="green--text text--darken-3 link-text"
              >click here</a
            >! <br />
            <br />

            I thrive on challenges and am always eager to learn new technologies
            and frameworks to stay at the forefront of the industry. My
            commitment to excellence and continuous improvement drives me to
            deliver the best results in every project I take on.
          </p>
          <p class="grey--text text--darken-1"></p>

          <div>
            <p
              class="text-center font-weight-bold grey--text text--darken-3 display-1"
            >
              EXPERIENCE
            </p>

            <v-timeline>
              <v-timeline-item color="green darken-4">
                <p class="mb-0 grey--text text--darken-3">Didcom S.A de C.V</p>
                <p class="mb-0 grey--text text--darken-1">Jul 2023 - Actual</p>
                <p class="mb-0 grey--text text--darken-3 font-weight-bold">
                  Frontend Developer Jr
                </p>
              </v-timeline-item>
              <v-timeline-item class="text-right" color="green lighten-2">
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
