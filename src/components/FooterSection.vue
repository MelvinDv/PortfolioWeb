<template>
  <section id="footer">
    <v-container>
      <v-sheet
        color="transparent"
        class="d-flex justify-center align-center"
        height="150px"
        width="100%"
      >
        <div
          :class="{
            'd-flex': true,
            'flex-column': $vuetify.breakpoint.xs,
          }"
        >
          <div
            :class="{
              'd-flex': true,
              'align-center': true,
              'mr-10': !$vuetify.breakpoint.xs,
              'mb-5': $vuetify.breakpoint.xs,
            }"
          >
            <v-icon class="grey--text text--darken-1"
              >fa-solid fa-envelope</v-icon
            >
            <a class="links" href="mailto:melvindv01@gmail.com">
              <p class="grey--text text--darken-1 mb-0 ml-2">
                melvindv01@gmail.com
              </p>
            </a>
          </div>

          <div class="d-flex align-center">
            <v-icon class="grey--text text--darken-1"
              >fa-brands fa-linkedin</v-icon
            >
            <a
              class="links"
              href="https://www.linkedin.com/in/melvinduranvega"
              target="_blank"
            >
              <p class="grey--text text--darken-1 mb-0 ml-2">
                /in/melvinduranvega
              </p>
            </a>
          </div>
        </div>
      </v-sheet>
    </v-container>
  </section>
</template>

<script scoped>
export default {
  name: "FooterSection",

  data: () => ({}),
};
</script>

<style>
.links {
  text-decoration: none;
}
</style>
