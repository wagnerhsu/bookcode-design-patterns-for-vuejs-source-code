<template>
  <div class="home">
    <h2>Home View</h2>
    <p>{{ reversedGreeting }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const greeting = ref('Hello, World');
const reversedGreeting = computed(() => {
  return greeting.value.split('').reverse().join('');
});
</script>
