import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectListView from "../views/ProjectListView.vue";
import DetailedProject from "../views/DetailedProject.vue";
import BlogListView from "../views/BlogListView.vue";
import DetailedBlog from "../views/DetailedBlog.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectListView,
  },
  {
    path: "/projects/:id",
    name: "detailedProject",
    component: DetailedProject,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogListView,
  },
  {
    path: "/blog/:id",
    name: "detailedBlog",
    component: DetailedBlog,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
