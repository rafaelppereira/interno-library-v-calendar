import { createStore } from 'vuex';

const month = new Date().getMonth();
const year = new Date().getFullYear();

import axios from 'axios';

const store = createStore({
  state: {
    attributes: [
      {
        key: 1,
        customData: {
          title: 'Versionamento de projeto',
          class: 'bg-red-600 text-white',
          userId: '1e87d5c9-25cb-426f-b508-d8db7d49ca8f',
          username: 'Rafael Pereira',
          category: 'extra',
        },
        dates: new Date(year, month, 1),
      },
      {
        key: 2,
        customData: {
          title: 'Limpar o andar 01 e 02',
          class: 'bg-blue-500 text-white',
          userId: '1e87d5c9-25cb-426f-b508-d8db7d49ca8f',
          username: 'Rafael Pereira',
          category: 'casa',
        },
        dates: new Date(year, month, 2),
      },
      {
        key: 3,
        customData: {
          title: "Ir treinar basquete na quadra",
          class: 'bg-blue-500 text-white',
          userId: '1e87d5c9-25cb-426f-b508-d8db7d49ca8f',
          username: 'Rafael Pereira',
          category: 'extra',
        },
        dates: new Date(year, month, 5),
      },
      {
        key: 4,
        customData: {
          title: 'Levar o carro para lavar',
          class: 'bg-indigo-500 text-white',
          userId: '1e87d5c9-25cb-426f-b508-d8db7d49ca8f',
          username: 'Rafael Pereira',
          category: 'extra',
        },
        dates: new Date(year, month, 5),
      },
      {
        key: 5,
        customData: {
          title: 'Marcar reunião com Franciany',
          class: 'bg-teal-500 text-white',
          userId: '1e87d5c9-25cb-426f-b508-d8db7d49ca8f',
          username: 'Rafael Pereira',
          category: 'extra',
        },
        dates: new Date(year, month, 7),
      },
      {
        key: 6,
        customData: {
          title: "Ir para academia para treinar",
          class: 'bg-pink-500 text-white',
          userId: '1e87d5c9-25cb-426f-b508-d8db7d49ca8f',
          username: 'Rafael Pereira',
          category: 'extra', 
        },
        dates: new Date(year, month, 11),
      },
      {
        key: 7,
        customData: {
          title: 'Cozinhar a noite para o outro dia',
          class: 'bg-orange-500 text-white',
          userId: '1e87d5c9-25cb-426f-b508-d8db7d49ca8f',
          username: 'Rafael Pereira',
          category: 'extra',
        },
        dates: { months: 5, ordinalWeekdays: { 2: 1 } },
      },
      {
        key: 8,
        customData: {
          title: "Ir para academia para treinar",
          class: 'bg-pink-500 text-white',
          userId: '1e87d5c9-25cb-426f-b508-d8db7d49ca8f',
          username: 'Rafael Pereira',
          category: 'extra',
        },
        dates: new Date(year, month, 22),
      },
      {
        key: 9,
        customData: {
          title: 'Visitar minha vó em Gramado',
          class: 'bg-red-600 text-white',
          userId: '1e87d5c9-25cb-426f-b508-d8db7d49ca8f',
          username: 'Rafael Pereira',
          category: 'extra',
        },
        dates: new Date(year, month, 25),
      },
    ],
    user: {
      id: '1e87d5c9-25cb-426f-b508-d8db7d49ca8f',
      name: 'Rafael Pereira',
      email: 'rafaelsantospereira03@gmail.com',
      password: 'a607d6b2accd557f9e3f79f210bf66e5',
      office: 'administrador',
    },
  },
  getters: {

  },
  mutations: {
    GET_CATEGORY(state, payload) {
      const filterCategory = state.attributes.filter((attr) => attr.customData.category === payload);
      state.attributes = [...filterCategory];
    },
    GET_USERS(state, payload) {
      // state.users = payload;
    }
  },
  actions: {
    getUsersByGithub({ commit  }, payload) {
      axios
        .get(`https://api.github.com/users/${payload}`)
        .then((res) => {
          // commit(res.data, payload);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
});

export default store;