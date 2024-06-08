export default {
  // Global page headers
  head: {
    title: 'My Nuxt Project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  pageTransition: {
  
    mode: 'out-in'
  },
  layoutTransition: {
  
    mode: 'out-in'
  },
  // Global CSS
  css: [
    // 'aos/dist/aos.css'
    // Add your global CSS files here
  ],

  // Plugins to run before rendering page
  plugins: [
    // Add your plugins here
    // require('postcss-nested'),
    // require('autoprefixer')
    // { src: '~/plugins/aos.js', mode: 'client' }
  ],
  
  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 400, // offset (in px) from the original trigger point
    delay: 15, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    },
  // Auto import components
  components: true,

  // Modules for dev and build
  buildModules: [
    // Add your build modules here

  ],

  // Modules
  modules: 
    [// Add your build modules here
    '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-icon', "@nuxt/image", 'nuxt-aos'],
  
  
  googleFonts:{
    families:{
      Archivo: true,
    },
  },

  // Build configuration
  build: {
    // Add your build configurations here
    postcss: {
      postcssOptions: require('./postcss.config.js',),
     
    },
  },
  
}