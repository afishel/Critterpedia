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
import sortAsc from '../utils/sort-asc';
import months from '../utils/months';

Vue.use(Vuex);

const types = { INSECT, FISH };
const hemispheres = { NORTHERN_HEMISPHERE, SOUTHERN_HEMISPHERE };

export default new Vuex.Store({
  state: {
    fish,
    insects,
    months: months.map((m, i) => i + 1),
    bells: [],
    hours: [0, 2400],
    critters: [],
    date: new Date(),
    hemisphere: NORTHERN_HEMISPHERE,
    showFilters: false,
    type: INSECT,
  },
  mutations: {
    updateBells(state, payload) { state.bells = payload; },
    updateCritters(state, payload) { state.critters = payload; },
    updateDate(state, payload) { state.date = payload; },
    updateHemisphere(state, payload) { state.hemisphere = payload; },
    updateHours(state, payload) { state.hours = payload; },
    updateMonths(state, payload) { state.months = payload; },
    updateShowFilters(state, payload) { state.showFilters = payload; },
    updateType(state, payload) { state.type = payload; },
  },
  getters: {
    prices() {
      const prices = [...fish, ...insects].map((x) => x.price);
      return prices
        .sort(sortAsc)
        .reduce((accum, curr) => (accum.includes(curr) ? accum : [...accum, curr]), []);
    },
  },
  actions: {
    changeBells({ commit }, payload = []) {
      commit('updateBells', payload);
    },
    changeDate({ commit }, payload = new Date()) {
      commit('updateDate', payload);
    },
    changeHemisphere({ commit }, payload = NORTHERN_HEMISPHERE) {
      commit('updateHemisphere', hemispheres[payload]);
    },
    changeHours({ commit }, payload = [0, 2400]) {
      commit('updateHours', payload);
    },
    changeMonths({ commit }, payload = months) {
      commit('updateMonths', payload);
    },
    changeType({ commit }, payload = INSECT) {
      commit('updateType', types[payload]);
    },
    changeShowFilters({ commit }, payload = false) {
      commit('updateShowFilters', payload);
    },
    filterCritters({ commit, state }) {
      const {
        bells,
        hemisphere,
        hours,
        type,
      } = state;
      let critters;
      if (type === INSECT) critters = insects;
      if (type === FISH) critters = fish;

      if (bells.length === 2) {
        critters = critters.filter((critter) => (
          critter.price >= bells[0] && critter.price <= bells[1]
        ));
      }

      if (hours.length === 2) {
        critters = critters.filter((critter) => {
          let active = false;
          if (critter.time === -1) {
            active = true;
          } else {
            critter.time.forEach((span) => {
              if (
                (hours[0] >= span[0] && hours[1] <= span[1])
                || (span[0] < hours[1] && span[1] > hours[0])
              ) {
                active = true;
              }
            });
          }
          return active;
        });
      }

      if (months.length) {
        critters = critters.filter((critter) => {
          let active = false;
          if (critter.months === -1) {
            active = true;
          } else {
            const hemi = hemisphere === NORTHERN_HEMISPHERE ? 0 : 1;
            const critterMonths = critter.months[hemi];
            active = !!critterMonths.filter((month) => (
              state.months.includes(month)
            )).length;
          }
          return active;
        });
      }

      commit('updateCritters', critters);
    },
  },
  modules: {
  },
});
