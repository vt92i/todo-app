<script setup>
import { ref } from 'vue'
import { login } from '@/services/auth.service'

const username = ref('')
const password = ref('')
</script>

<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <h1 style="color: red">TO DO LIST APP BY JJ TEAM</h1>
    <div class="form-container">
      <h2>Login</h2>
      <form @submit="handleSubmit" class="form">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="button" @click="login(username, password)" class="login-btn">Login</button>
        <p>Need an account?</p>
        <RouterLink to="/register">Register Here</RouterLink>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 100vw;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  width: 100%;
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
