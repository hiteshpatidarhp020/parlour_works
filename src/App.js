// src/main.js or src/main.ts
import Vue from "vue";
import App from "./App.vue";
import "./path-to-your-global-styles/global.scss"; // Import global styles

new Vue({
  render: (h) => h(App),
}).$mount("#app");
