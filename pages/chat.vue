<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-toolbar
      color="deep-purple accent-4"
      dark
    >
     <v-icon color="white" @click="goBack">mdi-arrow-left</v-icon>
      <v-toolbar-title>Chat with {{this.chatHead}}
      </v-toolbar-title>

      <v-spacer></v-spacer>


    </v-toolbar>
    <div class="fix-chat-overflow" ref="ch">
      <div  v-for="(item,i) in chat" :class="['d-flex mb-6 pl-2 pt-2 ',item.from===authId?'justify-end' :'justify-start']" :key="i">
        <v-card elevation="40" >
          <v-list subheader>
            <v-subheader>{{item.sent}}</v-subheader>

            <v-list-item >
              <v-list-item-avatar :color="item.from===authId?'blue':'red'">

              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="item.message"></v-list-item-title>
              </v-list-item-content>

            </v-list-item>

          </v-list>
        </v-card>
      </div>
    </div>
    <v-divider></v-divider>


    <v-card-actions>

      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="message"
            @click:append-outer="send"
            append-outer-icon="mdi-send"
            filled
            clear-icon="mdi-close-circle"
            clearable
            @keypress.enter="send"
            :label="`Message ${this.chatHead}`"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>

    </v-card-actions>
  </v-card>
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
  updated() {

    this.scroll()
  },
  methods: {
    scroll() {
      const chatview = this.$refs.ch;
     chatview.scrollTop = chatview.scrollHeight;
    },
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
      this.scroll()

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

.fix-chat-overflow{



  height: 500px;
  overflow: auto;
}
</style>
