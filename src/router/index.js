import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import Search from "@/views/Search";
import Watch from "@/views/Watch";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/watch",
    name: "Watch",
    component: Watch
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
