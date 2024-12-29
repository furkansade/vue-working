<template>
  <PageHeader title="Kullanıcılar" breadcrumb="Profil > Kullanıcılar" buttonText="Kullanıcı Ekle" buttonAction="#addUserModal" buttonColor="btn-success"/>
  <UsersTable :users="users"/>

    <!-- Add User Modal::Start -->
    <UsersAddModal />
    <!-- Add User Modal::End -->

</template>

<script>

import PageHeader from '@/components/PageHeader.vue'
import UsersTable from "@/components/Users/UsersTable.vue";
import UsersAddModal from "@/components/Users/UsersAddModal.vue";
import { useUserStore } from "@/stores/userStore.js";
import { mapState } from "pinia";

export default {
  name: 'UsersView',
  components: {
    PageHeader,
    UsersTable,
    UsersAddModal,
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState(useUserStore, ['users', 'isLoading']),
  },
}
</script>

<style scoped>

</style>