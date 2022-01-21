<template>
  <v-app>

    <v-snackbar v-model="snackbar" top rounded="lg" color="error darken-1">
      <div class="d-flex align-center">
        <v-icon left>mdi-alert-circle-outline</v-icon>
        <span>{{ error }}</span>
      </div>
    </v-snackbar>

    <v-app-bar app color="#000130" flat height="70">
      <v-container class="py-0 fill-height">
        <nuxt-link to="/" style="text-decoration: none; color: inherit">
          <div class="d-flex align-end">
            <v-img
              src="/dashtime-logo.png"
              width="50"
              contain
            />
            <span class="ml-n1 text-h4 font-weight-bold white--text" style="z-index: 1">ashtime</span>
          </div>
        </nuxt-link>

        <v-spacer></v-spacer>

        <v-menu offset-y left>
          <template #activator="{ on, attrs }">
            <v-avatar
              color="shade"
              size="40"
              class="ml-4 my-1"
              v-bind="attrs"
              v-on="on"
            >
            </v-avatar>
          </template>
          <v-card width="180">
            <v-card-title class="pa-0 primary lighten-1">
              <v-avatar
                color="#000130"
                size="64"
                class="mt-3 mx-auto mb-n5"
                style="border: solid 2px white"
              >
                <v-img height="48" contain src="/dashtime-logo.png"></v-img>
              </v-avatar>
            </v-card-title>
            <div class="mt-6 px-3 pb-3 text-center d-flex flex-column">
              <span class="text-h6 font-weight-medium">
                Dashtime
              </span>
              <span class="text-caption text--secondary">
                © All right reserved
              </span>
            </div>
          </v-card>
        </v-menu>
      </v-container>
    </v-app-bar>

    <v-main class="shade">

      <v-btn v-if="$route.name !== 'home-page'" :large="$vuetify.breakpoint.smAndUp" depressed color="transparent" style="position: fixed; top: 70px; left: 0px" @click="$router.go(-1)">
        <v-icon large>mdi-chevron-left</v-icon>
      </v-btn>

      <v-container>

        <v-row justify="center">
          <v-col cols="12" sm="11" lg="10">
            <Nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer class="shade" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { Settings } from "luxon";

export default {
  data() {
    return {
      snackbar: false,
      error: '',
    }
  },
  beforeCreate() {
    // Define DateTime default locale
    Settings.defaultLocale = 'en'
    this.$nuxt.$on('show-error', (e) => {
      if (typeof e === 'object') this.error = e.response?.data?.message || 'An error occurred'
      else if (typeof e === 'string') this.error = e
      else this.error = 'An error occurred'
      this.snackbar = true
      // setTimeout(() => (this.snackbar = false), 5e3)
    })
  },
  beforeDestroy() {
    this.$nuxt.$off('show-error')
  },
  methods: {},
}
</script>
