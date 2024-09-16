<template>
  <div>
    <h1>To-Do List</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <!-- Jika tasks kosong, tampilkan data statis -->
        <tr v-if="tasks.length === 0">
          <td colspan="3">No tasks available</td>
        </tr>
        <!-- Jika ada data tasks, tampilkan seperti biasa -->
        <tr v-else v-for="(task, index) in tasks" :key="index">
          <td>{{ task.id }}</td>
          <td>{{ task.name }}</td>
          <td>{{ task.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'todolist-table',
  data() {
    return {
      tasks: []
    }
  },
  mounted() {
    this.fetchTasks()
  },
  methods: {
    fetchTasks() {
      const token = '$2b$10$7CisU34r7Qjf8siwHa0ZDOYwHithznw3PdH2dZLENI5TvWVbgz7eS' // Gantilah dengan token yang valid
      const url = 'https://localhost:3500/api/tables' // URL backend Express kamu

      fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((data) => {
          this.tasks = data // Set data ke tasks
        })
        .catch((error) => {
          console.error('Error fetching tasks:', error)
        })
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #000000;
  padding: 8px;
}

th {
  text-align: left;
}
</style>
