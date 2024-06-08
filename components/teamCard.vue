<template>
    <div class="team_card ">
        <div class="img_card"></div>
        <div class="card_text">
            <p>{{name}}</p>
            <small>{{subtitle}}</small>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: "",
    },
  }
};
</script>