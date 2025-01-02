<template>
  <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">

        <li v-for="link in filteredLinks" :key="link.name" class="nav-item" >
            <RouterLink :to="{ name: link.name }" class="nav-link" :class="{ collapsed: $route.name !== link.name }">
            <i :class="link.icon"></i>
            <span>{{ link.label }}</span>
            </RouterLink>
        </li>

        <li class="nav-heading">YÖNETİM</li>
        <font-awesome-icon icon="user" size="lg" />

        </ul>
    </aside>
</template>

<script>

    import { useAuthStore } from '@/stores/authStore.js'
    import { mapState } from 'pinia';

    export default {
        name: 'SideBar',
        data() {
            return {
                sideBarLinks: [
                    { name: "Dashboard", icon: "bi bi-person-circle", label: "Profil" },
                    { name: "Projects", icon: "bi bi-kanban", label: "Projeler" },
                    { name: "Reports", icon: "bi bi-bar-chart", label: "Analizler" },
                    { name: "Users", icon: "bi bi-people", label: "Kullanıcılar" },
                ]
            }
        },
        computed: {
            ...mapState(useAuthStore, ['isAdmin']),
            filteredLinks() {
                if (this.isAdmin) {
                    return this.sideBarLinks;
                } else {
                    return this.sideBarLinks.filter(link => link.name !== "Projects" && link.name !== "Users");
                }
            }
        }
    }
</script>

<style scoped>

</style>