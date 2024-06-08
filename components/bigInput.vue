<template>
 
  <textarea v-model="text" :placeholder="placeholder"></textarea>
</template>

<script>
  export default {
    props: {
      placeholder: {
        type: String,
        // required: true
      }
    },
    data() {
    return {
      text: ''
    };
  }
};
  
</script>
