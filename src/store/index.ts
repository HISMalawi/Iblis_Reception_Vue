import { createStore } from 'vuex'

export const store = createStore({
  state: {

    registeringPatient : false,
    searchingPatient : false,
    viewingPatient : false,
    viewingPatientDetails : true,
    createPatientOrder : false,
    viewPatientOrders : false,

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
    },
    OPEN_PATIENT_DETAILS(state, value){
      state.viewingPatientDetails = value
    },
    OPEN_PATIENT_PLACE_ORDER(state, value){
      state.createPatientOrder = value
    },
    OPEN_PATIENT_VIEW_ORDERS(state, value){
      state.viewPatientOrders = value
    }
    
  },
  actions: {
  },
  modules: {
  }
})
