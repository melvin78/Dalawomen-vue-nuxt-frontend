<template>
<v-container>
<v-row justify="center" align-content="center" align="center">

  <h1> CHAMA MANAGEMENT SYSTEM</h1>

   <p>The term chama is the swahili word for a SACCO or union.More info on what a chama is can be found <a href="https://en.wikipedia.org/wiki/Chama_(investment)">here</a>.The system has a laravel backend that acts as an aoi and serves a vue frontend on top of Nuxt js. Laravel
     websockets has also been used for the chats and notifications feature. Mailgun service for sending and receiving emails.

   </p>


</v-row>
  <div class="pt-10">
  <v-row justify="center">
    <h2>Details on parts of the system</h2>
    <v-expansion-panels inset>
      <v-expansion-panel
        v-for="(item,i) in details"
        :key="i"
      >
        <v-expansion-panel-header style="font-size: 20px"><strong>{{item.Title}}</strong></v-expansion-panel-header>
        <v-expansion-panel-content>
       {{item.desc}}
          <v-img
          :src="item.img"
          >

          </v-img>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="pt-4">
      <v-btn x-large elevation="40" @click="logmeIN">
        TRY IT OUT!
      </v-btn>
    </div>

  </v-row>
  </div>
</v-container>
</template>

<script>
export default {
  name: "dalapage",
  layout:'dalalayout',
  auth:false,
  methods:{
    logmeIN() {
      this.$router.push('/login');
    },
  },

  data(){
    return{
      details:[
        {Title:'Dashboard', desc:'Displays all balances from all accounts.One can click on make a payment to either clear a loan or' +
            'increase the balance of one of their accounts. Accessible to everyone',img:'/descriptions/dashboard.PNG'},
        {Title:'Start A Meeting', desc:'Only accessible to members who have the roles of Administrator and Treasurer.If you click ' +
            'on it you will be directed to an authorization page. This page contains the name of the member who is the' +
            'host of this month. Before a meeting is initiated , an agenda of the meeting has to be defined ',img: '/descriptions/meeting.png' },
        {Title: 'Borrow A Loan',desc: 'Displays details on how to borrow loans. When borrowing a loan from the given accounts ensure' +
            'that you borrow within the limits specified. You will a notification via email on whether your loan request was successful ' +
            'Accessible by everyone.',img: '/descriptions/loanrequest.PNG'},
        {Title: 'Approve Loans',desc: 'Displays details of members who had requested for loans. Here the administrator or the treasure' +
            'can search for members based on their loan history and click on approve loan. After which a notification will be sent to all members' +
            'that a loan has been approves. Only Accesible to Treasurer and Administrators',img:'/descriptions/approveLoan.png'},
        {Title: 'Members Info',desc: 'Displays a list of all members in the system,their name,roles email and status.You can' +
            'search for a member and send a message.All messages sent are instant, with help of pusher and laravel echo.',img: '/descriptions/members.PNG'},
        {Title: 'Mark Attendance',desc: 'Accessible to only the secretary who will mark members who are present in a mmeeting',img: '/descriptions/attendance.PNG'}

        ]
    }
  }
}
</script>

<style scoped>

</style>
