import { createStore } from 'vuex'
import { User } from '@/interfaces/User'
import { reactive } from 'vue';

const axios = require('axios').create({
  baseURL: process.env.VUE_APP_SERVICE_BASE_URL,
  timeout: process.env.VUE_APP_REQUEST_TIMEOUT
});

let user: User  = reactive({
  username : "",
  email : "",
  name: "",
  role: "",
  token: ""
});

export const store = createStore({
  state: {

    registeringPatient : false,
    searchingPatient : false,
    viewingPatient : false,
    viewingPatientDetails : true,
    createPatientOrder : false,
    viewPatientOrders : false,
    user : user,
    loggedIn: false,
    axios : axios

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
    },LOGIN(state, user: User){
      state.user = user
      state.loggedIn = true
    }
    
  },
  getters: {

    isLoggedIn: (state) => () => {
      return state.loggedIn
    },

    getAxios: (state) => () => {
      return state.axios
    },

  },
  actions: {
  },
  modules: {
  }
})
