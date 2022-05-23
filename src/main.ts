import { createApp } from 'vue';
import App from './App.vue';

import store from './store';

import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';

import './styles/index.css';

createApp(App)
.use(VCalendar)
.use(store)
.mount('#app')
