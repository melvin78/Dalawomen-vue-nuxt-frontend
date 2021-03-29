<template>
  <v-app>

<navigation-section :color="color" :flat="flat" />
    <v-main class="pt-0">
    <home-section/>

    <download-section/>

    <contact-section/>
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <footer-section/>
  </v-app>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import normal from "@/layouts/normal";
import HomeSection from "@/components/landingpage/HomeSection";
import AboutSection from "@/components/landingpage/AboutSection";
import ContactSection from "@/components/landingpage/ContactSection";
import PricingSection from "@/components/landingpage/PricingSection";
import DownloadSection from "@/components/landingpage/DownloadSection";
import NavigationSection from "@/components/landingpage/NavigationSection";
import FooterSection from "@/components/landingpage/FooterSection";

export default {


  auth: false,
  layout: 'homepage',
  components: {
    FooterSection,
    NavigationSection,
    DownloadSection,
    PricingSection,
    ContactSection,
    AboutSection,
    HomeSection,
    Logo,
    VuetifyLogo
  },
  data(){
    return{
      fab: null,
      color: "",
      flat: null,
    }
  },
  methods: {


    onScroll(e) {
      if (process.client){
        if (typeof window === "undefined") return;
        const top = window.pageYOffset || e.target.scrollTop || 0;
        this.fab = top > 60;
      }

    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },
  created() {
    if (process.client){
      const top = window.pageYOffset || 0;
      if (top <= 60) {
        this.color = "transparent";
        this.flat = true;
      }
    }


  },


}
</script>
<style scoped>
.v-main {
  /*background-image: url("/img/bgMain.png");*/
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

</style>
