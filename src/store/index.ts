import { createStore } from 'vuex';

const month = new Date().getMonth();
const year = new Date().getFullYear();

const store = createStore({
  state: {
    attributes: [
      {
        key: 1,
        customData: {
          title: 'Versionamento de projeto',
          class: 'bg-red-600 text-white',
        },
        dates: new Date(year, month, 1),
        category: 'extra',
      },
      {
        key: 2,
        customData: {
          title: 'Limpar o andar 01 e 02',
          class: 'bg-blue-500 text-white',
        },
        dates: new Date(year, month, 2),
        category: 'casa',
      },
      {
        key: 3,
        customData: {
          title: "Ir treinar basquete na quadra",
          class: 'bg-blue-500 text-white',
        },
        dates: new Date(year, month, 5),
        category: 'extra',
      },
      {
        key: 4,
        customData: {
          title: 'Levar o carro para lavar',
          class: 'bg-indigo-500 text-white',
        },
        dates: new Date(year, month, 5),
        category: 'extra',
      },
      {
        key: 4,
        customData: {
          title: 'Marcar reunião com Franciany',
          class: 'bg-teal-500 text-white',
        },
        dates: new Date(year, month, 7),
        category: 'extra',
      },
      {
        key: 5,
        customData: {
          title: "Ir para academia para treinar",
          class: 'bg-pink-500 text-white',
        },
        dates: new Date(year, month, 11),
        category: 'extra', 
      },
      {
        key: 6,
        customData: {
          title: 'Cozinhar a noite para o outro dia',
          class: 'bg-orange-500 text-white',
        },
        dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        category: 'extra',
      },
      {
        key: 7,
        customData: {
          title: "Ir para academia para treinar",
          class: 'bg-pink-500 text-white',
        },
        dates: new Date(year, month, 22),
        category: 'extra',
      },
      {
        key: 8,
        customData: {
          title: 'Visitar minha vó em Gramado',
          class: 'bg-red-600 text-white',
        },
        dates: new Date(year, month, 25),
        category: 'extra',
      },
    ],
  },
  getters: {

  },
  mutations: {
    GET_CATEGORY(state, payload) {
      const filterCategory = state.attributes.filter((attr) => attr.category === payload);
      state.attributes = [...filterCategory];
    }
  },
  actions: {}
});

export default store;