<template>
    <PageHeader title="Kullanıcılar" breadcrumb="Profil > Kullanıcılar" buttonText="Kullanıcı Ekle" buttonAction="#addUserModal" buttonColor="btn-success"/>
</template>

<script>

    import PageHeader from '@/components/PageHeader.vue'

    export default {
        name: 'UsersView',
        components: {
            PageHeader
        }
    }
</script>

<style scoped>

</style>