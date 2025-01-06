<template>
  <section id="contact">
    <v-container>
      <p
        :class="
          $vuetify.breakpoint.xs
            ? 'section-title-contact-responsive'
            : 'section-title-contact'
        "
      >
        CONTACT ME
      </p>

      <v-row v-if="!$vuetify.breakpoint.xs" no-gutters>
        <v-col cols="3"></v-col>
        <v-col cols="6">
          <v-form @submit.prevent="validateForm" v-model="isFormValid">
            <div class="d-flex jusfify-center align-center flex-column">
              <v-sheet class="pa-4" width="500">
                <v-text-field
                  v-model="form.name"
                  dense
                  label="Name"
                  placeholder="Write your name"
                  outlined
                  :rules="[rules.required]"
                ></v-text-field>

                <v-text-field
                  v-model="form.email"
                  dense
                  label="Your Email"
                  placeholder="example@gmail.com"
                  outlined
                  :rules="[rules.required, rules.email]"
                ></v-text-field>

                <v-textarea
                  v-model="form.message"
                  dense
                  outlined
                  name="input-7-4"
                  label="Message"
                  :rules="[rules.required]"
                ></v-textarea>

                <v-btn
                  :loading="loadingForm"
                  :disabled="loadingForm || !isFormValid || sentMessage"
                  type="submit"
                  class="white--text"
                  block
                  depressed
                  color="green darken-4 mt-2"
                  >Submit</v-btn
                >
              </v-sheet>
            </div>
          </v-form>
        </v-col>
        <v-col cols="3">
          <v-img
            contain
            class="img-face-contact"
            height="250"
            src="../assets/icons/face_3.png"
          >
            <div>
              <p class="mb-0">Got a project?</p>
              <p class="mb-0">Let's Talk!</p>
            </div>
          </v-img>
        </v-col>
      </v-row>

      <div v-if="$vuetify.breakpoint.xs">
        <v-form @submit.prevent="validateForm" v-model="isFormValid">
          <div class="d-flex jusfify-center align-center flex-column">
            <v-sheet class="pa-4" width="100%">
              <v-text-field
                v-model="form.name"
                dense
                label="Name"
                placeholder="Write your name"
                outlined
                :rules="[rules.required]"
              ></v-text-field>

              <v-text-field
                v-model="form.email"
                dense
                label="Your Email"
                placeholder="example@gmail.com"
                outlined
                :rules="[rules.required, rules.email]"
              ></v-text-field>

              <v-textarea
                v-model="form.message"
                dense
                outlined
                name="input-7-4"
                label="Message"
                :rules="[rules.required]"
              ></v-textarea>

              <v-btn
                :loading="loadingForm"
                :disabled="loadingForm || !isFormValid || sentMessage"
                type="submit"
                class="white--text"
                block
                depressed
                color="green darken-4 mt-2"
                >Submit</v-btn
              >
            </v-sheet>
          </div>
        </v-form>
      </div>
    </v-container>
  </section>
</template>

<script scoped>
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default {
  name: "AboutSection",

  data: () => ({
    loadingForm: false,
    isFormValid: false,
    form: {
      message: "",
      reply_to: "",
      name: "",
      email: "",
    },
    sentMessage: false,

    rules: {
      required: (value) => !!value || "Required Field",
      email: (value) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(value) || "Invalid Email";
      },
    },
  }),

  watch: {
    sentMessage() {
      if (this.sentMessage) {
        setTimeout(() => {
          this.sentMessage = false;
        }, 180000);
      }
    },
  },

  methods: {
    validateForm() {
      this.loadingForm = true;
      emailjs
        .send(
          process.env.VUE_APP_SERVICE_ID,
          process.env.VUE_APP_TEMPLATE_ID,
          this.form,
          process.env.VUE_APP_USER_ID
        )
        .then(
          (response) => {
            console.log(response.status);
            this.loadingForm = false;
            this.cleanForm();
            Swal.fire({
              position: this.$vuetify.breakpoint.xs ? "bottom" : "bottom-end",
              icon: "success",
              text: "Message sent successfully!",
              showConfirmButton: false,
              timer: 1500,
              backdrop: false,
              customClass: {
                popup: "containerSweetAlert",
                icon: "iconSweetAlert",
                htmlContainer: "htmlContainerSweetAlert",
              },
            });
            this.sentMessage = true;
          },
          (error) => {
            console.log("FAILED...", error);
            this.loadingForm = false;
            //Error! try again later

            Swal.fire({
              position: this.$vuetify.breakpoint.xs ? "bottom" : "bttom-end",
              icon: "error",
              text: "Error! try again later",
              showConfirmButton: false,
              timer: 2500,
              backdrop: false,
              customClass: {
                popup: "containerSweetAlert",
                icon: "iconSweetAlert",
                htmlContainer: "htmlContainerSweetAlert",
              },
            });
          }
        );
    },

    cleanForm() {
      this.form.message = "";
      this.form.reply_to = "";
      this.form.name = "";
      this.form.email = "";
    },
  },
};
</script>

<style>
.section-title-contact {
  font-size: 128px;
  font-weight: bold;
  color: #212121;
  margin-bottom: 0px;
}

.section-title-contact-responsive {
  font-size: 4.8rem;
  font-weight: bold;
  color: #212121;
  margin-bottom: 0px;
}

.img-face-contact {
  transform: rotate(10deg);
}

.containerSweetAlert {
  display: flex !important;
  align-items: center;
  padding-bottom: 0;
  width: fit-content;
}

.iconSweetAlert {
  margin: 8px;
}

.htmlContainerSweetAlert {
  padding: 0px 16px;
  font-family: "Roboto";
}

div:where(.swal2-icon).swal2-success
  [class^="swal2-success-circular-line"][class$="left"] {
  display: none;
}
</style>
