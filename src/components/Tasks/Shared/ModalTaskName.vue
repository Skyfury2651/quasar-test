<template>
  <div class="row q-mb-sm">
    <q-input
      :model-value="name"
      :rules="[val => !!val || 'Field is required']"
      @update:model-value="this.$emit('update:name', $event)"
      label="Name"
      class="col"
      ref="name"
      outlined
    >
      <template v-slot:append>
        <q-icon
          v-if="name"
          name="close"
          class="cursor-pointer"
          @click="this.$emit('update:name', '')"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['name'],
}
</script>

<style scoped>

</style>
