import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';

const ls = new SecureLS({ encodingType: 'aes', isCompression: false, encryptionSecret: 'vue-tailwind-form' });

export default createStore({
  state: {
    biodataForm: {
      name: '',
      age: '',
      expectedPrice: 0,
      country: '',
      package: -1,
      premium: '',
    },
    countries: [
      {
        name: 'Hongkong',
        currency: 'HKD',
        rate: 1,
      },
      {
        name: 'USA',
        currency: 'USD',
        rate: 2,
      },
      {
        name: 'Australia',
        currency: 'AUD',
        rate: 3,
      },
    ],
    packages: [
      {
        name: 'Standard',
        addPrice: 0,
        added: false,
      }, {
        name: 'Safe',
        addPrice: 50,
        added: true,
      }, {
        name: 'Super Safe',
        addPrice: 75,
        added: true,
      },
    ],
  },
  mutations: {
    SET_BIODATA: (state, payload) => {
      state.biodataForm = payload;
    },
  },
  actions: {
    setBiodataForm: ({ commit }, payload) => {
      commit('SET_BIODATA', payload);
    },
    defaultBiodata: ({ commit }) => {
      commit('SET_BIODATA', {
        name: '',
        age: '',
        expectedPrice: 0,
        country: '',
        package: -1,
        premium: '',
      });
    },
  },
  plugins: [
    createPersistedState({
      key: 'VUE-TAIILWIND-FORM',
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
