import { defineStore } from 'pinia';
import axios from 'axios'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: null,
    }),
    getters: {
        isAdmin: (state) => {
            return !!state.user && state.user.role === 'admin';
        }
    },
    actions: {
        async loginUser(userData) {
            console.log(userData);
            try {
                const response = await axios.post("http://localhost:3000/api/v1/auth/login", userData)
                // console.log("response: ", response);
                
                this.user = response.data.user;

                localStorage.setItem('user', JSON.stringify(this.user));

            } catch (error) {
                console.error("Error at login user: ", error.response.data.message);
                throw new Error(error.response.data.message || "Giriş başarısız!");
            }
        }
    }
})