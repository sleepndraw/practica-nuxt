<template>
    <div class="input_container">
        <input v-model="message" :placeholder="placeholder" />
    <span v-if="icon" class="icon"><Icon :name="icon" /></span>
    </div>
</template>
<script>
  export default {
    props: {
      placeholder: {
        type: String,
        required: true
      },
      icon: {
      type: String,
      default: null
    }
    },
    data() {
    return {
      text: ''
    };
  }
};
  
</script>