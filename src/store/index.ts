import Vue from "vue";
import Vuex from "vuex";
import http from "../services/http.services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    DADOS: {},
    LOADING: false,
    ERRO: "",
  },
  getters: {
    DADOS_POKEMON: (currState) => {
      return currState.DADOS;
    },
    LOADING: (currState) => {
      return currState.LOADING;
    },
    ERRO: (currState) => {
      return currState.ERRO;
    },
  },
  mutations: {
    SET_DADOS(currState, data) {
      currState.DADOS = data;
    },
    SET_LOADING(currState, data) {
      currState.LOADING = data;
    },
    SET_ERRO(currState, data) {
      currState.ERRO = data;
    },
  },
  actions: {
    BUSCA_DADOS({ commit }) {
      commit("SET_LOADING", true);
      http
        .get("?offset=200&limit=200")
        .then((resp) => {
          commit("SET_DADOS", resp.data);
          commit("SET_LOADING", false);
        })
        .catch(() => {
          console.log("Inserção de tela de erro ");
          commit("SET_LOADING", false);
          commit("SET_ERRO", "ERROR");
        });
    },
  },
  modules: {},
});
