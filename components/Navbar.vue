<template>
  <header>
    <nav class="nav_menu">
      <ul>
        <div class="logo-full"><NuxtImg  src="../public/assets/img/logo-full.svg" /></div>
        <div class="logo-half"><NuxtImg src="../public/assets/img/logo-half.svg" /></div>
        <div class="logo-small"><NuxtImg src="../public/assets/img/logo-small.svg" /></div>
        <div :class="['menu-toggle',{'hidden': !isMenuOpen}]" @click="toggleMenu">
          <Icon v-if="!isMenuOpen" name="material-symbols:menu" />
          <Icon v-else name="material-symbols:close" />
        </div>
        <div :class="['links', { 'menu-hidden': !isMenuOpen }]">
          <li><nuxt-link to="/">About</nuxt-link></li>
          <li><nuxt-link to="/components">Components</nuxt-link></li>
          <li><nuxt-link to="/styles">Styles</nuxt-link></li>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      
    },
  },
};
</script>

