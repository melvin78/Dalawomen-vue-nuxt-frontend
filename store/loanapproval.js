export const state = () => ({


  members: [],


})

export const mutations = {

  ADD_NEW_MEMBER: (state, value) => (state.members.push(value)),
  REMOVE_MEMBER: (state, value) => (state.members.splice(value, 1))

}

export const actions = {

  addMember({commit}, members) {
    commit('ADD_NEW_MEMBER', members)
  },

  removeMember({commit,state}, member) {
    let idx = state.members.map(e=>e.id).indexOf(member)
    commit('REMOVE_MEMBER', idx)

  }

}
export const setters = {}

export const getters = {

  GET_ALL_MEMBERS: (state) => state.members
}
