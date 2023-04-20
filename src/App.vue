<template>
  <div>
    <router-view />
    <!--  <form-patient></form-patient>
    <form-doctor></form-doctor>
    <form-appointment></form-appointment>
    <form-list></form-list>
    <main-app></main-app> -->
  </div>
</template>

<script>
import FormPatient from "./components/FormPatient.vue";
import FormDoctor from "./components/FormDoctor.vue";
import FormAppointment from "./components/FormAppointment.vue";
import FormList from "./components/FormList.vue";
import MainApp from "./components/MainApp.vue";

export default {
  components: {
    FormPatient,
    FormDoctor,
    FormAppointment,
    FormList,
    MainApp,
  },
};
</script>
