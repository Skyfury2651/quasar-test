<template>
  <q-card-section class="row">
    <div class="text-h6"><slot name="modal-title"></slot></div>
    <q-space/>
    <q-btn flat round dense icon="close" v-close-popup/>
  </q-card-section>
</template>

<script>
export default {
  name: "AddTask"
}
</script>

<style scoped>

</style>
