<template>
    <div v-if="!loading">
        <PageHeader parentTitle="Projeler" parentTitleLink="Projects" :title="project.projectName" breadcrumb="Projeler > Single Proje" buttonText="Düzenle" buttonAction="#editProjectModal" buttonColor="btn-warning"/>
        <button class="btn btn-sm btn-primary mx-2" @click="goToBackProjects">Geri Git!</button>
        <button class="btn btn-sm btn-danger" @click="handleDeleteProject(project._id)">Projeyi Sil!</button>
        <h1>{{ project.projectName }}</h1>
        <hr>
        <h2>{{ project.projectDescription }}</h2>
        <hr>
        <h2>{{ project.projectExpireDate }}</h2>
        <hr>
        <!-- <h3 v-for="user in users" :key="user._id">{{ user }}</h3> -->
    </div>

    <div class="container" v-else>
        <p>Sade Software - Yükleniyor</p>
    </div>

</template>

<script>

import PageHeader from '@/components/PageHeader.vue';
import { useProjectStore } from '@/stores/projectStore.js'
import { mapState } from 'pinia'

export default {
    name: 'SingleProjectView',
    components: {
        PageHeader
    },
    created() {
        this.selectProject();
    },
    methods: {
        goToBackProjects() {
            this.$router.push({ name: 'Projects' })
        },
        selectProject() {
            const projectId = this.$route.params.id;
            this.project = this.selectedProject(projectId);
            this.loading = false;
        },
        async handleDeleteProject(projectId) {
            await this.deleteProject(projectId);
            this.$router.push({ name: 'Projects' });
        }
    },
    computed: {
        ...mapState(useProjectStore, ['selectedProject', 'deleteProject'])
    },
    data() {
        return {
            project: null,
            loading: true,
        }
    },
}
</script>

<style scoped>

</style>