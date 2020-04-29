import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// eslint-disable-next-line no-restricted-globals
const numberPolyfill = (value) => typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
Number.isInteger = Number.isInteger || numberPolyfill;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
