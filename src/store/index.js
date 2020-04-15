import Vue from 'vue';
import Vuex from 'vuex';
import {
  INSECT,
  FISH,
  NORTHERN_HEMISPHERE,
  SOUTHERN_HEMISPHERE,
} from '../utils/types';
import insects from '../content/insects.yaml';
import fish from '../content/fish.yaml';

Vue.use(Vuex);

const types = { INSECT, FISH };
const hemispheres = { NORTHERN_HEMISPHERE, SOUTHERN_HEMISPHERE };

export default new Vuex.Store({
  state: {
    hemisphere: NORTHERN_HEMISPHERE,
    type: INSECT,
    fish,
    insects,
    critters: [],
  },
  mutations: {
    updateCritters(state, payload) { state.critters = payload; },
    updateHemisphere(state, payload) { state.hemisphere = payload; },
    updateType(state, payload) { state.type = payload; },
  },
  actions: {
    changeHemisphere({ commit }, payload) {
      commit('updateHemisphere', hemispheres[payload] || NORTHERN_HEMISPHERE);
    },
    changeType({ commit }, payload) {
      commit('updateType', types[payload] || INSECT);
    },
    filterCritters({ commit, state: { type } }) {
      let critters;
      if (type === INSECT) critters = insects;
      if (type === FISH) critters = fish;
      commit('updateCritters', critters);
    },
  },
  modules: {
  },
});
