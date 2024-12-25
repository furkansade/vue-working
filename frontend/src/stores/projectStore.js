import { defineStore } from 'pinia'
import axios from 'axios'

export const useProjectStore = defineStore('projectStore', {
    state: () => ({
        projects: [],
    }),
    actions: {
        async fetchProjects() {
            const response = await axios.get('http://localhost:3000/api/v1/projects');

            this.projects = response.data;
            
        }
    }
})