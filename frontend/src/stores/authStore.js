import { defineStore } from 'pinia';
import axios from 'axios'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: null,
    }),
    getters: {

    },
    actions: {
        async createUser(newUserData) {
            console.log(newUserData);
            try {
                const response = await axios.post("http://localhost:3000/api/v1/users/new", newUserData)
                console.log("response: ", response);
                
                // this.user = response.data;
            } catch (error) {
                console.error("Error at create user: ", error);
            }
        }
    }
})