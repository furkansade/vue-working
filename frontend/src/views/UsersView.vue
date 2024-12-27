<template>
  <PageHeader title="Kullanıcılar" breadcrumb="Profil > Kullanıcılar" buttonText="Kullanıcı Ekle" buttonAction="#addUserModal" buttonColor="btn-success"/>
  <UsersTable />
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

  }
}
</script>

<style scoped>

</style>