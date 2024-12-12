<template>
  <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">

        <li v-for="link in sideBarLinks" :key="link.name" class="nav-item" >
            <RouterLink :to="{ name: link.name }" class="nav-link" :class="{ collapsed: $route.name !== link.name }">
            <i :class="link.icon"></i>
            <span>{{ link.label }}</span>
            </RouterLink>
        </li>

        <li class="nav-heading">YÖNETİM</li>

        </ul>
    </aside>
</template>

<script>
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
        }
    }
</script>

<style scoped>

</style>