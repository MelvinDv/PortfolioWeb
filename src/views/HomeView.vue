<template>
  <div>
    <header-portfolio />

    <work-section />

    <about-section />

    <certifications-section />

    <contact-section />

    <footer-section />
  </div>
</template>

<script>
import HeaderPortfolio from "../components/HeaderPortfolio.vue";
import WorkSection from "../components/WorkSection.vue";
import AboutSection from "../components/AboutSection.vue";
import CertificationsSection from "../components/CertificationsSection.vue";
import ContactSection from "../components/ContactSection.vue";
import FooterSection from "../components/FooterSection.vue";

export default {
  name: "HomeView",

  components: {
    HeaderPortfolio,
    WorkSection,
    AboutSection,
    CertificationsSection,
    ContactSection,
    FooterSection,
  },
};
</script>
