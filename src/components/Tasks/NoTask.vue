<template>
  <q-banner class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="check" color="primary"></q-icon>
    </template>
    No task to do today!
    <template v-slot:action>
      <q-btn flat color="primary" label="Add task" @click="this.$root.$emit('showAddTask')"></q-btn>
    </template>

  </q-banner>
</template>

<script>
export default {
  name: "NoTask"
}
</script>

<style scoped>

</style>
