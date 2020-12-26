export const state = () => ({
  theme: 'default',
})

export const mutations = {
  setTheme(state, payload) {
    state.theme = payload
  },
}

export const actions = {
  updateTheme({ commit, state, dispatch }, payload) {
    commit('setTheme', payload)
  },
}
