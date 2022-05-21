<template>
  <p>From PropsMessage: {{ props.variant }}</p>
  <a>{{ `${props.authenticated ? 'Logout' : 'Login'}` }}</a>
  <p>{{ props.detail }}</p>
  <a-input placeholder="input text here" v-model:value="v"></a-input>
  <a-button type="primary" @click="handleClick">Click</a-button>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
const props = defineProps({
  variant: {
    required: true,
    validator: validateVariant,
  },
  authenticated: {
    type: Boolean,
    default: false,
  },
  detail: {
    type: Object,
    required: true,
  },
});
const emits = defineEmits({
  updateText: updateTextValidator,
});
const v = ref('initial value');
const handleClick = ($event) => {
  console.log($event);
  console.log('Child', v.value);
  emits('updateText', v.value);
};
</script>

<script>
export function validateVariant(variant) {
  if (!['success', 'warning', 'error'].includes(variant)) {
    throw new Error(
      `variant is required and must be either 'success', 'warning' or 'error'. You passed: ${variant}`
    );
  }

  return true;
}
export function updateTextValidator(data) {
  if (typeof data === 'number') {
    throw new Error(`
        data should have been a string.
        Got: ${data}
    `);
  }
  return true;
}
</script>
