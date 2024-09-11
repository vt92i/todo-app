<template>
  <main>
    <div class="container-fluid">
      <div
        class="page-header min-height-300"
        style="
          background-image: url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
          margin-right: -24px;
          margin-left: -34%;
        "
      >
        <span class="mask bg-gradient-success opacity-6"></span>
      </div>
    </div>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">Add Todo List</p>
              </div>
            </div>
            <div class="card-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-md-12">
                    <label for="title" class="form-control-label">Title</label>
                    <argon-input type="text" v-model="title" id="title" />
                  </div>
                  <div class="col-md-12">
                    <label for="description" class="form-control-label">Description</label>
                    <argon-input type="text" v-model="description" id="description" />
                  </div>
                  <div class="col-md-12">
                    <label for="category" class="form-control-label">Category</label>
                    <argon-input type="text" v-model="category" id="category" />
                  </div>
                  <div class="col-md-12 mt-2">
                    <argon-button color="success" variant="gradient">Submit</argon-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, onBeforeUnmount } from 'vue'
import axios from 'axios'
import ArgonInput from '@/components/ArgonInput.vue'
import ArgonButton from '@/components/ArgonButton.vue'
import setNavPills from '@/assets/js/nav-pills.js'
import setTooltip from '@/assets/js/tooltip.js'

const title = ref('')
const description = ref('')
const category = ref('')

const submitForm = async () => {
  try {
    const response = await axios.post('https://963b-202-152-145-45.ngrok-free.app/api/todo', {
      title: title.value,
      description: description.value,
      category: category.value
    })
    console.log('Data successfully submitted:', response.data)

    // Optionally reset the form fields
    title.value = ''
    description.value = ''
    category.value = ''
  } catch (error) {
    console.error('Error submitting data:', error)
  }
}

const body = document.getElementsByTagName('body')[0]

onMounted(() => {
  // Set initial states
  setNavPills()
  setTooltip()
  body.classList.add('profile-overview')
})

onBeforeMount(() => {
  // Set additional states
  // Example: this.$store.state.imageLayout = 'profile-overview'  // not directly accessible in setup
})

onBeforeUnmount(() => {
  // Clean up
  body.classList.remove('profile-overview')
})
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 15px;
}
</style>
