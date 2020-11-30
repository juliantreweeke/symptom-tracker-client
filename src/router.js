import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import { sessionStore } from "./utils/storage";
import { SESSION_STORAGE_KEYS, ROLES } from "./constants";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/",
    name: "login",
    component: () => import("./views/Login/Index.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./views/Clinician/Register/Index.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("./views/Clinician/Dashboard/Index.vue"),
    meta: {
      requiresClinicianAuth: true
    }
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("./views/Clinician/Settings/Index.vue"),
    meta: {
      requiresClinicianAuth: true
    }
  },
  {
    path: "/clients",
    name: "clients",
    component: () => import("./views/Clinician/Clients/ClientList/Index.vue"),
    meta: {
      requiresClinicianAuth: true
    }
  },
  {
    path: "/clients/create",
    name: "create client",
    component: () => import("./views/Clinician/Clients/CreateClient/Index.vue"),
    meta: {
      requiresClinicianAuth: true
    }
  },
  {
    path: "/clients/view/:id",
    name: "create client",
    component: () => import("./views/Clinician/Clients/ClientView/Index.vue"),
    meta: {
      requiresClinicianAuth: true
    }
  },
  {
    path: "/clients/edit/:id",
    name: "create client",
    component: () => import("./views/Clinician/Clients/EditClient/Index.vue"),
    meta: {
      requiresClinicianAuth: true
    }
  },
  {
    path: "/tests",
    name: "tests",
    component: () => import("./views/Clinician/Tests/TestList/Index.vue"),
    meta: {
      requiresClinicianAuth: true
    }
  },
  {
    path: "/test/create",
    name: "create new test",
    component: () => import("./views/Clinician/Tests/CreateTest/Index.vue"),
    meta: {
      requiresClinicianAuth: true
    }
  },
  {
    path: "/assessments",
    name: "assessments",
    component: () => import("./views/Client/Assessments/Index.vue"),
    meta: {
      requiresClientAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresClientAuth)) {
    console.log(localStorage.getItem);
    if (
      sessionStore.getItem(SESSION_STORAGE_KEYS.JWT) === null ||
      sessionStore.getItem(SESSION_STORAGE_KEYS.ROLE) !== ROLES.CLIENT
    ) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  }

  if (to.matched.some(record => record.meta.requiresClinicianAuth)) {
    console.log(localStorage.getItem);
    if (
      sessionStore.getItem(SESSION_STORAGE_KEYS.JWT) === null ||
      sessionStore.getItem(SESSION_STORAGE_KEYS.ROLE) !== ROLES.CLINICIAN
    ) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
