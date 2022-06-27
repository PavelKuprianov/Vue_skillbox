import Vue from 'vue';
import App from './App.vue';

import { first, second } from './script';
import mix from './alertFunc';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alert(first + second);
mix('Привет', ', мир!');
