<template>
    <NavBar />
    <SideBar />
    <RouterView />
</template>

<script>

    import NavBar from '@/components/NavBar.vue'
    import SideBar from '@/components/SideBar.vue'

    export default {
        name: 'App',
        components: {
            NavBar,
            SideBar
        },
    }
</script>

<style scoped>

</style>