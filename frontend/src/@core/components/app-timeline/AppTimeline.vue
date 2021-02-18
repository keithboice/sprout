<template>
  <ul class="app-timeline">
    <slot />
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.app-timeline {
  list-style: none;
  margin: 0;
  margin-left: 1rem;
  padding: 0;
  position: relative;
}
</style>
