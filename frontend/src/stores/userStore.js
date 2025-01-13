import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [],
    selectedUser: null, // Seçilen kullanıcıyı saklamak için
    isLoading: false
  }),
  getters: {
    getUserById: (state) => {
      return (id) => state.users.find((user) => user._id === id);
    }
  },
  actions: {
    async fetchUsers() {
      this.isLoading = true;
      try {
        const response = await axios.get('http://localhost:3000/api/v1/users');
        this.users = response.data;
      } catch (error) {
        console.error('Kullanıcılar alınırken hata oluştu:', error);
      } finally {
        this.isLoading = false;
      }
    },
    async createUser(newUserData) {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/users/new", newUserData)
            this.users.push(response.data);
            return response.data;
        } catch (error) {
            console.error('created user error:', error);
            throw error;
        }
    },
    selectUser(userId) {
      this.selectedUser = this.getUserById(userId);
    }
  }
});