<template>
  <div>
    <h2>ProvideInjectMessage</h2>
    <p>{{ userName }}</p>
  </div>
</template>
<script>
export default {
  inject: ['userName'],
};
</script>
