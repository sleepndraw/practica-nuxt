<template>
  <div class="dropdown-container" @click="toggleDropdown">
    <div class="dropdown">
      <div class="dropdown-trigger">
        <span>Dropdown</span>
        <Icon :name="arrowIcon" color="black" class="arrow-icon" />
      </div>
      <transition name="slide-fade">
        <div v-if="isOpen" class="dropdown-menu">
          <!-- Dropdown items here -->
          <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      const isOpen = ref(false);
  
      const toggleDropdown = () => {
        isOpen.value = !isOpen.value;
      };
  
      const arrowIcon = computed(() =>
        isOpen.value ? 'mingcute:up-fill' : 'mingcute:down-fill'
      );
  
      return {
        isOpen,
        toggleDropdown,
        arrowIcon
      };
    }
  };
  </script>
  
  <!-- <style lang="scss">
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-trigger {
    cursor: pointer;
    display: flex;
    align-items: center;
    
  }
  
  .arrow-icon {
    margin-left: 0.5rem;
  }
  
  .dropdown-menu {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    
  }
  
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }
  
  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  
  .dropdown-menu.show {
    display: block;
  }
  </style>
   -->