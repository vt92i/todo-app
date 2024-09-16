<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>To Do List</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="todo in dataToDo" :key="todo.id">
                <td>{{ todo.title }}</td>
                <td>{{ todo.description }}</td>
                <td>{{ todo.completed }}</td>
                <td>
                  <input
                    type="button"
                    class="btn btn-info btn-sm me-2"
                    value="Update"
                    @click="getDataToDo(todo)"
                  />
                  <input
                    type="button"
                    class="btn btn-danger btn-sm me-2"
                    value="Delete"
                    @click="thisdeleteToDo(todo.id)"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <h2>Form To Do</h2>
          <form @submit.prevent="onHandlerSubmit">
            <div class="mb-3">
              <label class="form-label">Title</label>
              <input type="text" class="form-control" v-model="title" />
            </div>
  
            <div class="mb-3">
              <label class="form-label">Description</label>
              <input type="text" class="form-control" v-model="description" />
            </div>
  
            <div class="mb-3" v-if="isUpdate == false">
              <label class="form-label">Category</label>
              <input type="text" class="form-control" v-model="category" />
            </div>
  
            <div class="mb-3" v-if="isUpdate">
              <label class="form-label">Status</label>
              <select class="form-select" v-model="completed">
                <option :value="true">Completed</option>
                <option :value="false">Not Completed</option>
              </select>
            </div>
  
            <button type="submit" class="btn me-2" :class="isUpdate ? 'btn-info' : 'btn-primary'">
              {{ isUpdate ? 'Update' : 'Tambah' }}
            </button>
  
            <button type="button" v-if="isUpdate" class="btn btn-danger" @click="clearInput">
              Cancel
            </button>
          </form>
        </div>
      </div>
      <button @click="logout" class="btn btn-danger">Logout</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import { onMounted, ref } from 'vue'
  import router from '@/router';

  export default {
    name: 'ToDO',
    setup() {
      const url = import.meta.env.VITE_BASE_URL
  
      const token = localStorage.getItem('token')

      console.log(token)
        
  
      const dataToDo = ref([])
      const title = ref('')
      const description = ref('')
      const idTodo = ref('')
      const category = ref('')
      const completed = ref('')
      const isUpdate = ref(false)
  
      const clearInput = () => {
        title.value = ''
        description.value = ''
        category.value = ''
        idTodo.value = ''
        isUpdate.value = false
      }
  
      const onHandlerSubmit = async () => {
        if (isUpdate.value == false) {
          await axios.post(
            url + '/api/todo',
            {
              title: title.value,
              description: description.value,
              category: category.value
            },
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          )
  
          alert('berhasil menambahkan data')
        } else {
          await axios.put(
            url + '/api/todo/' + idTodo.value,
            {
              title: title.value,
              description: description.value,
              completed: completed.value
            },
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          )
  
          alert('berhasil mengupdate data')
        }
  
        clearInput()
        getToDo()
      }
  
      const getDataToDo = async (objToDo) => {
        ;(title.value = objToDo.title),
          (description.value = objToDo.description),
          (category.value = objToDo.category),
          (idTodo.value = objToDo.id),
          (completed.value = objToDo.completed),
          (isUpdate.value = true)
      }
  
      const getToDo = async () => {
        try {
          const response = await axios.get(url + '/api/todo', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          dataToDo.value = response.data.data
        } catch (error) {
          console.error(error)
        }
      }
  
      const deleteToDo = async (id) => {
        await axios.delete(url + '/api/todo/' + id, {
          headers: { Authorization: `Bearer ${token}` }
        })
        alert('berhasil menghapus data')
        getToDo()
      }

      const logout = () => {
      // Hapus token dari localStorage
      localStorage.removeItem('token')

      // Redirect ke halaman login
      router.push({ name: 'Login' })
    }
  
      onMounted(() => {
        getToDo()
      })
  
      return {
        dataToDo,
        title,
        description,
        category,
        completed,
        isUpdate,
        clearInput,
        onHandlerSubmit,
        getDataToDo,
        deleteToDo,
        logout
      }
    }
  }
  </script>
  