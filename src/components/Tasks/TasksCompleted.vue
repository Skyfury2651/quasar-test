<template>
  <list-header color="bg-green-4">
    Completed
  </list-header>
  <q-list bordered separator>
    <task v-for="(task, key) in tasks" v-ripple :key="task" :task="task" :id="key"></task>
  </q-list>
</template>

<script>
import Task from 'components/Tasks/Task'
import ListHeader from 'components/Tasks/Shared/ListHeader'

export default {
  props: ['tasks'],
  components: {
    ListHeader,
    Task
  }
}
</script>

<style scoped>

</style>
