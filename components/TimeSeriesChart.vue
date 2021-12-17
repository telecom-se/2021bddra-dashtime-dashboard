<template>
  <v-row>
    <v-col>
      <v-card class="pa-3">
        <ApexChart :series="series" :options="chartOptions" height="300"></ApexChart>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TimeSeriesChart',
  props: {
    title: {
      type: String,
      default: '',
    },
    seriesTitle: {
      type: String,
      default: '',
    },
    series: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'area',
          stacked: false,
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            autoSelected: 'zoom',
          },
        },
        stroke: {
          show: true,
          curve: 'smooth',
          width: 2,
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        title: {
          text: this.seriesTitle,
          align: 'left',
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          labels: {
            formatter(val) {
              return (val / 1000000).toFixed(0)
            },
          },
          title: {
            text: 'Price',
          },
        },
        xaxis: {
          type: 'datetime',
        },
        tooltip: {
          shared: false,
          y: {
            formatter(val) {
              return (val / 1000000).toFixed(0)
            },
          },
        },
      },
    }
  },
}
</script>

<style scoped></style>
