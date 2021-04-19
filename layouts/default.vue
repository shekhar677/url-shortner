<template>
  <v-app>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: "Vuetify.js"
    };
  },
  mounted() {
    if (process.client) {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      if (localStorage.getItem("theme")) {
        // theme config exists
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme == "dark") {
          this.$vuetify.theme.dark = true;
        } else if (currentTheme == "light") {
          this.$vuetify.theme.dark = false;
        }
      } else {
        // check device preference
        if (prefersDarkScheme.matches) {
          this.$vuetify.theme.dark = true;
        } else {
          this.$vuetify.theme.dark = false;
        }
      }
    }
  }
};
</script>
