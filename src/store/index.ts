import { createStore } from 'vuex'

export const store = createStore({
  state: {

    registeringPatient : false,
    searchingPatient : false,
    viewingPatient : false

  },
  mutations: {

    REGISTERING_PATIENT(state, value) {
      state.registeringPatient = value
    }
  },
  actions: {
  },
  modules: {
  }
})
