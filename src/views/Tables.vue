<template>
  <div class="py-4 container-fluid">
    <router-link to="/login">Logout</router-link>
    <div class="row">
      <div class="col-12">
        <authors-table />
      </div>
    </div>
    <router-link to="/add">Add Task</router-link>
  </div>
</template>

<script>
import AuthorsTable from '@/views/components/ToDoListTable.vue'

export default {
  name: 'authors-tables',
  components: {
    AuthorsTable
  },
  data() {
    return {}
  }
}
</script>
