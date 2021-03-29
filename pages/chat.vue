<template>
  <div>
    <v-app-bar app color="blue">
      <v-app-bar-nav-icon>
        <v-icon color="white" @click="goBack">mdi-arrow-left</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="white--text"
      >Chatting with {{ chatHead }}

      </v-toolbar-title>
    </v-app-bar>
    <v-container class="fill-height">
      <v-row align="end" class="fill-height pb-14">

        <v-col>
          <div v-for="(item, index) in chat" :key="index"
               :class="['d-flex flex-row align-center my-2', item.from === authId ? 'justify-end': null]">
            <!--            <span v-if="item.from === authId" class="blue&#45;&#45;text mr-3"></span>-->
            <v-avatar :color="item.from === authId ? 'indigo': 'red'" size="36">
              <!--              <span class="white&#45;&#45;text">{{ item.sent }}</span>-->
            </v-avatar>

            <v-card>

              <v-card-text>{{ item.message }}</v-card-text>
              <div class="position-sent">
                <v-card-text class="smalltext">{{ item.sent }}</v-card-text>
              </div>

            </v-card>


            <!--            <span  class="blue&#45;&#45;text ml-3">{{ item.message }}</span>-->
          </div>

        </v-col>
      </v-row>
    </v-container>
    <v-footer fixed>
      <v-container class="ma-0 pa-0">
        <v-row no-gutters>
          <v-col>
            <div class="d-flex flex-row align-center">
              <v-text-field v-model="message" :placeholder="'send a message to '+chatHead"
                            @keypress.enter="send"></v-text-field>
              <v-btn class="ml-4" icon @click="send">
                <v-icon>mdi-send</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>

  </div>
</template>

<script>
import {mapActions} from "vuex";
import {mapGetters} from "vuex";

export default {
  name: "chat",
  layout: 'normal',
  data() {
    return {
      chat: [],
      message: null,
      chatr: [],
      reply: [],
      authId: this.$auth.user.id,
      chatHead: '',
      chatHeadid: null,

    }
  },
  computed: {
    ...mapGetters({
      chattingWith: 'chat/GET_CHATTING_WITH',
      chattingWithid: 'chat/GET_CHATTING_WITH_ID',
      chats: 'apiservice/GET_CHATS'
    })
  },
  methods: {

    ...mapActions({
      allChats: 'apiservice/getChats',
      sendMessage: 'apiservice/sendMessage',
      addChatsfromsocket: 'apiservice/addChatsfromsocket',
      sendNewmessagenotification:'chat/setChatsocket'
    }),

    goBack() {
      this.$router.push('/members',()=>this.$router.go(0) )
    },

    send: function () {

      const payload = {
        user_id: this.chatHeadid,
        message: this.message,
        from: this.authId,
        to:this.chatHeadid
      }

      this.sendMessage(payload)
        this.addChatsfromsocket(payload)




    },
    addReply() {
      this.chatr.push({
        from: "sushant",
        msg: "Hmm"
      })
    }
  },
  mounted() {

    this.chatHead = this.chattingWith
    this.chatHeadid = this.chattingWithid

    this.$echo.private(`chat-channel.${this.authId}`)
      .listen('.Chat', (e) => {

        const chat = {
          message: e.message,
          sent: 'moments ago',
          from: this.chatHeadid,
          to: this.authId,
        }

        this.addChatsfromsocket(chat)
      });

    this.allChats({user_id: this.chatHeadid}).then(() => {
      this.chat = this.chats
    })

  }
}
</script>

<style scoped>

.smalltext {
  font-size: xx-small;

}

.position-sent {
  display: flex;
  justify-content: end;
}

</style>
