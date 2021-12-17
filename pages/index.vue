<template>
  <v-container>
    <Title>Your sensors</Title>

    <ListSensors></ListSensors>

    <v-row>
      <v-col>
        <client-only>
          <time-series-chart
            :series="series"
            title="Time Series"
            series-title="wip"
          ></time-series-chart>
        </client-only>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  data() {
    return {
      series: this.generateSeries(),
    }
  },
  methods: {
    generateSeries() {
      const data = []
      const from = DateTime.now()
      const to = DateTime.now().plus({ minutes: 60 })
      let t = from
      let _seed = 42
      Math.random = function () {
        _seed = (_seed * 16807) % 2147483647
        return (_seed - 1) / 2147483646
      }
      const max = 100
      const min = 0
      while (t < to) {
        data.push({
          x: t,
          y: Math.floor(Math.random() * (max - min + 1)) + min,
        })
        t = t.plus({ seconds: 30 })
      }
      return [
        {
          data,
        },
      ]
    },
  },
}
</script>
