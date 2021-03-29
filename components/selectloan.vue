<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="6">
        <v-subheader>
          Custom items
        </v-subheader>
      </v-col>

      <v-col cols="6">
        <v-select
          v-model="select"
          :hint="`${select.desc}`"
          :items="items"
          item-text="loantype"
          v-bind:item-value="value"
          label="Select loan"
          persistent-hint
          return-object
          single-line
        ></v-select>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "selectloan",

  data () {
    return {
      select: { loantype: 'Co-operative Loan', value: 'coploan' ,desc:'Payable after 3 months'},
      items: [
        { loantype: 'Co-operative Loan', value: 'coploan' ,desc:'Payable after 3 months'},
        { loantype: 'Welfare Loan', value: 'welfare',desc: 'payable after 2 month'},
        { loantype: 'Women Enterprise Fund', value: 'wef',desc:  'payable after a month'},
        { loantype: 'Emergency Loan', value: 'emergency' ,desc: 'no penalty issued'},

      ],
    }
  },

}
</script>

<style scoped>

</style>
