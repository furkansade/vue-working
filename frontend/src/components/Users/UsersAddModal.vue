<template>
  <div class="modal fade sade_addModal" id="addUserModal" tabindex="-1" aria-labelledby="addUserModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="addUserModalLabel">Yeni Kullanıcı Ekle</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="row g-3 sade_addForm" @submit.prevent="submitForm">

            <div class="row mt-3">
              <div class="col">
                <label for="firstName" class="form-label">İsim</label>
                <input type="text" class="form-control" name="firstName" id="firstName" v-model="formData.firstName" required />
              </div>
              <div class="col">
                <label for="lastName" class="form-label">Soyisim</label>
                <input type="text" class="form-control" name="lastName" id="lastName" v-model="formData.lastName" required />
              </div>
            </div>

            <div class="row mt-2">
              <div class="col">
                <label for="email" class="form-label">E-posta</label>
                <input type="text" class="form-control" name="email" id="email" v-model="formData.email" required />
              </div>
              <div class="col">
                <label for="password" class="form-label">Şifre</label>
                <input type="password" class="form-control" name="password" id="password" v-model="formData.password" required />
              </div>
            </div>

            <div class="row mt-2">
              <div class="col">
              <label for="role" class="form-label">Rol</label>
              <select class="form-select" name="role" id="role" v-model="formData.role" required>
                <option value="" disabled selected>Rol Seçin</option>
                <option value="employee">Çalışan</option>
                <option value="admin">Yönetici</option>
                <option value="guest">Misafir</option>
              </select>
            </div>
            </div>

            <div class="row mt-3">
              <div class="col">
              <button type="submit" class="btn btn-sm btn-primary">Ekle</button>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Kapat</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import { useUserStore } from '@/stores/userStore';
import { mapActions } from 'pinia';
 
export default {
  name: "UsersAddModal",
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
        projects: [],
      }
    }
  },
  methods: {
    ...mapActions(useUserStore, ['createUser']),
    async submitForm() {
      try {
        await this.createUser(this.formData);
        console.log('created user succesfull');

        this.formData = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          role: '',
          projects: [],
        }

        // close the modal not jquery
        const modal = new Modal(document.getElementById('addUserModal'));
        modal.hide();

        
      } catch (error) {
        console.error('User created error: ', error);        
      }
    }
  },
  computed: {
    ...mapActions(useUserStore, ['fetchUsers']),
  }
}
</script>

<style scoped>

</style>