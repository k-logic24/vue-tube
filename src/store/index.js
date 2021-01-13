import Vue from "vue";
import Vuex from "vuex";

import {
  SET_POPULAR,
  SET_RELATED,
  SET_SEARCHED,
  SET_SELECTED
} from "@/store/mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    popularData: [],
    relatedData: [],
    searchedData: [],
    selectedData: {}
  },
  mutations: {
    [SET_POPULAR](state, payload) {
      state.popularData = payload;
    },
    [SET_SEARCHED](state, payload) {
      state.searchedData = payload;
    },
    [SET_SELECTED](state, payload) {
      state.selectedData = payload;
    },
    [SET_RELATED](state, payload) {
      state.relatedData = payload;
    }
  }
});
