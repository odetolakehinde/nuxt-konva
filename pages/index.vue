<template>
  <client-only>
    <v-stage :config="configKonva">
      <v-layer>
        <v-circle :config="configCircle"></v-circle>
      </v-layer>
    </v-stage>
  </client-only>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Konva stage configuration
const configKonva = ref({
  width: 800,
  height: 600
})

// Circle configuration
const configCircle = ref({
  x: 200,
  y: 200,
  radius: 50,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4,
  draggable: true
})
</script>
