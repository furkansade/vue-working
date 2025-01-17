<template>
    <PageHeader title="Projeler" breadcrumb="Profil > Projeler" buttonText="Proje Ekle" buttonAction="#addProjectModal" buttonColor="btn-success" />

    <div v-if="isLoading" class="text-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <section v-else class="section">
        <!-- Projeler Listesi -->
        <ProjectList :projects="paginatedProjects" />

        <!-- Sayfalama -->
        <PaginationWidget :currentPage="currentPage" :totalPages="totalPages" @page-changed="updatePage" />
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
                    <form class="row g-3 sade_addForm" @submit.prevent="submitForm">
                        <div class="col-md-12">
                            <label for="projectName" class="form-label">Proje İsmi</label>
                            <input type="text" class="form-control" name="projectName" id="projectName" v-model="formData.projectName" required />
                        </div>

                        <div class="col-md-12">
                            <label for="projectExpireDate" class="form-label">Proje Son Teslim Tarihi</label>
                            <input type="date" class="form-control" name="projectExpireDate" id="projectExpireDate" v-model="formData.projectExpireDate" />
                        </div>

                        <div class="col-md-12">
                            <label for="projectDescription" class="form-label">Proje Açıklaması</label>
                            <textarea class="form-control" name="projectDescription" id="projectDescription" v-model="formData.projectDescription" rows="3"></textarea>
                        </div>

                        <div class="col-md-12">
                            <label for="projectStatus" class="form-label">Proje Durumu</label>
                            <select class="form-select" name="projectStatus" id="projectStatus" v-model="formData.projectStatus" required>
                                <option value="" disabled>Durum</option>
                                <option value="active">Aktif</option>
                                <option value="inactive">Pasif</option>
                            </select>
                        </div>

                        <div class="col-md-12">
                            <label for="assignedUsers" class="form-label">Proje Çalışanları</label>
                            <select class="form-select" name="assignedUsers" id="assignedUsers" v-model="formData.users" multiple>
                                <option value="Ahmet Demir">Ahmet Demir</option>
                                <option value="Mehmet Yılmaz">Mehmet Yılmaz</option>
                                <option value="Ayşe Kaya">Ayşe Kaya</option>
                            </select>
                            <div class="form-text">CTRL | CMD ile birden fazla seçim yapabilirsiniz.</div>
                        </div>

                        <div class="col-md-6">
                            <button type="submit" class="btn btn-sm btn-primary">Ekle</button>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Kapat</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Add Project Modal::End -->
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import ProjectList from '@/components/Projects/ProjectList.vue'
import PaginationWidget from '@/components/widgets/PaginationWidget.vue'
import { useProjectStore } from '@/stores/projectStore.js'
import { mapState } from 'pinia'

export default {
    name: 'ProjectsView',
    components: {
        PageHeader,
        ProjectList,
        PaginationWidget
    },
    data() {
        return {
            currentPage: 1,
            itemsPerPage: 6,
            formData: {
                projectName: '',
                projectExpireDate: '',
                projectDescription: '',
                projectStatus: '',
                users: []
            }
        }
    },
    computed: {
        ...mapState(useProjectStore, ['projects', 'isLoading', 'fetchProjects', 'createProject']),
        totalPages() {
            return Math.ceil(this.projects.length / this.itemsPerPage);
        },
        paginatedProjects() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.projects.slice(startIndex, endIndex);
        }
    },
    methods: {
        updatePage(page) {
            this.currentPage = page;
        },
        submitForm() {
            this.createProject(this.formData);
            this.formData = {
                projectName: '',
                projectExpireDate: '',
                projectDescription: '',
                projectStatus: '',
                users: []
            }
        },
        async fetchProjects() {
            const projectStore = useProjectStore();
            await projectStore.fetchProjects();
        },
    },
}
</script>
