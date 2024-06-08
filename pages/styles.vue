<template>
  <body class="">
    <section
      class="styles lg:mx-36 md:mx-14 sm:mx-8 mx-4 px-4 my-4 sm:my-4 md:my-8 lg:my-12 xl:my-16 2xl:my-20 xl:mx-44 2xl:mx-60"
    >
      <sectionheader title="//style" subtitle="colors, shapes & typography" />

      <div class="center_container">
        <div class="container">
          <h2  class="section_title">colors.</h2>

          <div data-aos="fade-left" class="colors_showcase">
            <div
              v-for="(colorItem, index) in colorItems"
              :key="index"
              class="color_item"
            >
              <div class="color_tags">
                <div class="color_name">{{ colorItem.name }}</div>
                <div class="color_code">{{ colorItem.code }}</div>
                <div :class="['color_subtitle', getColorClass(colorItem.code)]">
                  {{ colorItem.sub }}
                </div>
              </div>

              <div class="svg_container" v-html="colorItem.svg"></div>
            </div>
          </div>
        </div>
        <article data-aos="fade-up" class="secondary_colors">
          <div class="colors_box">
            <div class="box">
              <div class="square bg-ffd_green-400"></div>
              <div class="square bg-ffd_green-300"></div>
            </div>
            <div class="box">
              <div class="square bg-ffd_blue-500"></div>
              <div class="square bg-ffd_blue-400"></div>
              <div class="square bg-ffd_blue-300"></div>
            </div>
            <div class="box">
              <div class="square bg-gray-600"></div>
              <div class="square bg-gray-500"></div>
              <div class="square bg-gray-400"></div>
              <div class="square bg-gray-300"></div>
              <div class="square bg-gray-200"></div>
              <div class="square bg-gray-100"></div>
            </div>
          </div>
          <div class="info">
            <h4>secondary colors</h4>
            <p>
              These are the secondary colors to support our design system. Mainly used as backgrounds or stroke colors for our components.
            </p>
          </div>
        </article>
        
        <article class="type_showcase">
          <div data-aos="fade-right" class="text_sizes">
            <h2 class="section_title">typography.</h2>
            <h1>Very big header / h1</h1>
            <h2>Big header / h2</h2>
            <h3>medium header / h3</h3>
            <h4>small header /h4</h4>
            <h5>subtitle / h5</h5>
            <p>body</p>
            <small>tiny text</small>
          </div>
          <div data-aos="fade-up" class="info">
            <h4>tips</h4>
            <p>
              These are the standard text sizes for this design. Hierarchy must
              be respected and bigger sizes are preferred for wider screens and
              resolutions. Body font weight is light (300) for cleaner
              readability.
            </p>
          </div>
          <p></p>
        </article>
        <div data-aos="fade-up" class="use_cases">
          <div class="title pb-2">
            <h2>text & color use cases</h2>
            <p>these are some use cases for color and typography.</p>
          </div>
          <div data-aos="fade-right" class="demo_cards">
            <div class="demo_card">
              <h3>This is some title text</h3>
              <p>
                Chalk and cheese goat roquefort. Cheddar say cheese jarlsberg
                cheese on toast cheese and biscuits hard cheese parmesan
                pecorino. Dolcelatte st. agur blue cheese manchego melted cheese
                cheese on toast cheese and wine melted cheese roquefort. Cheese
                and biscuits feta lancashire blue castello airedale fromage
                frais bocconcini cut the cheese. Goat chalk and cheese.
              </p>
            </div>
            <div class="demo_card demo_blue">
              <h3>This is some title text</h3>
              <p>
                Chalk and cheese goat roquefort. Cheddar say cheese jarlsberg
                cheese on toast cheese and biscuits hard cheese parmesan
                pecorino. Dolcelatte st. agur blue cheese manchego melted cheese
                cheese on toast cheese and wine melted cheese roquefort. Cheese
                and biscuits feta lancashire blue castello airedale fromage
                frais bocconcini cut the cheese. Goat chalk and cheese.
              </p>
            </div>
            <div class="demo_card demo_dark">
              <h3 class="demo_dark">This is some title text</h3>
              <p>
                Chalk and cheese goat roquefort. Cheddar say cheese jarlsberg
                cheese on toast cheese and biscuits hard cheese parmesan
                pecorino. Dolcelatte st. agur blue cheese manchego melted cheese
                cheese on toast cheese and wine melted cheese roquefort. Cheese
                and biscuits feta lancashire blue castello airedale fromage
                frais bocconcini cut the cheese. Goat chalk and cheese.
              </p>
            </div>
            <div class="demo_card demo_green">
              <h3 class="demo_dark">This is some title text</h3>
              <p>
                Chalk and cheese goat roquefort. Cheddar say cheese jarlsberg
                cheese on toast cheese and biscuits hard cheese parmesan
                pecorino. Dolcelatte st. agur blue cheese manchego melted cheese
                cheese on toast cheese and wine melted cheese roquefort. Cheese
                and biscuits feta lancashire blue castello airedale fromage
                frais bocconcini cut the cheese. Goat chalk and cheese.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<style lang="sass">
@import 'public/assets/main.sass'
</style>

<script>
export default {
  data() {
    return {
      colorItems: [
        {
          name: "green_primary",
          code: "#98CE00",
          sub: "details, academic section",
          svg: `<svg
              width="300"
              height="283"
              viewBox="0 0 383 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M218 283H0L82.3235 141.5L164.647 0H382.647L300.323 141.5L218 283Z"
                fill="#98CE00"
              />
            </svg>`,
        },
        {
          name: "blue_primary",
          code: "#1C74D9",
          sub: "brand color, landing section",
          svg: `<svg
              width="300"
              height="283"
              viewBox="0 0 383 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M218 283H0L82.3235 141.5L164.647 0H382.647L300.323 141.5L218 283Z"
                fill="#1C74D9"
              />
            </svg>`,
        },
        {
          name: "black_primary",
          code: "#272932",
          sub: "brand color, contrast",
          svg: `<svg
              width="300"
              height="283"
              viewBox="0 0 383 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M218 283H0L82.3235 141.5L164.647 0H382.647L300.323 141.5L218 283Z"
                fill="#272932"
              />
            </svg>`,
        },
        // Add more color items as needed
      ],
    };
  },
  methods: {
    // @ts-ignore
    getColorClass(colorCode) {
      switch (colorCode) {
        case "#98CE00":
          return "text-green_primary";
        case "#1C74D9":
          return "text-blue_primary";
        default:
          return "";
      }
    },
  },
};
</script>