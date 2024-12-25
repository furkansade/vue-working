<template>
    <div v-if="!loading">
        <PageHeader parentTitle="Projeler" parentTitleLink="Projects" :title="project.projectName" breadcrumb="Projeler > Single Proje" buttonText="Düzenle" buttonAction="#editProjectModal" buttonColor="btn-warning"/>
        <button class="btn btn-sm btn-danger" @click="goToBackProjects">Geri Git!</button>
        <h1>{{ project.projectName }}</h1>
        <hr>
        <h2>{{ project.projectDescription }}</h2>
        <hr>
        <h2>{{ project.projectExpireDate }}</h2>
        <hr>
        <!-- <h3 v-for="user in users" :key="user._id">{{ user }}</h3> -->
    </div>

    <div class="container" v-else>
        <p>Sade Software</p>
    </div>

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
        },
        async fetchProject() {
            const projectId = this.$route.params.id;
            try {
                const response = await fetch(`http://localhost:3000/api/v1/projects/${projectId}`) 
                const data = await response.json();
                
                this.project = data;

                this.loading = false;
            } catch (error) {
                console.error(error)
            }
        }
    },
    data() {
        return {
            project: null,
            loading: true,
        }
    },
    created() {
        this.fetchProject();
        // const projectId = this.$route.params.id;
        // this.project = projects.find(project => project._id === projectId)
    },
}
</script>

<style scoped>

</style>