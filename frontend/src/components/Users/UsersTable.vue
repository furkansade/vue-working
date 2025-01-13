<template>
  <!-- Kullanıcı Tablosu -->
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
      <tr v-for="(user, index) in users" :key="user._id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ user.firstName }} {{ user.lastName }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.role === 'admin' ? 'Yönetici' : 'Çalışan' }}</td>
        <td>
          <!-- Projeler Butonu -->
          <button
            class="btn btn-sm btn-outline-success"
            @click="showUserProjects(user._id)"
            data-bs-toggle="modal"
            data-bs-target="#userProjectsModal"
          >
            <i class="bi bi-kanban"></i>
          </button>
        </td>
        <td>
          <button class="btn btn-sm btn-outline-danger">
            <i class="bi bi-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Single User Projects Modal -->
  <div class="modal fade" id="userProjectsModal" tabindex="-1" aria-labelledby="userProjectsModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="userProjectsModalLabel">{{ selectedUser?.firstName }} {{ selectedUser?.lastName }} - Projeler</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ul v-if="selectedUser?.projects?.length" class="list-group">
            <li
              v-for="(project, index) in selectedUser.projects"
              :key="index"
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              {{ project.projectName }}
            </li>
          </ul>
          <p v-else>Bu kullanıcının projeleri yok.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/userStore';
import { mapState } from 'pinia';

export default {
  name: 'UsersTable',
  computed: {
    ...mapState(useUserStore, ['users', 'selectedUser']),
  },
  methods: {
    showUserProjects(userId) {
      const userStore = useUserStore();
      userStore.selectUser(userId);
    },
  },
  created() {
    const userStore = useUserStore();
    userStore.fetchUsers();
  },
};
</script>

<style scoped>
/* Stil dosyalarını burada ekleyebilirsiniz */
</style>
