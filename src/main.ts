import { createApp } from 'vue';
import App from './App.vue';

import store from './store';

import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';

import './styles/index.css';

createApp(App)
.use(VCalendar, {
  screens: {
    tablet: '576px',
    laptop: '992px',
    desktop: '1200px',
  },
})
.use(store)
.mount('#app')
