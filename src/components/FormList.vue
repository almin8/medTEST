<template>
  <div class="main">
    <div class="content">
      <h1 style="margin-bottom: 25px">Список всех записей на прием</h1>
      <div>
        Сортировать по:
        <button class="but" @click="filter_FIO_doctor">ФИО врача</button>
        <button class="but" @click="filter_FIO_patient">ФИО Пациент</button>
        <button class="but" @click="filter_date">Дата записи</button>
      </div>

      <table>
        <th>Доктор</th>
        <th>Пациент</th>
        <th>Время</th>
        <th>Дата</th>
        <tr v-for="(ap, i) in appointments" :key="i">
          <td>{{ ap.doctorId }}</td>
          <td>{{ ap.patientId }}</td>
          <td>{{ ap.Time }}</td>
          <td>{{ ap.Date }}</td>
        </tr>
      </table>

      <div v-if="!appointments.length">На данный момент записей нет</div>
      <div style="margin-top: 50px">
        <button @click="$router.push(`/`)">К главной странице</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appointments: [],
      someIf: 1,
    };
  },
  methods: {
    getAppointments() {
      this.appointments = this.$store.getters.getAppointments;
    },
    filter_FIO_doctor() {
      if (this.someIf == 1) {
        this.appointments = this.appointments.sort((a, b) =>
          a.doctorId.localeCompare(b.doctorId)
        );
        this.someIf = 0;
      } else {
        this.appointments = this.appointments.sort((a, b) =>
          b.doctorId.localeCompare(a.doctorId)
        );
        this.someIf = 1;
      }
    },
    filter_FIO_patient() {
      if (this.someIf == 1) {
        this.appointments = this.appointments.sort((a, b) =>
          a.patientId.localeCompare(b.patientId)
        );
        this.someIf = 0;
      } else {
        this.appointments = this.appointments.sort((a, b) =>
          b.patientId.localeCompare(a.patientId)
        );
        this.someIf = 1;
      }
    },
    filter_date() {
      if (this.someIf == 1) {
        this.appointments = this.appointments.sort((a, b) =>
          a.Date.localeCompare(b.Date)
        );
        this.appointments = this.appointments.sort((a, b) =>
          a.Time.localeCompare(b.Time)
        );
        this.someIf = 0;
      } else {
        this.appointments = this.appointments.sort((a, b) =>
          b.Date.localeCompare(a.Date)
        );
        this.appointments = this.appointments.sort((a, b) =>
          b.Time.localeCompare(a.Time)
        );
        this.someIf = 1;
      }
    },
  },
  mounted() {
    this.getAppointments();
  },
};
</script>

<style scoped>
.but {
  padding: 5px;
  background-color: rgb(176, 161, 41);
  margin-left: 6px;
}
table {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
td,
th {
  padding: 16px;
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
  align-items: center;
  justify-content: center;
}
</style>
