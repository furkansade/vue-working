<template>
  <div class="card">
      <div class="card-body">
          <h5 class="card-title">{{ project.projectName }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ project.projectExpireDate }}</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p class="card-text">
            <a href="#" class="btn" :class="projectStatus">{{ project.projectStatus === 'active' ? 'AKTİF' : 'PASİF' }}</a>
          </p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
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