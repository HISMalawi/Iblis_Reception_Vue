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
    },

    SEARCHING_PATIENT(state, value) {
      state.searchingPatient = value
    },
    VIEWING_PATIENT(state, value){
      state.viewingPatient = value
    }
    
  },
  actions: {
  },
  modules: {
  }
})
