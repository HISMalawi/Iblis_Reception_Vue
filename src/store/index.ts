import {
  Store as VuexStore,
  ActionContext,
  ActionTree,
  createStore,
  GetterTree,
  MutationTree,
  DispatchOptions,
  CommitOptions,
} from "vuex";
import { User } from "@/interfaces/User";
import { Axios } from "axios";

const axios = require("axios").create({
  baseURL: process.env.VUE_APP_SERVICE_BASE_URL,
  timeout: process.env.VUE_APP_REQUEST_TIMEOUT,
});

let user: User = {
  username: "",
  email: "",
  name: "",
  role: "",
  token: "",
};

export type State = {
  counter: number;
  registeringPatient: boolean;
  searchingPatient: boolean;
  viewingPatient: boolean;
  viewingPatientDetails: boolean;
  createPatientOrder: boolean;
  viewPatientOrders: boolean;
  user: User;
  loggedIn: boolean;
  axios: Axios;
};

const state: State = {
  counter: 0,
  registeringPatient: false,
  searchingPatient: false,
  viewingPatient: false,
  viewingPatientDetails: true,
  createPatientOrder: false,
  viewPatientOrders: false,
  user: user,
  loggedIn: false,
  axios: axios,
};

export enum MutationTypes {
  INC_COUNTER = "SET_COUNTER",
  LOGIN = "LOGIN_USER",
  SEARCH_PATIENT = "SEARCHING_PATIENT",
  VIEW_PATIENT = "VIEWING_PATIENT",
  REGISTER_PATIENT = "REGISTERING_PATIENT",
  OPEN_PATIENT_DETAILS = "OPENING_PATIENT_DETAILS",
  OPEN_PATIENT_PLACE_ORDER = "OPENING_PATIENT_PLACE_ORDER",
  OPEN_PATIENT_VIEW_ORDERS = "OPENING_PATIENT_VIEW_ORDERS",
}

export enum ActionTypes {
  INC_COUNTER = "SET_COUNTER",
  LOGIN = "LOGIN_USER",
  SEARCH_PATIENT = "SEARCHING_PATIENT",
  VIEW_PATIENT = "VIEWING_PATIENT",
  REGISTER_PATIENT = "REGISTERING_PATIENT",
  OPEN_PATIENT_DETAILS = "OPENING_PATIENT_DETAILS",
  OPEN_PATIENT_PLACE_ORDER = "OPENING_PATIENT_PLACE_ORDER",
  OPEN_PATIENT_VIEW_ORDERS = "OPENING_PATIENT_VIEW_ORDERS",
}

export type Mutations<S = State> = {
  [MutationTypes.INC_COUNTER](state: S, payload: number): void;
  [MutationTypes.LOGIN](state: S, payload: User): void;
  [MutationTypes.SEARCH_PATIENT](state: S, payload: boolean): void;
  [MutationTypes.VIEW_PATIENT](state: S, payload: boolean): void;
  [MutationTypes.REGISTER_PATIENT](state: S, payload: boolean): void;
  [MutationTypes.OPEN_PATIENT_DETAILS](state: S, payload: boolean): void;
  [MutationTypes.OPEN_PATIENT_PLACE_ORDER](state: S, payload: boolean): void;
  [MutationTypes.OPEN_PATIENT_VIEW_ORDERS](state: S, payload: boolean): void;
};

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.INC_COUNTER](state: State, payload: number) {
    state.counter += payload;
  },
  [MutationTypes.LOGIN](state: State, payload: User) {
    state.user = payload;
    state.loggedIn = true;
  },
  [MutationTypes.SEARCH_PATIENT](state: State, payload: boolean) {
    state.searchingPatient = payload;
  },
  [MutationTypes.VIEW_PATIENT](state: State, payload: boolean) {
    state.viewingPatient = payload;
  },
  [MutationTypes.REGISTER_PATIENT](state: State, payload: boolean) {
    state.registeringPatient = payload;
  },
  [MutationTypes.OPEN_PATIENT_DETAILS](state: State, payload: boolean) {
    state.viewingPatientDetails = payload;
  },
  [MutationTypes.OPEN_PATIENT_PLACE_ORDER](state: State, payload: boolean) {
    state.createPatientOrder = payload;
  },
  [MutationTypes.OPEN_PATIENT_VIEW_ORDERS](state: State, payload: boolean) {
    state.viewPatientOrders = payload;
  },
};

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export interface Actions {
  [ActionTypes.INC_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;

  [ActionTypes.LOGIN](
    { commit }: AugmentedActionContext,
    payload: User
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.INC_COUNTER]({ commit }, payload: number) {
    commit(MutationTypes.INC_COUNTER, payload);
  },
  [ActionTypes.LOGIN]({ commit }, payload: User) {
    commit(MutationTypes.LOGIN, payload);
  },
};

export type Getters = {
  doubleCounter(state: State): number;
  user(state: State): User;
  axios(state: State): Axios;
  isLoggedIn(state: State): boolean;
};

export const getters: GetterTree<State, State> & Getters = {
  doubleCounter: (state) => {
    return state.counter * 2;
  },
  user: (state) => {
    return state.user;
  },
  axios: (state) => {
    return state.axios;
  },
  isLoggedIn: (state) => {
    return state.loggedIn;
  },
};

export type Store = Omit<
  VuexStore<State>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export const store = createStore({
  state,
  getters,
  mutations,
  actions,
});

export function useStore() {
  return store as Store;
}
