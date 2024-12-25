<template>
  <div class="card">
      <div class="card-body">
          <h5 class="card-title">{{ project.projectName }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ project.projectExpireDate }}</h6>
          <p class="card-text">{{ project.projectDescription }}</p>
          <p class="card-text">
            <a href="#" class="btn" :class="projectStatus">{{ project.projectStatus === 'active' ? 'AKTİF' : 'PASİF' }}</a>
          </p>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'ProjectItem',
    props: {
      project: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      projectStatus() {
        if(this.project.projectStatus === 'active') {
          return 'btn-success'
        } else {
          return 'btn-danger'
        }
      }
    }
  }
</script>

<style scoped>

</style>