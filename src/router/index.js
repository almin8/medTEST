import Vue from "vue";
import VueRouter from "vue-router";
import MainApp from "@/components/MainApp.vue";
import FormPatient from "@/components/FormPatient.vue";
import FormDoctor from "@/components/FormDoctor.vue";
import FormAppointment from "@/components/FormAppointment.vue";
import FormList from "@/components/FormList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainApp",
    component: MainApp,
  },
  {
    path: "/FormPatient",
    name: "FormPatient",
    component: FormPatient,
  },
  {
    path: "/FormDoctor",
    name: "FormDoctor",
    component: FormDoctor,
  },
  {
    path: "/FormAppointment",
    name: "FormAppointment",
    component: FormAppointment,
  },
  {
    path: "/FormList",
    name: "FormList",
    component: FormList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
