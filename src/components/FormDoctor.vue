<template>
  <div class="main">
    <div class="content">
      <h1 style="margin-bottom: 20px">Регистрация доктора</h1>

      <form @submit.prevent="submitForm">
        <input
          v-model="doctor.lastName"
          type="text"
          placeholder="Фамилия"
          required
        />
        <input
          v-model="doctor.firstName"
          type="text"
          placeholder="Имя"
          required
        />
        <input
          v-model="doctor.phone"
          type="text"
          placeholder="Телефон"
          required
        />
        <label for="start">Выберите время начала работы</label>
        <select id="start" v-model="doctor.start" required>
          <option value="" selected disabled>Выбрать время</option>
          <option
            v-for="(timeNow, i) in $store.getters.getTimeList"
            :key="i"
            :value="timeNow"
          >
            {{ timeNow }}
          </option>
        </select>
        <label for="end">Выберите время окончания работы</label>
        <select id="end" v-model="doctor.end" required>
          <option value="" selected disabled>Выбрать время</option>
          <option
            v-for="(timeNow, i) in $store.getters.getTimeList"
            :key="i"
            :value="timeNow"
          >
            {{ timeNow }}
          </option>
        </select>
        <label for="date">Выберите дату начала работы</label>
        <input
          required
          id="date"
          v-model="doctor.date"
          type="date"
          placeholder="Дата рождения"
        />
        <input v-model="doctor.surname" type="text" placeholder="Отчество" />
        <input v-model="doctor.email" type="email" placeholder="Почта" />
        <button type="submit">Создать доктора</button>
      </form>
      <button @click="$router.push(`/`)">К главной странице</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      doctor: {
        lastName: "",
        firstName: "",
        phone: "",
        start: "",
        end: "",
        birthDate: "",
        surname: "",
        email: "",
      },
    };
  },
  methods: {
    // Метод обработки отправки формы
    submitForm() {
      // Вызов действия сохранения пациента из хранилища Vuex
      this.$store.commit("saveDoctor", this.doctor);
      this.doctor = {
        lastName: "",
        firstName: "",
        phone: "",
        start: "",
        end: "",
        birthDate: "",
        surname: "",
        email: "",
      };
      this.show = true;
      alert("Доктор успешно добавлен");
    },
  },
};
</script>
<style>
label {
  margin-bottom: 4px;
}
button {
  color: #fff;
  text-decoration: none;
  user-select: none;
  background: rgb(212, 75, 56);
  padding: 0.7em 1.5em;
  outline: none;
}
button.knopka:hover {
  background: rgb(232, 95, 76);
}
button.knopka:active {
  background: rgb(152, 15, 0);
}

form {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
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
  padding: 24px 48px;
}
button {
  border: none;
  border-radius: 20px;
  color: #fff;
  text-decoration: none;
  user-select: none;
  background: rgb(212, 75, 56);
  padding: 0.7em 1.5em;
  outline: none;
}
button.knopka:hover {
  background: rgb(232, 95, 76);
}
button.knopka:active {
  background: rgb(152, 15, 0);
}
</style>
<style scoped></style>
