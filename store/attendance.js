export const state = () => ({


  members: [],
  idx: null,



})

export const mutations = {

  SET_MEMBERS: (state, members) => state.members.push(members),
  // GET_INDEXOF_MEMBER(state, members) {
  //   state.idx = state.members.indexOf(members);
  //
  // },
  REMOVE_MEMBER: (state, idx) => state.members.splice(idx, 1)


}

export const actions = {

  addMember({commit}, members) {
    commit('SET_MEMBERS', members)
  },

  // indexMember({commit}, members) {
  //   commit('GET_INDEXOF_MEMBER', members)
  // },

  removeMember({commit,state}, member) {
    let idx = state.members.map(e=>e.id).indexOf(member)
    commit('REMOVE_MEMBER',idx)
  }

}
export const setters = {}

export const getters = {
  GET_MEMBERS: (state) => state.members,

  GET_INDEXOF_MEMBER:(state)=>state.idx,


}
