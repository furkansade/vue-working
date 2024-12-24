<template>
    <PageHeader parentTitle="Projeler" parentTitleLink="Projects" :title="project.projectName" breadcrumb="Projeler > Single Proje" buttonText="Düzenle" buttonAction="#editProjectModal" buttonColor="btn-warning"/>
    <button class="btn btn-sm btn-danger" @click="goToBackProjects">Geri Git!</button>
    <h1>{{ project.projectName }}</h1>
</template>

<script>

import PageHeader from '@/components/PageHeader.vue';
import projects from '@/db.js'

export default {
    name: 'SingleProjectView',
    components: {
        PageHeader
    },
    methods: {
        goToBackProjects() {
            this.$router.push({ name: 'Projects' })
        }
    },
    data() {
        return {
            project: null
        }
    },
    created() {
        const projectId = this.$route.params.id;
        this.project = projects.find(project => project._id === projectId)
    }
}
</script>

<style scoped>

</style>