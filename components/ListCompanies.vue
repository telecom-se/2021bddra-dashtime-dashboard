<template>
  <v-row>
    <v-col v-for="(company, i) in companies" :key="i" cols="12" sm="6" md="6" lg="4">
      <v-hover>
        <template #default="{ hover }">
          <v-card
            :elevation="hover ? 12 : 3"
            class="transition-swing select-none"
            :to="{ path: `companies/${company.symbol}/stocks` }"
          >
            <v-list-item two-line>
              <v-list-item-avatar size="50" color="white" rounded="lg">
                  <v-img :src="`https://logo.clearbit.com/${company.name}.com`" contain></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-overline">{{ company.symbol }}</v-list-item-title>
                <v-list-item-subtitle class="text-h6 font-weight-bold black--text">
                  {{ company.description }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-text class="pt-0 text-caption">{{ `Currency in ${company.currency}` }}</v-card-text>
          </v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ListCompanies',
  props: {
    companies: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {    }
  },
  methods: {
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
