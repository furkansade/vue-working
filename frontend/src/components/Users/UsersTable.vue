<template>
<!-- Table -->
  <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">İsim Soyisim</th>
      <th scope="col">Eposta</th>
      <th scope="col">Rol</th>
      <th scope="col">Projeler</th>
      <th scope="col">İşlemler</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in users" :key="user.id">
      <th scope="row">1</th>
      <td>{{ user.firstName }} {{ user.lastName }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.role === 'admin' ? 'Yönetici' : 'Çalışan' }}</td>
      <td>BUTON</td>
      <td>
        <button class="btn btn-sm btn-outline-danger">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "UsersTable",
  props: {
    users: {
      type: Array,
      default: () => ([]),
    }
  }
}
</script>

<style scoped>

</style>