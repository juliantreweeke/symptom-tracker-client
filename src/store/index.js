import Vue from "vue";
import Vuex from "vuex";
import {
  createHandler,
  deleteHandler,
  getAllHandler
} from "../services/requestService";

import { DEFAULT_VALUES, REQUEST_STATUS, ROUTES } from "../constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filters: DEFAULT_VALUES.FILTERS,
    assessments: DEFAULT_VALUES.ASSESSMENTS,
    clinicians: DEFAULT_VALUES.CLINICIANS,
    searchQuery: DEFAULT_VALUES.SEARCH_QUERY,
    status: REQUEST_STATUS.INITIAL
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
    }
  },
  actions: {
    async createAssessment({ commit }, payload) {
      commit("setStatus", REQUEST_STATUS.LOADING);
      await createHandler(ROUTES.ASSESSMENT, payload);
      commit("setStatus", REQUEST_STATUS.SUCCESS);
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
    async loginUser({ commit }, payload) {
      commit("setStatus", REQUEST_STATUS.LOADING);
      const user = await createHandler(ROUTES.USER.LOGIN, payload);
      console.log(user, "user");
      commit("setStatus", REQUEST_STATUS.SUCCESS);
      return user;
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
