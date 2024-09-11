<script setup>
import { ref } from 'vue'
import { login } from '@/services/auth.service'

const username = ref('')
const password = ref('')
</script>

<template>
  <div>
    <form @submit="handleSubmit">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="button" @click="login(username, password)">Login</button>
    </form>
  </div>
</template>

<styles>

</styles>
