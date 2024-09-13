<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
</script>

<template>
  <div>
    <form>
      <div style="display: flex; color: aquamarine">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>
