<template>
  <div class="main">
    <div class="content">
      <h1 style="margin-bottom: 20px">Регистрация пациента</h1>
      <!-- Форма создания пациента -->
      <form @submit.prevent="submitForm">
        <!-- Поля формы -->
        <input
          v-model="patient.lastName"
          type="text"
          placeholder="Фамилия"
          required
        />
        <input
          v-model="patient.firstName"
          type="text"
          placeholder="Имя"
          required
        />
        <input
          v-model="patient.patronymic"
          type="text"
          placeholder="Отчество"
          required
        />
        <input
          v-model="patient.snils"
          type="number"
          placeholder="СНИЛС"
          required
        />
        <input
          v-model="patient.birthDate"
          type="date"
          placeholder="Дата рождения"
        />
        <input
          v-model="patient.address"
          type="text"
          placeholder="Место жительства"
        />
        <!-- Кнопка отправки формы -->
        <button type="submit">Создать пациента</button>
      </form>
      <button @click="$router.push(`/`)">К главной странице</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      patient: {
        // Объект пациента
        lastName: "",
        firstName: "",
        patronymic: "",
        snils: "",
        birthDate: "",
        address: "",
      },
    };
  },
  methods: {
    // Метод обработки отправки формы
    submitForm() {
      // Вызов действия сохранения пациента из хранилища Vuex
      this.$store.dispatch("savePatient", this.patient);
      this.patient = {
        lastName: "",
        firstName: "",
        patronymic: "",
        snils: "",
        birthDate: "",
        address: "",
      };
      alert("Пациент успешно добавлен");
    },
  },
};
</script>
<style scoped>
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
