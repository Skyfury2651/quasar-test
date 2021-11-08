<template>
  <list-header color="bg-orange-4">
    Todo
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
    Task,
    ListHeader
  }
}
</script>

<style scoped>

</style>
