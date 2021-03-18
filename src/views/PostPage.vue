<template>
  <main v-if="postData">
    <h1>{{postData.title}}</h1>
    <p>{{postData.content}}</p>

    <ListComment :commentList="postData.comments" />
  </main>
</template>

<script>
  import ListComment from '../components/ListComment'
  export default {
    name: "PostPage",
    components: {
      ListComment
    },

    data(){
      return {
        postData: undefined
      }
    },
    created(){
      // Fect post data from the Strore
      this.$store.dispatch('getOnePost', this.$route.params.id);

      // Subscribe to store mutation
      this.$store.subscribe((mutations,/*  state */) => {
        // Check mutation*/
        if( mutations.type === "SINGLEPOST" ){
            // Update display
            this.postData = mutations.payload.data;
        }
      })
    },

    methods:{},
    destroyed(){}
  };
</script>