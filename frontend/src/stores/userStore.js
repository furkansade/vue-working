import { defineStore } from 'pinia';
import axios from 'axios'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        users: [],
        isLoading: false
    }),
    getters: {
        selectedUser: (state) => {
            return (id) => state.users.find((user) => user._id === id)
        }
    },
    actions: {
        async fetchUsers() {
            this.isLoading = true;
            try {
                const response = await axios.get("https://localhost:3000/api/v1/users");
                this.users = response.data;
                console.log("this.users:", this.users);
            } catch (e) {
                console.error(e);
            } finally {
                this.isLoading = false;
            }
        }
    }
})