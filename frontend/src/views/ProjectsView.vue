<template>

    <PageHeader title="Projeler" breadcrumb="Profil > Projeler" buttonText="Proje Ekle" buttonAction="#addProjectModal"/>

    <section class="section">
        <div class="row">
            <div class="table-responsive">
                <table id="sade_projects-table" class="table table-hover align-middle">
                <thead class="table-light text-center">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Teslim Tarihi</th>
                    <th scope="col">Proje</th>
                    <th scope="col">Durum</th>
                    <th scope="col">Öncelik</th>
                    <th scope="col">Proje Yöneticisi</th>
                    <th scope="col" class="text-center">İşlemler</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row" class="text-center">1</th>
                    <td class="fw-bold text-primary text-center">04.03.2025</td>
                    <td class="text-center">MVC Avukatlık</td>
                    <td class="text-center">
                        <span class="badge bg-success">AKTİF</span>
                    </td>
                    <td class="text-center">
                        <span class="badge bg-danger">Yüksek</span>
                    </td>
                    <td class="text-center">Sade Uckun</td>
                    <td class="text-center gap-2">
                        <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#projectDetails-1">
                        <i class="bi bi-eye"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-success mx-1" data-bs-toggle="modal" data-bs-target="#projectPeople<%= project._id %>">
                        <i class="bi bi-people"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger sade-delete-btn" data-id="<%= project._id %>" data-type="projects">
                        <i class="bi bi-trash"></i>
                        </button>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
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

    export default {
        name: 'ProjectsView',
        components: {
            PageHeader
        }
    }
</script>

<style scoped>

</style>