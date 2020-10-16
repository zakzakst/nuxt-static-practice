export const state = () => ({
  text: '',
  count: 0
})

export const mutations = {
  increment(state) {
    state.count += 1
  },
  changText(state, text) {
    state.text = text
  }
}
