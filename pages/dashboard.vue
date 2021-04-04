<template>
  <div>

  <v-card class="mb-10 pl-5">
    <v-card-title>

      Welcome,<strong class="g">{{this.$auth.user.name}}</strong>, Here is a summary of all your accounts.
    </v-card-title>
    <v-card-subtitle>
      Click on the notification bell to find out if there are any new messages.

    </v-card-subtitle>
    <v-row justify="end" class="pr-5 pb-2">
    <v-card-actions>
      <v-btn @click="logout">
        logout
      </v-btn>
    </v-card-actions>
    </v-row>
  </v-card>
    <v-card>
<v-row>
  <v-col
    class="pl-8 pb-3"
    v-for="(item,i) in items "
    :key="i"
    cols="12"
    sm="6"
    md="4"
    lg="3"
  >
  <v-card

elevation="16"
shaped
  >
    <v-card-title class="">
      <div class="pr-5">{{item.title}}:</div>
      <strong class="f" :class="item.color">{{item.amount}}.00 KSH</strong>
      <v-icon class="pl-3">{{item.icon}}</v-icon>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-subtitle class="f">

      <i>{{item.desc}}</i>
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-row justify="end" class="pt-2 pr-4">
    <v-card-actions>
      <v-btn >MAKE A PAYMENT
      </v-btn>
    </v-card-actions>
    </v-row>
  </v-card>
  </v-col>
</v-row>

    </v-card>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {mapActions} from "vuex";


export default {
  name: "dashboard",
  props:['isVisible','notificationType'],
  data(){
    return{

      items:[
        {title:'Bank Account',amount:0,color:'green--text text--lighten-1',
          desc:'Represents your bank account balance as of today. If you wish to make a deposit' +
            'and increase the balance click on make payment ',icon:'mdi-bank'},
        {title:'Cash Account',amount:0,color: 'green--text text--lighten-1',desc: '' +
            'Represents cash balance that was handed in to the treasurer. If you wish to make a withdrawal.' +
            'Contact the treasurer',icon: 'mdi-cash-check'},
        {title:'Cooperative Loan',amount:0,color: 'red--text text--lighten-1',desc: 'Represents Loan' +
            'taken from Co-operative Bank Of Kenya',icon:'mdi-chart-box-outline'},
        {title:'Emergency Loan',amount:0,color:'red--text text--lighten-1',desc: 'Represents' +
            'cash that was taken during an emergency',icon: 'mdi-wallet-outline'},
        {title:'Welfare',amount:0,color: 'red--text text--lighten-1',desc: 'represents your current shares' +
            '',icon: 'mdi-finance'},
        {title:'WETF',amount:0,color: 'red--text text--lighten-1',desc: 'represents the women enterorise fund' +
            'that is given to women who need loans',icon:'mdi-bank-transfer-in'}
      ]
    }
  },

computed:{
    ...mapGetters({
      myBalances:'apiservice/GET_BALANCES'
    })

},

  methods:{

    logout(){
      this.$auth.logout()
    },
    ...mapActions({
      getBalances:'apiservice/getBalances'
    }),



  },
  mounted(){

    this.getBalances().then(()=>{
      this.items[0].amount=this.myBalances.bank
      this.items[1].amount=this.myBalances.cash
      this.items[2].amount=this.myBalances.women
      this.items[3].amount=this.myBalances.welfare
      this.items[4].amount=this.myBalances.emergency
      this.items[5].amount=this.myBalances.cop



    });

  }






}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

.f{

  font-family: 'Roboto', sans-serif;
}

.g{

  font-size: large;
}

</style>
