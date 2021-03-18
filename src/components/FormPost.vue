<template>
  <form v-on:submit="getFormSubmit($event)">
      <label for="title">Titre</label>
      <input type="text" name="title" required minlength="5" v-model="titlePost">

      <label for="content">Contenu</label>
      <textarea name="content" required minlength="5" placeholder="Min. 5 caractères" v-model="contentPost"></textarea>
      <button type="submit">Login</button>
  </form>
</template>

<script>
/* import mapActions from 'vuex' */
  export default {
    name: "FormLogin",
    components: {},

    data(){
      return {
       titlePost: 'Le titre de mon post',
       contentPost: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veritatis qui neque, sit possimus repellat doloribus, nihil incidunt natus cum saepe quasi soluta nemo reprehenderit consequatur delectus esse et quae!'
      }
    },

    created(){
      this.$store.subscribe((mutations,/*  state */) => {
        // Check mutation*/
        if( mutations.type === "POSTADDED" ){
            // Check value
            if( mutations.payload.data === true ){
              this.titlePost = undefined;
              this.contentPost = undefined
            }
        }
      })
    },

    methods:{
      getFormSubmit(event){
        event.preventDefault();
        this.$store.dispatch('addPost', { title: this.titlePost, content: this.contentPost })
      }
    },

    mounted(){},

    destroyed(){
    }
  };
</script>