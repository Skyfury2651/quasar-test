<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <task v-for="(task, key) in tasks" v-ripple :key="task" :task="task" :id="key"></task>
      <div class="absolute-bottom text-center q-mb-lg">
        <q-btn round color="primary" size="24px" icon="add" @click="showAddTask = !showAddTask"></q-btn>
      </div>

      <q-dialog v-model="showAddTask">
        <add-task/>
      </q-dialog>
      <!--      <q-item v-for="task in tasks" v-ripple :key="task" :class="!task.completed ? 'bg-orange-1' : 'bg-green-3'">-->
      <!--        <q-item-section side top>-->
      <!--          <q-checkbox v-model="task.completed" :model-value="task.completed"></q-checkbox>-->
      <!--        </q-item-section>-->
      <!--        <q-item-section>-->
      <!--          <q-item-label>-->
      <!--            {{ task.name }}-->
      <!--          </q-item-label>-->
      <!--        </q-item-section>-->

      <!--        <q-item-section side top class="justify-center">-->
      <!--          <div class="row">-->
      <!--            <div class="column justify-center">-->
      <!--              <q-icon name="event" size="18px"></q-icon>-->
      <!--            </div>-->
      <!--            <div class="column">-->
      <!--              <q-item-label class="row justify-end" caption>-->
      <!--                {{ task.dueDate }}-->
      <!--              </q-item-label>-->
      <!--              <q-item-label caption>-->
      <!--                <small>{{ task.dueTime }}</small>-->
      <!--              </q-item-label>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </q-item-section>-->
      <!--      </q-item>-->
    </q-list>
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'
import Task from "components/Tasks/Task";
import AddTask from "components/Tasks/Modals/AddTask";

export default {
  data() {
    return {
      showAddTask: false
    }
  },
  components: {AddTask, Task},
  computed: {
    ...mapGetters('tasks', ['tasks'])
  }
}
</script>

<style scoped>

</style>
