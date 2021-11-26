<template>
  <v-container>
    <v-card-title class='px-0' v-text='title'></v-card-title>
    <v-card>
      <v-card-text>
        <ApexChart  :series='series' :options='chartOptions'></ApexChart>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'TimeSeriesChart',
  props: {
    title: {
      type: String,
      default: ''
    },
    seriesTitle: {
      type: String,
      default: ''
    },
    series: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'area',
          stacked: false,
          height: 500,
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: 'zoom'
          }
        },
        stroke: {
          show: true,
          curve: 'smooth',
          width: 2,
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0
        },
        title: {
          text: this.seriesTitle,
          align: 'left'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          }
        },
        yaxis: {
          labels: {
            formatter(val) {
              return (val / 1000000).toFixed(0)
            }
          },
          title: {
            text: 'Price'
          }
        },
        xaxis: {
          type: 'datetime'
        },
        tooltip: {
          shared: false,
          y: {
            formatter(val) {
              return (val / 1000000).toFixed(0)
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
