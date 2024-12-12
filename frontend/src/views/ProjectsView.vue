<template>

    <PageHeader title="Projeler" breadcrumb="Profil > Projeler" buttonText="Proje Ekle" buttonAction="#addProjectModal"/>

    <section class="section">
        <ProjectList :projects="projects" />
    </section>

    <!-- Add Project Modal::Start -->
    <div class="modal fade sade_addModal" id="addProjectModal" tabindex="-1" aria-labelledby="addProjectModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title" id="addProjectModalLabel">Yeni Proje Ekle</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Kapat</button>
                    <button type="submit" class="btn btn-sm btn-primary">Ekle</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Add Project Modal::End -->

</template>

<script>

    import PageHeader from '@/components/PageHeader.vue'
    import ProjectList from '@/components/Projects/ProjectList.vue'
    import projects from '@/db.js'

    export default {
        name: 'ProjectsView',
        components: {
            PageHeader,
            ProjectList
        },
        data() {
            return {
                projects: projects
            }
        }
    }
</script>

<style scoped>

</style>