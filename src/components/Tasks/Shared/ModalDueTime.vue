<template>
  <div class="row q-mb-sm">
    <q-input filled :model-value="dueTime" @update:model-value="this.$emit('update:due-time',$event)" mask="time"
             v-if="dueDate" label="Due time"
             :rules="[val => !!val]"
             class="col">
      <template v-slot:append>
        <q-icon
          v-if="dueTime"
          name="close"
          @click="this.$emit('update:due-time','')"
          class="cursor-pointer"
        />
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time :model-value="dueTime" @update:model-value="this.$emit('update:due-time',$event)">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat/>
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['dueTime', 'dueDate']
}
</script>

<style scoped>

</style>
