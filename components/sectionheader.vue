<template>
    <div class="section_header ">
      <h1>{{ title }}</h1>
      <h3>{{ subtitle }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        default: ''
      }
    }
  };
  </script>
  

  