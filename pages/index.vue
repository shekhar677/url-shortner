<template>
  <v-row justify="center" align="center">
    <snackbar ref="snackbar" />
    <v-col
      cols="12"
      sm="8"
      md="6"
      class="min-h-screen d-flex justify-center align-center"
    >
      <v-col>
        <v-text-field
          :loading="loading"
          hide-details
          label="Link"
          placeholder="enter a link to make it tiny"
          v-model="url"
        ></v-text-field>
        <v-checkbox
          @change="shortUrl"
          v-model="short"
          label="Shorten URL"
        ></v-checkbox>
        <v-col class="d-flex justify-end">
          <v-btn depressed @click="url = ''">Cancel</v-btn>
          <v-btn @click="copyToClipboard" class="ml-2" color="primary" outlined
            >Copy</v-btn
          >
        </v-col>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      url: undefined,
      short: false,
      loading: false
    };
  },
  methods: {
    copyToClipboard() {
      if (this.url) {
        const text = this.url;
        if (process.client) {
          var dummy = document.createElement("textarea");
          document.body.appendChild(dummy);
          dummy.value = text;
          dummy.select();
          document.execCommand("copy");
          document.body.removeChild(dummy);
          this.$refs.snackbar.open("Link copied to clipboard");
        }
      } else {
        this.$refs.snackbar.open("Please enter a link");
      }
    },
    shortUrl() {
      if (this.url && this.short) {
        this.loading = true;
        this.$axios
          .post("/api/short", { url: this.url })
          .then(res => {
            this.url = res.data.short;
            this.loading = false;
          })
          .catch(err => {
            this.$refs.snackbar.open("Failed to short URL");
            this.loading = false;
          });
      } else {
        if (this.short && !this.url) {
          this.$refs.snackbar.open("URL is not provided");
        }
      }
    }
  }
};
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}
</style>
