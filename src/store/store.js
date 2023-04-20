// Модуль для работы с врачами
const doctorsModule = {
  state: {
    doctors: [],
    timeList: [
      "08:00",
      "08:30",
      "09:00",
      "09:30",
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
    ],
  },
  mutations: {
    // Мутация для добавления врача

    saveDoctor(state, doctor) {
      state.doctors.push(doctor);
    },
  },

  actions: {
    // Действие для сохранения врача
  },
  getters: {
    getDoctors(state) {
      return state.doctors;
    },
    getTimeList(state) {
      return state.timeList;
    },
  },
};

// Модуль для работы с пациентами
const patientsModule = {
  state: {
    patients: [], // Массив объектов пациентов
  },
  mutations: {
    // Мутация для добавления пациента
    ADD_PATIENT(state, patient) {
      state.patients.push(patient);
    },
  },
  actions: {
    // Действие для сохранения пациента
    savePatient({ commit }, patient) {
      // Выполнение запроса на сохранение пациента на сервере
      // и получение ответа
      // ...
      // После успешного сохранения вызываем мутацию ADD_PATIENT
      commit("ADD_PATIENT", patient);
    },
  },
  getters: {
    // Геттер для получения списка пациентов
    getPatients(state) {
      return state.patients;
    },
  },
};

// Модуль для работы с записями
const appointmentsModule = {
  state: {
    appointments: [],
    // Массив объектов записей
  },
  mutations: {
    // Мутация для добавления записи
    ADD_APPOINTMENT(state, appointment) {
      state.appointments.push(appointment);
      console.log(appointment);
    },
    CREATE_RECORD(state, appointment) {
      state.appointments.push(appointment);
    },
  },
  actions: {
    // Действие для сохранения записи
    saveAppointment({ commit }, appointment) {
      // Выполнение запроса на сохранение записи на сервере
      // и получение ответа
      // ...
      // После успешного сохранения вызываем мутацию ADD_APPOINTMENT
      commit("ADD_APPOINTMENT", appointment);
    },
    createRecord({ commit }, appointment) {
      commit("CREATE_RECORD", appointment);
    },
  },
  getters: {
    // Геттер для получения списка записей
    getAppointments(state) {
      return state.appointments;
    },
  },
};

// Создание хранилища Vuex
import Vue from "vue";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    doctors: doctorsModule,
    patients: patientsModule,
    appointments: appointmentsModule,
  },
});
