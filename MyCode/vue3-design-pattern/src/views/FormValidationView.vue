<template>
  <div>
    <h2>FormValidationView</h2>
    <FormValidation @submit="handleSubmit"></FormValidation>
  </div>
</template>
<script>
import FormValidation from '../components/FormValidation.vue';
export default {
  components: {
    FormValidation,
  },
  setup() {
    const handleSubmit = (form) => {
      console.log(form);
    };
    return {
      handleSubmit,
    };
  },
};
</script>
