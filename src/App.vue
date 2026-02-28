<template>
  
  <AppNavbar />

    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  
  <div class="container-fluid">
    <router-view/>
  </div>

  <AppFooter />
</template>


<script>
  import AppNavbar from '@/components/layout/AppNavbar.vue'
  import AppFooter from '@/components/layout/AppFooter.vue'

  export default {
    components: {
      AppNavbar,
      AppFooter
    }
  }
</script>

