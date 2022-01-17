<template>
  <v-app>

    <v-app-bar app color="#000130" flat>
      <v-container class="py-0 fill-height">
        <nuxt-link to="/" style="text-decoration: none; color: inherit">
          <div class="d-flex align-end">
            <v-img
              src="/dashtime-logo.png"
              :width="$vuetify.breakpoint.smAndDown ? 40 : 40"
              contain
            />
            <span class="ml-3 text-h6 font-weight-bold white--text">Dashtime</span>
          </div>
        </nuxt-link>

        <v-spacer></v-spacer>

        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-avatar
              color="shade"
              size="32"
              class="ml-4 my-1"
              v-bind="attrs"
              v-on="on"
            >
<!--              <span class="white&#45;&#45;text text-body-2">{{}}</span>-->
            </v-avatar>
          </template>
          <v-card width="180">
            <v-card-title class="pa-0 shade">
              <v-avatar
                color="#000130"
                size="40"
                class="mt-3 mx-auto mb-n5"
                style="border: solid 2px white"
              >
<!--                <span class="white&#45;&#45;text text-body-2">{{}}</span>-->
              </v-avatar>
            </v-card-title>
            <div class="mt-6 px-3 pb-3 text-center d-flex flex-column">
              <span class="text-caption font-weight-medium">
                Dashtime
              </span>
              <span class="text--secondary" style="font-size: 10px">
                © All right reserved
              </span>
            </div>
<!--            <v-card-actions class="d-flex justify-center">-->
<!--              <v-btn x-small text color="error" @click="logout">Logout</v-btn>-->
<!--            </v-card-actions>-->
          </v-card>
        </v-menu>
      </v-container>
    </v-app-bar>

    <v-main class="shade">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="11" lg="10">
            <Nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer class="shade" :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
      ],
      title: 'Dashboard',
    }
  },
  methods: {},
}
</script>
