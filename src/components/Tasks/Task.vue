<template>
  <q-item :class="!task.completed ? 'bg-orange-1' : 'bg-green-3'">
    <q-item-section side top>
      <q-checkbox @click="updateTask({ id: id, updates: { completed: !task.completed}})" :model-value="task.completed"
                  v-ripple></q-checkbox>
    </q-item-section>
    <q-item-section>
      <q-item-label :class="{'text-strikethrough' : task.completed}">
        {{ task.name }} {{ id }}
      </q-item-label>
    </q-item-section>

    <q-item-section side top class="justify-center">
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="18px"></q-icon>
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>
            {{ task.dueDate }}
          </q-item-label>
          <q-item-label caption>
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn
          flat
          round
          dense
          color="primary"
          icon="edit"
          @click="showEditTask = true">
        </q-btn>
        <q-btn
          flat
          round
          dense
          color="red"
          icon="delete"
          @click="promptToDelete">
        </q-btn>
      </div>
    </q-item-section>
    <q-dialog v-model="showEditTask">
      <edit-task @close="showEditTask = false" :task="task" :id="id"/>
    </q-dialog>
  </q-item>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  components: {
    'edit-task': require('components/Tasks/Modals/EditTask').default
  },
  props: ['task', 'id'],
  data() {
    return {
      showEditTask: false
    }
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    promptToDelete() {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure to delete ?',
        ok: {
          push: true
        },
        cancel: {
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        this.deleteTask(this.id);
      }).onCancel(() => {
        console.log('>>>>> Cancel')
      }).onDismiss(() => {
        console.log('Finally')
      })
    },
  }
}
</script>

<style scoped>
.text-strikethrough {
  text-decoration: line-through;
}
</style>
