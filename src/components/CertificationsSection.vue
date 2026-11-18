<template>
  <section id="certifications">
    <v-container>
      <p
        data-aos="fade-up"
        data-aos-duration="1500"
        :class="
          $vuetify.breakpoint.xs
            ? 'section-title-certifications-responsive text-center'
            : 'section-title-certifications'
        "
      >
        {{ $t("certifications").toUpperCase() }}
      </p>

      <div class="cert-grid">
        <v-card
          v-for="cert in sortedCertifications"
          :key="cert.id"
          data-aos="fade-up"
          outlined
          class="cert-card elevation-0"
          :href="cert.url || undefined"
          :target="cert.url ? '_blank' : undefined"
          :rel="cert.url ? 'noopener noreferrer' : undefined"
          :ripple="false"
        >
          <div class="cert-logo" :style="{ backgroundColor: cert.color }">
            <v-img
              v-if="cert.logo"
              :src="cert.logo"
              :alt="cert.issuer"
              contain
              height="34"
              max-width="34"
            ></v-img>
            <v-icon v-else color="white" size="24">{{ cert.icon }}</v-icon>
          </div>

          <p class="cert-name grey--text text--darken-4 font-weight-bold">
            {{ cert.name }}
          </p>

          <p class="cert-meta grey--text text--darken-1">
            {{ cert.issuer }} · {{ cert.platform }} ·
            {{ formatDate(cert.date) }}
          </p>

          <div class="cert-skills">
            <v-chip
              v-for="(skill, i) in cert.skills"
              :key="i"
              x-small
              class="mr-1 mb-1"
              color="#E8F5E9"
              text-color="#1B5E20"
              >{{ skill }}</v-chip
            >
          </div>

          <span v-if="cert.url" class="cert-link green--text text--darken-3">
            {{ $t("view-credential") }}
            <v-icon size="14" color="#1B5E20">mdi-arrow-right</v-icon>
          </span>
        </v-card>
      </div>
    </v-container>
  </section>
</template>

<script>
// Para agregar el logo de un emisor:
// 1. Guarda el .webp en src/assets/images/certifications/
// 2. Impórtalo aquí arriba y asígnalo al campo `logo` de la certificación.
// Si `logo` es null se usa el `icon` (mdi) sobre el cuadro de color.
// Ojo: la version de MDI que sirve el CDN (7.x) ya no trae logos de marca
// como mdi-meta, por eso el icono es del tema del curso y el color es el
// del emisor. Un logo real va por el campo `logo`.

export default {
  name: "CertificationsSection",

  data: () => ({
    certifications: [
      {
        id: 1,
        name: "Programming with JavaScript",
        issuer: "Meta",
        platform: "Coursera",
        date: "2026-11-18",
        logo: null,
        icon: "mdi-language-javascript",
        color: "#0081FB",
        skills: ["JavaScript", "ES6", "Testing"],
        url: "https://coursera.org/verify/84I5W9O9HYY5",
      },
      {
        id: 2,
        name: "Introduction to Front-End Development",
        issuer: "Meta",
        platform: "Coursera",
        date: "2026-10-14",
        logo: null,
        icon: "mdi-language-html5",
        color: "#0081FB",
        skills: ["HTML", "CSS", "Bootstrap"],
        url: "https://coursera.org/verify/21AK66GWQ9E3",
      },
    ],
  }),

  computed: {
    // Mas reciente primero. Se ordena por fecha y no por año porque
    // varias certificaciones pueden caer en el mismo año.
    sortedCertifications() {
      return [...this.certifications].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    },
  },

  methods: {
    formatDate(isoDate) {
      const date = new Date(`${isoDate}T00:00:00`);
      const locale = this.$i18n.locale === "es" ? "es-MX" : "en-US";
      const label = date.toLocaleDateString(locale, {
        month: "short",
        year: "numeric",
      });
      return label.charAt(0).toUpperCase() + label.slice(1);
    },
  },
};
</script>

<style scoped>
.section-title-certifications {
  font-size: clamp(3rem, 9vw, 7.5rem);
  font-weight: bold;
  color: #212121;
  margin-bottom: 0px;
}

.section-title-certifications-responsive {
  font-size: clamp(2rem, 11vw, 3.5rem);
  font-weight: bold;
  color: #212121;
  margin-bottom: 0px;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}

.cert-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  border-radius: 16px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

/* Clase duplicada a proposito: necesita mas especificidad que la regla
   [data-aos^=fade][data-aos^=fade].aos-animate de AOS, que fija el transform. */
.cert-card.cert-card:hover {
  transform: translateY(-4px);
  border-color: #a5d6a7;
  box-shadow: 0 8px 20px rgba(46, 125, 50, 0.18) !important;
}

.cert-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  margin-bottom: 14px;
  border-radius: 14px;
}

.cert-name {
  font-size: 1.05rem;
  line-height: 1.3;
  margin-bottom: 4px;
}

.cert-meta {
  font-size: 0.85rem;
  margin-bottom: 10px;
}

.cert-skills {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.cert-link {
  margin-top: auto;
  font-size: 0.85rem;
  font-weight: 700;
}

@media (prefers-reduced-motion: reduce) {
  .cert-card {
    transition: none;
  }
  .cert-card.cert-card:hover {
    transform: none;
  }
}
</style>
