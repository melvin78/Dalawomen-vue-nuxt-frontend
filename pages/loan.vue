<template>
  <div>



    <ValidationObserver  ref="form" v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(submitLoan)">

        <v-card
          class="mx-auto"
          elevation="60"
          max-width="700"
        >
          <v-card-title><i>READ THE LOAN CRITERIAS FIRST BEFORE MAKING A LOAN REQUEST</i></v-card-title>
          <v-card-text>

            <div>Enter Amount You wish to borrow</div>

            <ValidationProvider v-slot="{ errors }" name="amount" rules="required|numeric" vid="amount">
              <v-text-field
                v-model="amount"
                :error-messages="errors"
                label="amount"
                name="amount"


              ></v-text-field>
            </ValidationProvider>
            <div>Select Type of Loan</div>
            <v-select
              v-model="select"
              :hint="`${select.desc}`"
              :items="items"
              item-text="loantype"
              item-values="select.values"
              label="Select loan"
              persistent-hint
              return-object
              single-line
            ></v-select>

          </v-card-text>
          <v-card-actions>
            <v-btn
              class="mr-4"


              @click="submitLoan"
            >

              Borrow
            </v-btn>

          </v-card-actions>

        </v-card>

        <v-snackbar
          :value=snackbarConfirmation
          absolute
          color="blue-grey"
          elevation="24"
          right
          top
        >
          Loan request received you will receive an email once its approved.
        </v-snackbar>
        <submitted-overlay
          :button-display="propButtonDisplay"
          :dashboard-button="propDashboard"
          :info-display="propInfodisplay"
          :repeat="propRepeat"
          :value-over="propValue"
        >

        </submitted-overlay>
      </form>
    </ValidationObserver>
    <br>
    <v-row>
      <v-col
        v-for="(item,i) in loanCriteria"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card>
          <v-card-title>
            {{item.Loantype}}
          </v-card-title>
          <v-divider></v-divider>
          <v-card-subtitle>
            {{item.range}}
          </v-card-subtitle>
          <v-card-text>
            {{item.desc}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Selectloan from "@/components/selectloan";
import {mapActions, mapGetters} from 'vuex';
import SubmittedOverlay from "@/components/submitted-overlay";
import {ValidationObserver} from 'vee-validate';
import {ValidationProvider} from 'vee-validate';


export default {
  name: "loan",
  components: {SubmittedOverlay, Selectloan, ValidationProvider, ValidationObserver},

  data() {

    return {
      amount: '',
      loanCriteria:[
        {Loantype:'Co-operative Loan',range:'You can only borrow Between 10000 and 7000',desc:'Payable after 3 months' +
            'after which a penalty will be issued'},
        {Loantype:'WETF',range:'You can only borrow Between 6000 and 25000',desc:'Payable after 4 months' +
            'after which a penalty will be issued'},
        {Loantype:'Welfare Enterpise Loan',range:'You can only borrow Between 5000 and 35000',desc:'Payable after 5 months' +
            'after which a penalty will be issued'},
        {Loantype:'Emergency Loan',range:'You can only borrow Between 5000 and 53000',desc:'Payable after 6 months' +
            'after which a penalty will be issued'}
        ],
      snackbarConfirmation: false,
      propValue: false,
      propInfodisplay: null,
      propDashboard: true,
      propRepeat: true,
      propButtonDisplay: null,
      select: {loantype: 'Co-operative Loan', values: 'coploan', desc: 'Payable after 3 months'},
      items: [
        {loantype: 'Co-operative Loan', values: 'coploan', desc: 'Payable after 3 months'},
        {loantype: 'Welfare Loan', values: 'welfare', desc: 'payable after 2 month'},
        {loantype: 'Women Enterprise Fund', values: 'wef', desc: 'payable after a month'},
        {loantype: 'Emergency Loan', values: 'emergency', desc: 'no penalty issued'},

      ],

    }
  },

  methods: {
    ...mapActions(
      {
        loanme: 'apiservice/loanme',
        loanNotification: 'notification/loanNotification'
      }),


    submitLoan: function () {
      const payload = {
        amount: this.amount,
        loantype_id: this.select.values,
      }

      this.loanme(payload).then(() => {
        this.propValue = true
        this.propInfodisplay = 'Loan request received you will receive a confirmation message'
        this.propButtonDisplay = 'REQUEST ANOTHER LOAN'
      }).catch(() => {
        this.$refs.form.setErrors(this.FormError.errors);
      })


    },


  },
  computed: {


    ...mapGetters({
      FormError: 'errorhandler/getError'
    })

  }
}

</script>

<style scoped>

</style>
