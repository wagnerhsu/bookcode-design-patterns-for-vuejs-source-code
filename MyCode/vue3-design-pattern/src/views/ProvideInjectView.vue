<template>
  <div>
    <h2>ProvideInjectView</h2>
    <hr />
    <ProvideInjectMessage></ProvideInjectMessage>
    <a-button type="primary" @click="handleClick">Click</a-button>
  </div>
</template>
<script>
import { ref, provide } from 'vue';
import ProvideInjectMessage from '@/components/ProvideInjectMessage.vue';
export default {
  components: {
    ProvideInjectMessage,
  },
  setup() {
    const myName = ref('Wagner');
    const handleClick = () => (myName.value = 'Test');
    provide('userName', myName);
    return {
      myName,
      handleClick,
    };
  },
};
</script>
