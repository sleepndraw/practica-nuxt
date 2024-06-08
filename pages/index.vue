<template>
  <body class="home">
    <div
      class="home lg:mx-36   my-4 sm:my-4 md:my-8 lg:my-12 xl:my-16 2xl:my-20 xl:mx-44 2xl:mx-60"
    >
      <div class="home_hero">
        <div class="hero_contents">
          <h1>Welcome.</h1>
          <h2>// this is our branding solution.</h2>
        </div>
      </div>
      <div  class="key_features">
        <h3>Our key features.</h3>
        <div data-aos="fade-up"  class="home_cards">
            <homeCard
        v-for="(homeCard, index) in homeCards"
        :key="index"
        :title="homeCard.title"
        :subtitle="homeCard.subtitle"
        :body="homeCard.body"
        :icon="homeCard.icon"
      ></homeCard>
        </div>
      </div>
    </div>
  </body>
</template>
<style lang="sass">
@import 'public/assets/main.sass'
</style>
<script>
export default {
  data() {
    return {
      homeCards: [
        {
          title: "Clean design system",
          subtitle: " ",
          body: "Our design system aims for visual cleanliness through a proper hierarchy or components and the use of colors under our brand guidelines to better identify each section or theme.",
          icon: "material-symbols-light:cleaning-bucket-outline-sharp",
        },
        {
          title: "Simple shapes",
          subtitle: " ",
          body: "We aim for simpler geometric shapes to build the designs, easier to adapt to any format and application.",
          icon: "fluent-mdl2:shapes",
        },
        {
          title: "Clean design system",
          subtitle: " ",
          body: "Our design system aims for visual cleanliness through a proper hierarchy or components and the use of colors under our brand guidelines to better identify each section or theme.",
          icon: "material-symbols-light:cleaning-bucket-outline-sharp",
        },
      ],
    };
  },
};
</script>
