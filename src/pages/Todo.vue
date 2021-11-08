<template>
  <q-page class="q-pa-md">
    <no-task v-if="!Object.keys(tasksTodo).length"></no-task>
    <tasks-todo v-else :tasks="tasksTodo"></tasks-todo>
    <hr v-if="Object.keys(tasksTodo).length && Object.keys(tasksCompleted).length">
    <tasks-completed :tasks="tasksCompleted" v-if="Object.keys(tasksCompleted).length"></tasks-completed>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn round color="primary" size="24px" icon="add" @click="showAddTask = !showAddTask"></q-btn>
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false"/>
    </q-dialog>
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'
import AddTask from 'components/Tasks/Modals/AddTask'
import TasksTodo from 'components/Tasks/TasksTodo'
import TasksCompleted from 'components/Tasks/TasksCompleted'
import NoTask from 'components/Tasks/NoTask'

export default {
  data() {
    return {
      showAddTask: false
    }
  },
  components: {TasksCompleted, TasksTodo, AddTask, NoTask},
  computed: {
    ...mapGetters('tasks', ['tasksCompleted', 'tasksTodo'])
  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  }
}
</script>

<style scoped>

</style>
