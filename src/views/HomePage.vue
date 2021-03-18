<template>
  <main>
    <h1>Home page</h1>
    <FormLogin  v-if="!isAuth" />
    <ListPost :postList="postList" />
  </main>
</template>

<script>
  import FormLogin from '../components/FormLogin'
  import ListPost from '../components/ListPost'

  export default {
    name: "HomePage",
    components: {
      FormLogin,
      ListPost
    },

    data(){
      return {
        isAuth: false,
        postList: undefined
      }
    },

    created(){
      // Subscribe to Store Mutation
      this.$store.subscribe((mutations) => {
        // Check mutation*/
        if( mutations.type === "ISAUTH" ){
          console.log( mutations.payload.data)
            // Change isAuth value
            this.isAuth = mutations.payload.data
        }
        else if( mutations.type === "POSTLIST" ){
            // Change isAuth value
            this.postList = mutations.payload.data;
        }
      })
    },

    methods:{
      fetchPostList(){
        this.$store.dispatch('getPosts')
      }
    },

    mounted(){
      this.fetchPostList()
    },

    destroyed(){
    }
  };
</script>