<template>
    <div class="home_card">
      <div class="card_info">
        <div class="card_text">
          <h5>{{ title }}</h5>
          <small>{{ subtitle }}</small>
        </div>
        <div class="card_body">{{body}}</div>
        <div v-if="icon" ><Icon class="home_icon" :name="icon" /></div>
      </div>
  
      
    </div>
  </template>
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        default: "",
      },
      body: {
        type: String,
        default: "",
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