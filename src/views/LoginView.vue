<script setup>
import { ref } from 'vue'
import { login } from '@/services/auth.service'

const username = ref('')
const password = ref('')
</script>

<template>
  <head>
    
  </head>
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
    </form>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
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
