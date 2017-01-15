import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import UI from './components/app.vue';

document.addEventListener('DOMContentLoaded', function() {
  // eslint-disable no-new
  new Vue({
    el: '#app',
    render: (h) => h(UI),
  });
});
