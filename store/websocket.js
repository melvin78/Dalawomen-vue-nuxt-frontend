export const state = () => ({

  LoansAprroved:[],




})

export const mutations = {

  LOAN_APPROVED_SOCKET:(state,value)=>state.LoansAprroved=value

}

export const actions = {


  loansapprovedSocket({commit},value){
    commit('LOAN_APPROVED_SOCKET',value)
  }


}
export const setters = {}

export const getters = {


  GET_LOANS_APPROVED:(state)=>state.LoansAprroved


}
