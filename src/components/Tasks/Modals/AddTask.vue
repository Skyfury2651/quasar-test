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
import ModalHeader from '../Shared/ModalHeader'
import ModalTaskName from "components/Tasks/Shared/ModalTaskName";
import ModalDueDate from "components/Tasks/Shared/ModalDueDate";
import ModalDueTime from "components/Tasks/Shared/ModalDueTime";
import ModalButton from "components/Tasks/Shared/ModalButton";

export default {
  components: {
    ModalButton,
    ModalDueTime,
    ModalDueDate,
    ModalTaskName,
    ModalHeader
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
    ...mapActions('tasks', ['addTask']),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    },
    clearDateTime() {
      this.taskToSubmit['dueDate'] = ''
      this.taskToSubmit['dueTime'] = ''
    },
    logData() {
      console.log(123)
    }
  }
}
</script>

<style scoped>

</style>
