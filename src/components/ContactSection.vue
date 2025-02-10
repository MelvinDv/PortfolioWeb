<template>
  <section id="contact">
    <v-container>
      <p
        data-aos="fade-up"
        :class="
          $vuetify.breakpoint.smAndDown
            ? 'section-title-contact-responsive'
            : 'section-title-contact'
        "
      >
        {{ $t("contact").toUpperCase() }}
      </p>

      <v-row no-gutters>
        <v-col v-if="!$vuetify.breakpoint.smAndDown" cols="3"></v-col>
        <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 6">
          <v-form @submit.prevent="validateForm" v-model="isFormValid">
            <div class="d-flex jusfify-center align-center flex-column">
              <v-sheet
                class="pa-4"
                :width="$vuetify.breakpoint.smAndDown ? '100%' : '500px'"
              >
                <v-text-field
                  v-model="form.name"
                  dense
                  :label="$t('name')"
                  :placeholder="$t('write-name')"
                  outlined
                  :rules="[rules.required]"
                ></v-text-field>

                <v-text-field
                  v-model="form.email"
                  dense
                  :label="$t('email')"
                  placeholder="example@gmail.com"
                  outlined
                  :rules="[rules.required, rules.email]"
                ></v-text-field>

                <v-textarea
                  v-model="form.message"
                  dense
                  outlined
                  name="input-7-4"
                  :label="$t('message')"
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
                  >{{ $t("send") }}</v-btn
                >
              </v-sheet>
            </div>
          </v-form>
        </v-col>
        <v-col v-if="!$vuetify.breakpoint.smAndDown" cols="3">
          <v-img
            data-aos="zoom-in"
            contain
            class="img-face-contact"
            height="250"
            src="../assets/icons/face_3.webp"
          >
            <div>
              <p class="mb-0">{{ $t("got-project") }}</p>
              <p class="mb-0">{{ $t("lets-talk") }}</p>
            </div>
          </v-img>
        </v-col>
      </v-row>
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

    rules: {},
  }),

  created() {
    this.rules = {
      required: (value) => !!value || this.$t("require"),
      email: (value) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(value) || this.$t("invalid-email");
      },
    };
  },

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
              text: this.$t("msg-sent"),
              showConfirmButton: false,
              timer: 2500,
              backdrop: false,
              customClass: {
                popup: "containerSweetAlert",
                icon: "iconSweetAlert",
                htmlContainer: "htmlContainerSweetAlert",
              },
            });
            this.sentMessage = true;
          },
          () => {
            this.loadingForm = false;

            Swal.fire({
              position: this.$vuetify.breakpoint.xs ? "bottom" : "bttom-end",
              icon: "error",
              text: this.$t("msg-error"),
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
  font-size: 3.5rem;
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
