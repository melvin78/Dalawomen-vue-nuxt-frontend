export const state = () => ({

 notifications:[],





})

export const mutations = {


  SET_LOAN_NOTIFICATION:(state,value)=>state.notifications=value

}

export const actions = {



  loanNotification({commit},value){
    commit('SET_LOAN_NOTIFICATION',value)
  }


}
export const setters = {}

export const getters = {


  GET_NOTIFICATIONS:(state)=>state.notifications


}
