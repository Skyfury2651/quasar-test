<template>
  <div class="row q-mb-sm">
    <q-input filled :model-value="dueDate" @update:model-value="this.$emit('update:due-date', $event)" mask="date" label="Due date" class="col">
      <template v-slot:append>
        <q-icon
          v-if="dueDate"
          name="close"
          @click="this.$emit('clear')"
          class="cursor-pointer"
        />
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
            <q-date :model-value="dueDate" @update:model-value="this.$emit('update:due-date', $event)">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat/>
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['dueDate']
}
</script>

<style scoped>

</style>
