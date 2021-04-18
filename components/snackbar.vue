<template>
  <v-snackbar :timeout="timeout" v-model="show" class="pa-0"
    >{{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="show = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    show: false,
    message: null,
    timeout: 3500,
    options: {
      snackbarColor: "black",
      textColor: "white--text"
    }
  }),
  methods: {
    open(message) {
      this.show = true;
      this.message = message;
    }
  }
};
</script>
