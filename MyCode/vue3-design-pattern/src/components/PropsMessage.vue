<template>
  <p>From PropsMessage: {{ variant }}</p>
  <a>{{ `${authenticated ? 'Logout' : 'Login'}` }}</a>
  <p>{{ detail }}</p>
  <a-input placeholder="input text here" v-model:value="v"></a-input>
  <a-button type="primary" @click="handleClick">Click</a-button>
</template>
<script>
import { ref } from 'vue';
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
export default {
  name: 'PropsMessage',
  emits: {
    updateText: updateTextValidator,
  },
  props: {
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
  },
  setup(props, { emit }) {
    const v = ref('initial value');
    const handleClick = ($event) => {
      console.log($event);
      console.log('Child', v.value);
      emit('updateText', v.value);
    };

    return {
      handleClick,
      v,
    };
  },
};
</script>
