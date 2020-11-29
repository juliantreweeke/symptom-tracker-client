import Vue from "vue";
import Vuex from "vuex";
import {
  createHandler,
  deleteHandler,
  getAuthHandler,
  getHandler,
  getAllHandler
} from "../services/requestService";

import { sessionStore } from "../utils/storage";

import {
  DEFAULT_VALUES,
  REQUEST_STATUS,
  ROUTES,
  SESSION_STORAGE_KEYS
} from "../constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filters: DEFAULT_VALUES.FILTERS,
    assessments: DEFAULT_VALUES.ASSESSMENTS,
    clinicians: DEFAULT_VALUES.CLINICIANS,
    searchQuery: DEFAULT_VALUES.SEARCH_QUERY,
    status: REQUEST_STATUS.INITIAL,
    clients: [],
    loggedInUser: {}
  },
  mutations: {
    setStatus(state, payload) {
      state.status = payload;
    },
    setAssessments(state, payload) {
      state.assessments = payload;
    },
    setClinicians(state, payload) {
      state.clinicians = payload;
    },
    setClients(state, payload) {
      state.clients = payload;
    },
    setLoggedInUser(state, payload) {
      state.loggedInUser = payload;
    }
  },
  actions: {
    async getLoggedInUser({ commit }) {
      commit("setStatus", REQUEST_STATUS.LOADING);
      const token = sessionStore.getItem(SESSION_STORAGE_KEYS.JWT);
      const loggedInUser = await getAuthHandler(ROUTES.USER.AUTH, token);
      commit("setLoggedInUser", loggedInUser);
      commit("setStatus", REQUEST_STATUS.SUCCESS);
    },
    async createAssessment({ commit }, payload) {
      commit("setStatus", REQUEST_STATUS.LOADING);
      await createHandler(ROUTES.ASSESSMENT, payload);
      commit("setStatus", REQUEST_STATUS.SUCCESS);
    },
    async createClient({ commit }, payload) {
      commit("setStatus", REQUEST_STATUS.LOADING);
      const client = await createHandler(ROUTES.USER.CREATE_CLIENT, payload);
      commit("setStatus", REQUEST_STATUS.SUCCESS);
      return client;
    },
    async deleteAssessment({ commit }, id) {
      commit("setStatus", REQUEST_STATUS.LOADING);
      await deleteHandler(ROUTES.ASSESSMENT, id);
      commit("setStatus", REQUEST_STATUS.SUCCESS);
    },
    async getAllAssessments({ commit }) {
      const assessments = await getAllHandler(ROUTES.ASSESSMENT);
      commit("setAssessments", assessments);
    },
    async getAllClinicians({ commit }) {
      const clinicians = await getAllHandler(ROUTES.CLINICIAN);
      commit("setClinicians", clinicians);
    },
    async getAllClientsById({ commit, state }) {
      commit("setStatus", REQUEST_STATUS.LOADING);
      const clients = await getHandler(
        ROUTES.USER.CLIENTS,
        state.loggedInUser._id
      );
      commit("setClients", clients);
      commit("setStatus", REQUEST_STATUS.SUCCESS);
    },
    async loginUser({ commit }, payload) {
      commit("setStatus", REQUEST_STATUS.LOADING);
      const loggedInUser = await createHandler(ROUTES.USER.LOGIN, payload);
      commit("setLoggedInUser", loggedInUser.user);
      commit("setStatus", REQUEST_STATUS.SUCCESS);
      return loggedInUser;
    },
    async registerUser({ commit }, payload) {
      commit("setStatus", REQUEST_STATUS.LOADING);
      const user = await createHandler(ROUTES.USER.REGISTER, payload);
      commit("setStatus", REQUEST_STATUS.SUCCESS);
      return user;
    }
  },
  modules: {}
});
