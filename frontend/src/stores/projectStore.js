import { defineStore } from "pinia";
import axios from "axios";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [],
    isLoading: false,
  }),
  getters: {
    selectedProject: (state) => {
        return (id) => state.projects.find((project) => project._id === id)
    }
  },
  actions: {
    async fetchProjects() {
      this.isLoading = true;
      try {
        // await new Promise((resolve) => setTimeout(resolve, 3000))
        const response = await axios.get(
          "http://localhost:3000/api/v1/projects"
        );
        this.projects = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async createProject(newProjectData) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/projects",
          newProjectData
        );
        this.projects.push(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteProject(projectId) {
      try {
        await axios.delete(`http://localhost:3000/api/v1/projects/${projectId}`);
        this.projects = this.projects.filter(project => project._id !== projectId);
      } catch (error) {
        console.error(error);
      }
    },
  }
});
