<template>
    <header id="header" class="header fixed-top d-flex align-items-center">
        <div class="d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo d-flex align-items-center">
                <img src="../assets/img/logo.png" alt="">
                <span class="d-none d-lg-block fs-5">{{ companyName }}</span>
            </a>
        </div><!-- End Logo -->

        <nav class="header-nav ms-auto">
        <ul class="d-flex align-items-center">

            <li class="nav-item dropdown pe-3">

            <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                <span class="d-none d-md-block dropdown-toggle ps-2">{{ user.firstName }} {{ user.lastName }}</span>
            </a><!-- End Profile Iamge Icon -->

            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li class="dropdown-header">
                <h6>{{ user.firstName }} {{ user.lastName }}</h6>
                <span>{{ user.role }}</span>
                </li>
                <li>
                <hr class="dropdown-divider">
                </li>
                <li>
                <a class="dropdown-item d-flex align-items-center" href="#">
                    <i class="bi bi-box-arrow-right"></i>
                    <span>Çıkış Yap!</span>
                </a>
                </li>

            </ul><!-- End Profile Dropdown Items -->
            </li><!-- End Profile Nav -->

        </ul>
        </nav><!-- End Icons Navigation -->
    </header><!-- End Header -->
</template>

<script>

    import { useAuthStore } from '@/stores/authStore.js'
    import { mapState } from 'pinia';

    export default {
        name: 'NavBar',
        data() {
            return {
                companyName: "Sade Software",
            }
        },
        computed: {
            ...mapState(useAuthStore, ['user'])
        }
    }
</script>

<style scoped>

</style>