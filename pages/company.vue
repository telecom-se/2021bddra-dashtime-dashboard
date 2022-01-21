<template>
  <v-container>
    <v-row>
      <v-col>
      <v-list-item two-line class="px-0">
        <v-list-item-avatar size="64" color="white" rounded="lg" class="elevation-4">
          <v-img :src="`https://logo.clearbit.com/${company.name}.com`" height="44" contain></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-overline">{{ company.symbol }}</v-list-item-title>
          <v-list-item-subtitle class="text-h5 font-weight-bold black--text">
            {{ company.description }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <client-only>
          <TimeSeriesChart
            :series="series"
          ></TimeSeriesChart>
        </client-only>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>

export default {
  async asyncData({ $axios, params, error }) {
    try {
      const company = await $axios.get(`/api/companies/${params.symbol}`)
      const stocks = await $axios.get(`/api/companies/${params.symbol}/stocks`)

      const series = [{
        name: company.data.description,
        data: stocks.data.map((s) => ({ x: s.timestamp, y: s.value }))
      }]

      return { company: company.data, stocks: stocks.data, series }
    } catch (e) {
      return error({ statusCode: 500, message: 'Internal server error' })
    }
  },
  data() {
    return {
      company: [],
      stocks: [],
      series: []
    }
  },
  methods: {
  },
}
</script>
