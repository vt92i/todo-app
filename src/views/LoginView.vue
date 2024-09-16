<script setup>
import { ref } from 'vue'
import { login } from '@/services/auth.service'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
</script>

<template>
  <div class="form-container">
    <form @submit="handleSubmit" class="form">
      <h2>Login</h2>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="button" @click="login(username, password)" class="login-btn">Login</button>
      <p>Don't have account?</p>
      
    </form>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
}

.form {
  width: 300px;
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
