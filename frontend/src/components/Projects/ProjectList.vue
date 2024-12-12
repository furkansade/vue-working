<template>
  <div class="row">
      <div class="col-lg-4" v-for="project in projects" :key="project._id">
          <ProjectItem :project="project"/>
      </div>
  </div>
</template>

<script>

  import ProjectItem from '@/components/Projects/ProjectItem.vue'

  export default {
    name: 'ProjectList',
    components: {
      ProjectItem
    },
    props: {
      projects: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>

<style scoped>

</style>