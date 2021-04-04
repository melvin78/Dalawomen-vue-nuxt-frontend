<template>
  <div>
    <v-app-bar app color="blue">
      <v-app-bar-nav-icon>
        <v-icon color="white" @click="goBack">mdi-arrow-left</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="white--text"
      >Chatting with {{this.$auth.$storage.getLocalStorage('chatHead')}}


      </v-toolbar-title>
    </v-app-bar>
    <v-container>




      <v-row v-for="(item,i) in chat" :key="i" :class="['d-flex mb-6 pl-2',item.from===authId?'justify-end' :'justify-start']">
        <v-avatar size="35" :color="item.from === authId ? 'indigo': 'red'">

        </v-avatar>
        <v-card
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          flat
          elevation="20"
          tile
        >

          <v-card-text>{{ item.message }}</v-card-text>
          <div class="position-sent">
            <v-card-text >{{ item.sent }}</v-card-text>
          </div>

        </v-card>

      </v-row>

      <div class="pt-2 pl-4 pr-4 pb-5">
        <v-bottom-navigation fixed >
          <v-text-field v-model="message"
                        :placeholder="'send a message to '+this.$auth.$storage.getLocalStorage('chatHead')"
                        @keypress.enter="send"></v-text-field>
          <v-btn class="ml-4" icon @click="send">
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-bottom-navigation>

      </div>

    </v-container>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "testchat",
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

  },
  created() {

  },
  mounted() {

    this.chatHead = this.$auth.$storage.getLocalStorage('chatHead')
    this.chatHeadid =this.$auth.$storage.getLocalStorage('chatHeadid')


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

.position-sent {
  display: flex;
  justify-content: end;
}
</style>
