import Vue from "vue";
import VueYoutube from "vue-youtube";
import linkify from "vue-linkify";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSearch);

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/styles/style.scss";

Vue.config.productionTip = false;
Vue.component(`font-awesome-icon`, FontAwesomeIcon);
Vue.directive("linkified", linkify);
Vue.use(VueYoutube);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
