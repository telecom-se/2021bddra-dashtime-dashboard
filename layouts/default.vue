<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app color="#1e293b">
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="#1e293b" flat dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-container v-if="$vuetify.breakpoint.smAndUp" class="py-0 fill-height">
        <span class="font-weight-bold text-h6">Dashtime</span>

        <v-spacer></v-spacer>
        <v-avatar class="mr-5" color="white" size="32"></v-avatar>
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
