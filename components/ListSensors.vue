<template>
  <v-row>
    <v-col v-for="(s, i) in sensors" :key="i" cols="12" sm="6" md="6" lg="4">
      <v-hover>
        <template #default="{ hover }">
          <v-card
            :elevation="hover ? 24 : 3"
            class="transition-swing select-none"
            @click="openSensor(s)"
          >
            <v-list-item two-line>
              <v-list-item-avatar size="50" tile>
                <v-avatar :color="s.color" rounded="lg"></v-avatar>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-overline">{{ s.country }}</v-list-item-title>
                <v-list-item-subtitle class="text-h6 font-weight-bold black--text">
                  {{ s.city }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-text class="pt-0">{{ s.description }}</v-card-text>
            <v-divider></v-divider>

            <v-card-actions class="pa-4">
              <div class="d-flex grow align-center">
                <span class="text-body-2">{{ `${s.value}%` }}</span>
                <v-progress-linear
                  class="mx-4"
                  :color="s.color"
                  :value="s.value"
                  rounded
                  height="6"
                ></v-progress-linear>
              </div>

              <v-avatar size="30">
                <v-img :src="getFlag(s.country_code)"></v-img>
              </v-avatar>
            </v-card-actions>
          </v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ListSensors',
  data() {
    return {
      sensors: [
        {
          color: '#1269C7',
          city: 'Athènes',
          country: 'Grèce',
          country_code: 'gr',
          description: 'Alexandre Anastassiades',
          value: 68,
        },
        {
          color: '#FECC02',
          city: 'Stockholm',
          country: 'Suède',
          country_code: 'se',
          description: 'Florian Zdrada',
          value: 86,
        },
        {
          color: '#E30A17',
          city: 'Istanbul',
          country: 'Turquie',
          country_code: 'tr',
          description: 'Kamil Caglar',
          value: 56,
        },
        {
          color: '#009A44',
          city: 'Nairobi',
          country: 'Kenya',
          country_code: 'ke',
          description: 'Bienvenue au Kenya',
          value: 8,
        },
      ],
    }
  },
  methods: {
    getFlag(country) {
      return `https://hatscripts.github.io/circle-flags/flags/${country || 'fr'}.svg`
    },
    openSensor(s) {
      console.log(s)
    },
  },
}
</script>

<style scoped>
.select-none {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}
</style>
