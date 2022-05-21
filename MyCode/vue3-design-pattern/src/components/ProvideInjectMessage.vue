<template>
  <div>
    <h2>ProvideInjectMessage</h2>
    <p>{{ userName }}</p>
  </div>
</template>
<script setup>
import { inject } from 'vue';
const userName = inject('userName');
</script>
