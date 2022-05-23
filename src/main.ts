import { createApp } from 'vue';
import App from './App.vue';

import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';

import './styles/global.scss';
createApp(App)
.use(VCalendar)
.mount('#app')
