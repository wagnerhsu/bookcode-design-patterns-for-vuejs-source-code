<template>
  <h2>PropsView</h2>
  <PropsMessage
    variant="success"
    :authenticated="security"
    :detail="detail"
    @updateText="handleUpdate">
    {{ message }}
  </PropsMessage>
</template>
<script>
import PropsMessage from '@/components/PropsMessage.vue';
import { ref, reactive } from 'vue';
export default {
  name: 'PropsView',
  components: {
    PropsMessage,
  },
  setup() {
    const security = ref(true);
    const obj = {
      name: 'Wagner',
      age: 20,
    };
    const detail = reactive(obj);
    const message = ref('success');
    const handleUpdate = (data) => {
      console.log('Parent:', data);
    };
    return {
      message,
      obj,
      security,
      detail,
      handleUpdate,
    };
  },
};
</script>
