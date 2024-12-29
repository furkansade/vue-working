<template>
    <NavBar v-if="showLayout"/>
    <SideBar v-if="showLayout"/>
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
        computed: {
            showLayout() {
                return this.$route.name !== 'Login'
            }
        }
    }
</script>

<style scoped>

</style>