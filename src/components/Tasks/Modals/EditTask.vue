<template>
  <q-card>
    <modal-header>
      <template v-slot:modal-title>Add Task</template>
    </modal-header>
    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <modal-task-name v-model:name="taskToSubmit.name" ref="modalTaskName"></modal-task-name>
        <modal-due-date v-model:due-date="taskToSubmit.dueDate" @clear="clearDateTime"></modal-due-date>
        <modal-due-time v-model:due-time="taskToSubmit.dueTime" :due-date="taskToSubmit.dueDate"></modal-due-time>
      </q-card-section>

      <modal-button></modal-button>
    </form>
  </q-card>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: ['task', 'id'],
  components: {
    'modal-button': require('src/components/Tasks/Shared/ModalButton').default,
    'modal-due-time': require('src/components/Tasks/Shared/ModalDueTime').default,
    'modal-due-date': require('src/components/Tasks/Shared/ModalDueDate').default,
    'modal-task-name': require('src/components/Tasks/Shared/ModalTaskName').default,
    'modal-header': require('src/components/Tasks/Shared/ModalHeader').default,
  },
  data() {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false,
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
      this.$emit('close')
    },
    clearDateTime() {
      this.taskToSubmit['dueDate'] = ''
      this.taskToSubmit['dueTime'] = ''
    },
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task)
  }
}
</script>

<style scoped>

</style>
