<template>
  <div id="app">
    <HeaderApp/>
    
    <main>
      <router-view :key="$route.fullPath"></router-view>
    </main>
    <FooterApp/>
  </div>
</template>

<script>
  import HeaderApp from './statics/HeaderApp'
  import FooterApp from './statics/FooterApp'

  export default {
    name: 'App',
    components: {
      HeaderApp,
      FooterApp
    },

    created(){
      // Check user cookie
      this.$store.dispatch('checkUser')
    }
  }
</script>