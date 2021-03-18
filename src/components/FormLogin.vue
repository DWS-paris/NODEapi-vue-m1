<template>
  <form v-on:submit="getFormSubmit($event)">
      <label for="email">Email</label>
      <input type="email" name="email" required minlength="5" v-model="loginEmail">

      <label for="password">Mot de passe</label>
      <input type="password" name="password" required minlength="5" v-model="loginPassword">

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
       loginEmail: 'julien@dwsapp.io',
       loginPassword: 'azertyuiop'
      }
    },

    created(){},

    methods:{
      getFormSubmit(event){
        event.preventDefault();
        this.$store.dispatch('logUser', { email: this.loginEmail, password: this.loginPassword })
      }
    },

    mounted(){},

    destroyed(){
    }
  };
</script>