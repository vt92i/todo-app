<script setup>
import { register } from '@/services/auth.service.js'
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useCounterStore()
const router = useRouter()

const username = ref('')
const name = ref('')
const password = ref('')
const error = ref('')
const isLoading = ref(false)

const signUp = async () => {
  isLoading.value = true
  error.value = ''

  try {
    const data = await register(username.value, name.value, password.value)
    authStore.setToken(data.token)
    console.log('Sign up berhasil:', data)
    router.push('/login')
  } catch (err) {
    error.value = err.response?.data?.message || 'Terjadi kesalahan saat sign up'
    console.error('Error saat sign up:', err)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="sign-up-form">
      <h2>Sign Up</h2>
      <form @submit.prevent="signUp">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="name">name:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" :disabled="isLoading">
          {{ isLoading ? 'Memproses...' : 'Sign Up' }}
        </button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<style scoped>
.sign-up-form {
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
