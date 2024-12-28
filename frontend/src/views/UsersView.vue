<template>
  <PageHeader title="Kullanıcılar" breadcrumb="Profil > Kullanıcılar" buttonText="Kullanıcı Ekle" buttonAction="#addUserModal" buttonColor="btn-success"/>
  <UsersTable :users="users"/>

    <!-- Add User Modal::Start -->
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

                  

                        <div class="col-md-6">
                            <button type="submit" class="btn btn-sm btn-primary">Ekle</button>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Kapat</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Add User Modal::End -->

</template>

<script>

import PageHeader from '@/components/PageHeader.vue'
import UsersTable from "@/components/Users/UsersTable.vue";
import { useUserStore } from "@/stores/userStore.js";
import { mapState } from "pinia";

export default {
  name: 'UsersView',
  components: {
    PageHeader,
    UsersTable
  },
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
  computed: {
    ...mapState(useUserStore, ['users', 'isLoading']),
  },
  methods: {
    submitForm() {
      console.log("this.formdata: ", this.formData)
    }
  }
}
</script>

<style scoped>

</style>