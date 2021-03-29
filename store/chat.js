export const state = () => ({


  chattingWith: null,
  chattingWithid:null,
  chatSocket:[],


})

export const mutations = {

  SET_CHATTING_WITH: (state, value) => (state.chattingWith=value),
  SET_CHATTING_WITH_ID:(state,value) =>(state.chattingWithid=value),
  SET_CHAT_SOCKET:(state,value)=>(state.chatSocket.push(value))


}

export const actions = {

  setChattingwith({commit}, name) {
    commit('SET_CHATTING_WITH', name)
  },

  setChattingwithid({commit},name){

    commit('SET_CHATTING_WITH_ID',name)
  },

  setChatsocket({commit},message){
    commit('SET_CHAT_SOCKET',message)

  }


}
export const setters = {}

export const getters = {

  GET_CHATTING_WITH: (state) => state.chattingWith,
  GET_CHATTING_WITH_ID: (state)=>state.chattingWithid,
  GET_CHATS:(state)=>state.chatSocket
}
