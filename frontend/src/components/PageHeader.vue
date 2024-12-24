<template>
    <div class="row">
        <div class="col-md-8">
            <div class="pagetitle">
            <h1 style="text-transform: capitalize;">{{ title }}</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <RouterLink :to="{ name: 'Dashboard' }">Profil</RouterLink>
                    </li>
                    <li v-if="parentTitle" class="breadcrumb-item" style="text-transform: capitalize;">
                        <RouterLink :to="{ name: parentTitleLink }">{{ parentTitle }}</RouterLink>
                    </li>
                    <li class="breadcrumb-item" style="text-transform: capitalize;">{{ title }}</li>
                </ol>
            </nav>
            </div>
        </div>

        <div class="col-md-4 text-end mb-3">
            <button type="button" class="btn btn-sm shadow-sm" :class="buttonColor" data-bs-toggle="modal" :data-bs-target="buttonAction">
                <i class="bi bi-plus-circle"></i> {{ buttonText }} 
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PageHeader',
        props: {
            parentTitle:{
                type: String,
                required: false
            },
            parentTitleLink:{
                type: String,
                required: false
            },
            title: {
                type: String,
                required: true
            },
            breadcrumb: {
                type: String,
                required: true,
            },
            parentPage: {
                type: String,
                required: false
            },
            parentUrl: {
                type: String,
                required: false
            },
            buttonText: {
                type: String,
                default: null
            },
            buttonAction: {
                type: String,
                default: null
            },
            buttonColor: {
                type: String,
                required: true,
                default: 'btn-success'
            }
        }
    }
</script>

<style scoped>

</style>