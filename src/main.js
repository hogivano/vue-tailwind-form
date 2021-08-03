import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/styles/css/tailwind.css';
import '@/assets/styles/css/base.css';
import '@/assets/styles/less/responsive.less';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
