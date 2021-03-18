<template>
  <header class="flexBox flexColumn">
      <nav>
          <h1>VueJS Boiler plate by <a href="https://dwsapp.io" target="_blank">dwsapp.io</a></h1>
          <ul v-if="isAuth" class="flexBox">
              <li>
                  <router-link v-bind:to="{ path: '/' }">Home</router-link>
              </li>
              <li>
                  <router-link v-bind:to="{ path: '/add/post' }">Ajouter un article</router-link>
              </li>
          </ul>
      </nav>
  </header>
</template>

<script>
    export default {
        name: 'HeaderApp',
        components: {},
        data(){
            return { 
                isAuth: false
            }
        },
        methods: { },
        mounted(){ },

        created(){
            // Subscribe to Store Mutation
            this.$store.subscribe((mutations) => {
                // Check mutation*/
                if( mutations.type === "ISAUTH" ){
                    console.log( mutations.payload.data)
                    // Change isAuth value
                    this.isAuth = mutations.payload.data
                }
            })
        }
    }
</script>
