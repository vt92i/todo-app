<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>To Do List</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Title
              </th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                Description
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Category
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="w-30">
                <div class="d-flex px-3 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">John Michael</h6>
                  </div>
                </div>
              </td>
              <td class="w-50">
                <p
                  class="text-xs font-weight-bold mb-0"
                  style="word-wrap: break-word; white-space: normal"
                >
                  Lorem ipsum dolor sir amet adipiscing Lorem ipsum dolor sir amet adipiscing Lorem
                  ipsum dolor sir amet adipiscing Lorem ipsum dolor sir amet adipiscing Lorem ipsum
                  dolor sir amet adipiscing
                </p>
              </td>
              <td class="w-10 align-middle text-center text-sm">
                <h7>Makanan</h7>
              </td>
              <td class="w-10 align-middle text-center">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'authors-table'
}
</script>
