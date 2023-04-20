<template>
  <div class="main">
    <div class="content">
      <h2 style="margin-bottom: 25px">Запись пациента к врачу</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="doctor">Врач: </label>
          <select @change="showDoctors" id="doctor" v-model="doctorId">
            <option value="" selected disabled>Выбрать</option>
            <option
              v-for="(doctor, i) in doctors"
              :key="i"
              :value="doctor.lastName"
            >
              {{ doctor.lastName }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="patient">Пациент: </label>
          <select @change="showDoctors" id="patient" v-model="patientId">
            <option value="" selected disabled>Выбрать</option>
            <option
              v-for="(patient, i) in patients"
              :key="i"
              :value="patient.lastName"
            >
              {{ patient.lastName }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="date">Дата записи пацинта на прием: </label>
          <input
            @input="showDoctors"
            id="date"
            type="date"
            v-model="dateTime"
          />
        </div>
      </form>
      <!--  <div v-if="doctorsFilter.length">
        {{ doctorsFilter }}
      </div> -->
      <div class="buttons">
        <button
          class="buttonClass"
          style="cursor: pointer"
          :disabled="forClass.includes(timeZ)"
          :class="{
            active: forClass.includes(timeZ),
            activeN: timeChoose == timeZ,
          }"
          @click="getT(timeZ)"
          v-for="(timeZ, i) in timeFull"
          :key="i"
        >
          {{ timeZ }}
        </button>
      </div>
      <button @click="addVisit" style="margin-bottom: 10px; margin-top: 20px">
        Записаться на прием
      </button>
      <button @click="$router.push(`/`)">К главной странице</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doctorId: "",
      patientId: "",
      dateTime: "",
      doctorsFilter: [],
      patientFilter: [],
      timeFull: [],
      forClass: [],
      timeChoose: "",
    };
  },
  computed: {
    doctors() {
      // Получение списка врачей из хранилища Vuex
      return this.$store.getters.getDoctors;
    },
    patients() {
      // Получение списка пациентов из хранилища Vuex
      return this.$store.getters.getPatients;
    },
  },
  methods: {
    showDoctors() {
      this.forClass.length = 0;
      this.patientFilter = this.$store.getters.getAppointments.filter(
        (el) => el.Date == this.dateTime
      );
      this.patientFilter = this.patientFilter.filter(
        (el) => el.doctorId == this.doctorId
      );

      this.patientFilter = this.patientFilter.filter((el) =>
        this.forClass.push(el.Time)
      );
      if (
        this.doctorId !== "" &&
        this.patientId !== "" &&
        this.dateTime !== ""
      ) {
        this.doctorsFilter = this.$store.getters.getDoctors.filter(
          (el) => el.lastName == this.doctorId
        );
        this.doctorsFilter = this.doctorsFilter.filter(
          (el) => el.date == this.dateTime
        );

        this.timeFull = this.$store.getters.getTimeList.slice(
          this.$store.getters.getTimeList.indexOf(this.doctorsFilter[0]?.start),
          this.$store.getters.getTimeList.indexOf(this.doctorsFilter[0]?.end)
        );
      }
    },

    getT(e) {
      this.timeChoose = e;
    },

    addVisit() {
      const newRecord = {
        doctorId: this.doctorId,
        patientId: this.patientId,
        Time: this.timeChoose,
        Date: this.dateTime,
      };
      this.$store.commit("ADD_APPOINTMENT", newRecord);

      this.patientFilter = this.$store.getters.getAppointments.filter(
        (el) => el.Date == this.dateTime
      );
      this.patientFilter = this.patientFilter.filter(
        (el) => el.doctorId == this.doctorId
      );
      this.patientFilter = this.patientFilter.filter((el) =>
        this.forClass.push(el.Time)
      );
      this.timeChoose = "";
      alert("Запись на прием прошла успешно");
    },

    submitForm() {
      /* this.forClass.length = 0; */
    },
  },
};
</script>
<style scoped>
.buttons {
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  width: 400px;
}
.buttonClass {
  background-color: rgba(120, 115, 115, 0.156);
  color: black;
  margin: 7px;
}
.active {
  background-color: rgb(187, 174, 174);
  cursor: unset !important;
}
.activeN {
  background-color: rgb(245, 235, 123);
  cursor: unset !important;
}
.main {
  background-image: url("@/assets/main.png");
  height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  min-width: 400px;
  background-color: aliceblue;
}
</style>
