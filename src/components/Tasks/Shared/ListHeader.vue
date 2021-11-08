<template>
  <q-banner dense inline-actions class="text-white text-center list-header" :class="color">
    <slot></slot>
  </q-banner>
</template>

<script>
export default {
  name: "ListHeader",
  props: ['color']
}
</script>

<style scoped>
.list-header{
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
