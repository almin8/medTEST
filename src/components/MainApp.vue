<template>
  <div class="main">
    <div class="header"><h1>ООО Медицинские Информационные Решения</h1></div>
    <div class="content">
      <button @click="$router.push(`/FormDoctor`)">Я доктор</button>
      <button @click="$router.push(`/FormPatient`)">Я пациент</button>
      <button @click="$router.push(`/FormAppointment`)">
        Записаться на прием
      </button>
      <button @click="$router.push(`/FormList`)">Список всех записей</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Nunito", sans-serif;
}
select {
  margin-bottom: 8px;
  padding: 6px 8px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid grey;
}
input {
  margin-bottom: 8px;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid grey;
}
</style>
<style scoped>
button {
  margin-bottom: 16px;
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
.header {
  position: absolute;
  top: 8px;
  left: 8px;
}
</style>
