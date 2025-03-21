import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './routers';
import store from './store';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
