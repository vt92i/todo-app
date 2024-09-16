<script setup>
import { register } from '@/services/auth.service'
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
    <h1 style="color: red">TO DO LIST APP BY JJ TEAM</h1>
    <div class="sign-up-form">
      <form class="form-container" @submit.prevent="signUp">
        <h2>Sign Up</h2>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" :disabled="isLoading">
          {{ isLoading ? 'Memproses...' : 'Sign Up' }}
        </button>
        <p>Already an user?</p>
        <RouterLink to="/login">Login Here</RouterLink>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
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
