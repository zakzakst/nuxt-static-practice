export const state = () => ({
  text: 'mapGetters練習',
  count: 0
})

export const mutations = {
  changeText(state, payload) {
    state.text = payload;
  },
  changeCount(state, payload) {
    state.count = payload;
  },
}

export const actions = {
  changeText({ commit }, payload) {
    commit('changeText', payload);
  },
  changeCount({ commit }, payload) {
    commit('changeCount', payload);
  },
}

export const getters = {
  text(state) {
    return state.text;
  },
  count(state) {
    return state.count;
  }
}
