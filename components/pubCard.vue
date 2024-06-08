<template>
  <div class="pub_card">
    <div class="card_info">
      <div class="card_text">
        <h5>{{ title }}</h5>
        <small>{{ subtitle }}</small>
      </div>
      <nuxt-link class="link" to="#">
        <small>{{ linkTitle }}</small><icon name="mingcute:external-link-line"></icon>
      </nuxt-link>
    </div>

    <div class="date"><h3>{{ date }}</h3></div>
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
    linkTitle: {
      type: String,
      default: "go to article",
    },
    date: {
      type: String,
      default: "",
    },
  },
};
</script>
