<template>

    <PageHeader title="Projeler" breadcrumb="Profil > Projeler" buttonText="Proje Ekle" buttonAction="#addProjectModal"/>

    <section class="section">
        <ProjectList :projects="paginatedProjects" />
        <Pagination :currentPage="currentPage" :totalPages="totalPages" @page-changed="updatePage" />
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
    import Pagination from '@/components/Pagination.vue'
    import projects from '@/db.js'

    export default {
        name: 'ProjectsView',
        components: {
            PageHeader,
            ProjectList,
            Pagination
        },
        data() {
            return {
                projects: projects,
                currentPage: 1,
                itemsPerPage: 6
            }
        },
        computed: {
            totalPages() {
                return Math.ceil(this.projects.length / this.itemsPerPage);
            },
            paginatedProjects() {
                const startIndex = (this.currentPage - 1) * (this.itemsPerPage);
                const endIndex = startIndex + this.itemsPerPage;
                return this.projects.slice(startIndex, endIndex);
            }
        },
        methods: {
            updatePage(page) {
                this.currentPage = page;
            }
        }
    }
</script>

<style scoped>

</style>