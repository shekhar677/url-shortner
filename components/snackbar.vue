<template>
  <v-snackbar :timeout="timeout" v-model="show"
    >{{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn color="primary" text v-bind="attrs" @click="show = false">
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
    timeout: 3500
  }),
  methods: {
    open(message) {
      this.show = true;
      this.message = message;
    }
  }
};
</script>
