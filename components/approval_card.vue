<template>
<div>
  <v-container>
    <v-row align="start">
      <v-col cols="12" v-for="(value) in loanDetails" >
  <v-card
    class="mx-auto"
    max-width="800"
  >

    <v-card-title>
{{value.amount}}
    </v-card-title>

    <v-card-subtitle>

    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >

      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-if="show">
        <v-divider></v-divider>

        <v-card-text>

        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import {mapGetters} from "vuex";
import {mapActions} from "vuex";

export default {
  name: "approval_card",
  props:[
    'loanDetails'
  ],

  data() {

    return {

      show: false
    }
  }}




</script>

<style scoped>

</style>
