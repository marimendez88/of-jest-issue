import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { IonicVue } from '@ionic/vue';

createApp(App).use(IonicVue).use(router).mount('#app');
