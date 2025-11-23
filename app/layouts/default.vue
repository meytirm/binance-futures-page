<template>
  <div>
    <header>
      <div @click="colorMode.preference = 'light'">
        day
      </div>
      <div @click="colorMode.preference = 'dark'">
        night
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>

<style scoped>

</style>
