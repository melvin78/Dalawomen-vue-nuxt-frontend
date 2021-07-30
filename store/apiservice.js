

export const state = () => ({


  overlay: true,
  meetings: '',
  loans: '',
  absentees: '',
  members: [],
  loanees: [],
  refno: [],
  host: [],
  memberStat: [],
  balances: [],
  notification: [],
  chats: [],
  perPage: null,
  current_page: null,
  last_page: null,
  approval: '',
  messageResponse: '',


})

export const mutations = {


  SET_LOADING: (state) => (state.loading = false),
  SET_MEETINGS: (state, payload) => (state.meetings = payload),
  SET_LOANS: (state, payload) => (state.loans = payload),
  SET_ABSENTEES: (state, payload) => (state.absentees = payload),
  SET_MEMBERS: (state, members) => (state.members = members),
  SET_LOANEES: (state, loanees) => (state.loanees = loanees),
  SET_CURRENT_PAGE: (state, pageno_current) => (state.current_page = pageno_current),
  SET_LAST_PAGE: (state, pageno) => (state.last_page = pageno),
  SET_PER_PAGE: (state, value) => (state.perPage = value),
  SET_APPROVAL: (state, value) => (state.approval = value),
  SET_OVERLAY: (state) => (state.overlay = true),
  UNSET_OVERLAY: (state) => (state.overlay = false),
  SET_NOTIFICATIONS: (state, value) => (state.notifications = value),
  SET_HOST: (state, value) => (state.host = value),
  SET_BALANCES: (state, value) => (state.balances = value),
  SET_MEMBER_STAT: (state, value) => (state.memberStat = value),
  SET_CHATS: (state, value) => (state.chats= value),
  SET_MESSAGE_RESPONSE: (state, value) => (state.messageResponse = value),
  ADD_CHATS_FROM_SOCKET:(state,value)=>(state.chats.push(value))


}

export const getters = {

  MEETING_RESPONSE: (state) => state.meetings,
  LOANS_RESPONSE: (state) => state.loans,
  ABSENTEES_RESPONSE: (state) => state.absentees,
  MEMBERS_RESPONSE: (state) => state.members,
  LOANEES_RESPONSE: (state) => state.loanees,
  CURRENT_PAGE_RESPONSE: (state) => state.current_page,
  LAST_PAGE: (state) => state.last_page,
  PER_PAGE: (state) => state.perPage,
  OVERLAY_VALUE: (state) => state.overlay,
  RESPONSE_AFTER_LOAN_SUBMISSION: (state) => state.approval,
  GET_NOTIFICATIONS: (state) => state.notifications,
  GET_HOST: (state) => state.host,
  GET_BALANCES: (state) => state.balances,
  GET_MEMBER_STAT: (state) => state.memberStat,
  GET_CHATS: (state) => state.chats,
  GET_MEMBERS_RESPONSE: (state) => state.messageResponse,


}

export const setters = {

  SET_CURRENT_PAGE: (state, value) => state.current_page = value
}

export const actions = {


  changeOverlay({commit}) {
    commit('UNSET_OVERLAY')
  },

  async loanme({commit}, payload) {
    await this.$postRepository.loans.create(payload).then((response) => {

      commit('SET_LOANS', response)
      commit('SET_LOADING', false)
    })
  },

  async startMeeting({commit}, payload) {
    await this.$postRepository.meetings.create(payload).then((response) => {
      commit('SET_OVERLAY')
      commit('SET_MEETINGS', response)
      commit('SET_LOADING', false)
      commit('UNSET_OVERLAY')
    })

  },
  async absentees({commit}, payload) {

    await this.$postRepository.absentees.create(payload).then((response) => {
      commit('SET_OVERLAY')
      commit('SET_ABSENTEES', response)
      commit('SET_LOADING', false)
      commit('UNSET_OVERLAY')
    })
  },

  async getMembers({commit}) {
    const members = await this.$postRepository.members.all();
    commit('SET_OVERLAY')
    commit('SET_MEMBERS', members)
    commit('UNSET_OVERLAY')

  },

  async fetchLoans({commit}, pageno) {
    await this.$postRepository.approval.paginate(pageno).then((response) => {
      commit('SET_OVERLAY')
      commit('SET_LOANEES', response.user.data)
      commit('SET_CURRENT_PAGE', response.meta.current_page)
      commit('SET_LAST_PAGE', response.meta.last_page)
      commit('SET_PER_PAGE', response.meta.total)
      commit('UNSET_OVERLAY')

    })


  },

  async approveLoans({commit}, payload) {

    await this.$postRepository.confirmApproval.create(payload).then((response) => {
      commit('SET_OVERLAY', true)
      commit('SET_APPROVAL', response.data)
      commit('SET_LOADING', false)
      commit('SET_OVERLAY', false)
    })

  },

  async getNotifications({commit}) {


    await this.$postRepository.notifications.all().then((res) => {
      commit('SET_NOTIFICATIONS', res.target)
    })
  },

  async markRead({commit}) {
    await this.$postRepository.markasread.mark();

  },
  async getHostname({commit}) {

    await this.$postRepository.hostThismonth.all().then((res) => {
      commit('SET_HOST', res.data)
    })
  },

  async getBalances({commit}) {
    await this.$postRepository.dashboard.all().then((res) => {
      commit('SET_BALANCES', res.data)

    })
  },

  async getStat({commit}) {
    await this.$postRepository.memberStatus.all().then((res) => {
      commit('SET_MEMBER_STAT', res.data)
    })
  },

  async getChats({commit}, payload) {
    await this.$postRepository.getChat.create(payload).then((res) => {
      commit('SET_CHATS', res.data)
    })
  },
  async sendMessage({commit}, payload) {
    await this.$postRepository.sendChat.create(payload).then((res) => {
      commit('SET_MESSAGE_RESPONSE', res)
    })
  },

   addChatsfromsocket({commit},message){
    commit('ADD_CHATS_FROM_SOCKET',message)
  }



}



