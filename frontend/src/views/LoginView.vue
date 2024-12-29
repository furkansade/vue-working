<template>
    <section class="min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a class="logo d-flex align-items-center w-auto">
                  <span class="d-none d-lg-block">Sade Software</span>
                </a>
              </div>

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Giriş Yap!</h5>
                    <p class="text-center small">Lütfen e-posta adresinizi ve şifrenizi giriniz!</p>
                  </div>

                  <form class="row g-3 sade_loginForm" @submit.prevent="submitForm">

                    <div class="col-12">
                        <label for="loginUserEmail" class="form-label">E-Posta</label>
                        <input type="email" name="email" class="form-control" id="loginUserEmail" v-model="formData.email" required>
                    </div>

                    <div class="col-12">
                      <label for="loginUserPassword" class="form-label">Password</label>
                      <input type="password" name="password" class="form-control" id="loginUserPassword" v-model="formData.password" required>
                    </div>

                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit">Giriş Yap!</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
</template>

<script>

    import { useAuthStore } from '@/stores/authStore.js'
    import { mapActions } from 'pinia';

    export default {
        name: 'LoginView',
        data() {
            return {
                formData: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions(useAuthStore, ['loginUser']),
            async submitForm() {
                try {
                    await this.loginUser(this.formData);
                    console.log('Login successfull!');
                } catch (error) {
                    console.error('Login error: ', error);
                }
                
            }
        }
    }
</script>

<style scoped>

</style>