<template>
    <button >{{title}} <slot></slot></button>
   
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    }
  };
</script>