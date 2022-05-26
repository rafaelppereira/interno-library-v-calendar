import { createStore } from 'vuex';

const store = createStore({
  state: {
    attributes: [],
    user: {},
    unity: '',
    isLoading: true,
    isInfoClassroom: false,
  },
  getters: {
    
  },
  mutations: {
    GET_ATTRIBUTES(state, payload) {    
      state.attributes = payload;
      
      const findUnity = state.attributes.filter((attr) => attr['name'] === state.unity);
      const findResults = findUnity.map(item => item['results']);

      state.attributes = findResults;
    },
    GET_USER(state, payload) {
      state.user = payload;
    },
    OPEN_CLASSROOM_INFO(state, payload) {
      state.isInfoClassroom = true;
    },
    CHANGE_UNITY_SELECT(state, payload) {
      state.unity = payload;
    }
  },
  actions: {
    async getAttributes({ commit }, payload) {
      const req = await fetch(`http://localhost:3333/${payload}`);
      const units = await req.json();

      commit('GET_ATTRIBUTES', units);
    },
    async getUsers({ commit }, payload) {
      const req = await fetch(`http://localhost:3333/${payload}`);
      const user = await req.json();
      this.state.isLoading = false;
      
      commit('GET_USER', user);
    }
  }
});

export default store;