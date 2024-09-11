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
                <p class="mb-0">Edit Todo List</p>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label">Title</label>
                  <argon-input type="text" />
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label">Description</label>
                  <argon-input type="text" />
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label">Category</label>
                  <argon-input type="text" />
                </div>
                <div class="col-md-12 mt-2">
                  <argon-button color="success" variant="gradient"> Submit </argon-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import setNavPills from '@/assets/js/nav-pills.js'
import setTooltip from '@/assets/js/tooltip.js'
import ArgonInput from '@/components/ArgonInput.vue'
import ArgonButton from '@/components/ArgonButton.vue'

const body = document.getElementsByTagName('body')[0]

export default {
  name: 'editPage',
  data() {
    return {
      showMenu: false
    }
  },
  components: { ArgonInput, ArgonButton },

  mounted() {
    this.$store.state.isAbsolute = true
    setNavPills()
    setTooltip()
  },
  beforeMount() {
    this.$store.state.imageLayout = 'profile-overview'
    this.$store.state.showNavbar = false
    this.$store.state.showFooter = true
    this.$store.state.hideConfigButton = true
    body.classList.add('profile-overview')
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false
    this.$store.state.imageLayout = 'default'
    this.$store.state.showNavbar = true
    this.$store.state.showFooter = true
    this.$store.state.hideConfigButton = false
    body.classList.remove('profile-overview')
  }
}
</script>
