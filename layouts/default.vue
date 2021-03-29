<template>
  <v-app >

    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      :mini-variant="miniVariant"
      app
      fixed
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          v-if="item.show"
          :key="i"
          :to="item.to"
          exact
          router
        >

          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>

            <v-list-item-title v-text="item.title"/>

          </v-list-item-content>

        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      app
      fixed
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>


      <!--        <v-icon>mdi-application</v-icon>-->


      <v-toolbar-title v-text="title"/>
      <v-spacer/>

      <v-menu
        :close-on-content-click="false"
        bottom
        origin="center center"
        rounded="true"
        transition="scale-transition"
      >

        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs"
                 v-on="on"
                 icon
          >
            <v-badge color="green" dot>
              <v-icon>mdi-bell-ring-outline</v-icon>
            </v-badge>
          </v-btn>

        </template>
        <v-list class="overflow-y-auto" max-height="400">
          <div v-if="notifications.length===0">
            <v-list-item class="overflow-y-auto">
              <v-list-item-content>
                <v-list-item-title>
                  <i>You have no new notifications</i>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </div>
          <div v-else>
            <v-list-item
              v-for="(item, i) in notifications"
              :key="i"
              class="overflow-y-auto"
            >
              <v-list-item-content>


                <v-list-item-title>Loan Approvals Notification</v-list-item-title>

                <v-list-item-subtitle>

                  <b>{{ item.members }}</b> <i>request for</i> <b>{{ item.loans }} <i>loan</i></b>
                  <i> was approved</i> {{ item.date }}
                </v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>
          </div>
        </v-list>
        <v-card>
          <v-card-actions>
            <v-spacer></v-spacer>
            <div v-if="notifications.length>0">
              <v-btn
                text
                @click="clearNotifications"

              >
                MARK ALL AS READ
              </v-btn>
            </div>
            <v-btn
              text
              @click="refreshNotifications"
            >
              REFRESH
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-menu>
      <v-menu
        :close-on-content-click="false"
        bottom
        origin="center center"
        rounded="true"
        transition="scale-transition"
      >

        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs"
                 v-on="on"
                 icon
          >
            <v-badge color="green" dot>
              <v-icon>mdi-google-circles-extended</v-icon>
            </v-badge>
          </v-btn>

        </template>
        <v-list class="overflow-y-auto" max-height="400">
          <div v-if="liveUpdates.length===0">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <i>No Recent Activity has occured</i>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </div>
          <div v-else>
            <v-list-item
              v-for="(item, i) in liveUpdates"
              :key="i"
            >
              <v-list-item-content>


                <v-list-item-title>Loan Approvals</v-list-item-title>

                <v-list-item-subtitle>

                  <b>{{ item.members }}</b> request for <b>{{ item.loans }}</b>
                  was approved
                </v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>
          </div>
        </v-list>
      </v-menu>
      <v-menu
        :close-on-content-click="false"
        bottom
        origin="center center"
        rounded="true"
        transition="scale-transition"
      >

        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs"
                 v-on="on"
                 icon
          >
            <v-badge color="green" dot>
              <v-icon>mdi-android-messages</v-icon>
            </v-badge>
          </v-btn>

        </template>
        <v-list class="overflow-y-auto" max-height="400">
          <div v-if="messageNotification.length===0">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <i>You have no new messages</i>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </div>
          <div v-else>
            <v-list-item
              v-for="(item, i) in messageNotification"
              :key="i"
            >
              <v-list-item-content>


                <v-list-item-title>Message Notifications</v-list-item-title>

                <v-list-item-subtitle>

                  <b> You have a new message from {{ item.from}}</b>

                </v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>
          </div>
        </v-list>
      </v-menu>


    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>

    <v-footer
      :absolute="!fixed"
      app
      height="80"
    >
      <v-row>
        <v-col>
          &copy; {{ new Date().getFullYear() }}
          DALA WOMEN CHAMA MANAGEMENT SYSTEM


        </v-col>
        <v-col>

          <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <a href="https://github.com/melvin78"> Developed by Melvin</a>
        </v-col>
      </v-row>

    </v-footer>
  </v-app>
</template>

<script>
import NotificationMenuPopup from "@/components/notification-menu-popup";
import {mapActions} from "vuex";
import {mapGetters} from "vuex";


export default {
  components: {NotificationMenuPopup},
  data() {
    return {
      clipped: false,
      drawer: false,
      updatedLoans: [],
      fixed: false,
      showMenu: false,
      liveUpdates: [],
      notifications: [],
      roleShow: true,
      chatHeadid: null,
      messageNotification: [],
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/dashboard',
          show: true,
        },

        {
          icon: 'mdi-chart-bubble',
          title: 'Start A Meeting',
          to: '/meeting',
          show: false,
        },


        {
          icon: 'mdi-chart-bubble',
          title: 'Borrow A Loan',
          to: '/loan',
          show: true,
        },

        {
          icon: 'mdi-chart-bubble',
          title: 'Approve Loans',
          to: '/dataloan',
          show: false
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Members Info',
          to: '/members',
          show: true
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Mark Attendance',
          to: '/absentees',
          show: false,
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'DALA WOMEN GROUP'
    }
  },
  computed: {
    ...mapGetters({
      getSocketdata: 'websocket/GET_LOANS_APPROVED',
      myNotifications: 'apiservice/GET_NOTIFICATIONS',
      chattingWith: 'chat/GET_CHATTING_WITH',
      recentMessages: 'chat/GET_CHATS',
    }),



  },


  methods: {
    ...mapActions({
      startSocket: 'websocket/loansapprovedSocket',
      fetchNotifications: 'apiservice/getNotifications',
      markRead: 'apiservice/markRead',
      sendNewmessagenotification:'chat/setChatsocket'

    }),


    removeNotification(value) {
      this.notifications.splice(value, 1)
    },
    clearNotifications() {
      this.notifications.splice(0, this.notifications.length)
      this.markRead();
    },
    refreshNotifications() {
      this.$router.go(this.$router.currentRoute)
    }
  },


  mounted() {
    this.$vuetify.theme.dark= true
    this.chatHead = this.chattingWith
    this.$echo.private('first')
      .listen('.LoansApproved', (e) => {
        this.startSocket(e)
        this.liveUpdates = this.getSocketdata;
      });


    if (this.$auth.user.role.indexOf('Treasurer') > 0) {
      this.items.forEach(p => p.show = true);
    }
    // this.$echo.private(`message-notification.${this.$auth.user.id}`)
    //   .listen('.Chat', (e) => {
    //
    //     const chat = {
    //       message: e.message,
    //       sent: e.sendername,
    //
    //     }
    //
    //   console.log(e)
    //   });


    this.$echo.private(`chat-channel.${this.$auth.user.id}`)
      .listen('.Chat', (e) => {

        const chat = {
          from: e.from,
        }
console.log(e)
        console.log(chat)
        this.sendNewmessagenotification(chat)
        this.messageNotification=this.recentMessages

      });



  },

  created() {
    this.fetchNotifications().then(() => {
      this.notifications = this.myNotifications
    })
  }
}
</script>
<style>
#app {
  font-family: 'Crete Round', serif;
}
</style>
