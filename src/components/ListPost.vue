<template>
  <ul>
      <li v-for="item of postList" :key="item._id">
          <p>{{item.title}}</p>
          <router-link v-bind:to="{ path: `/post/${item._id}` }">Lire l'article</router-link>
      </li>
  </ul>
</template>

<script>
/* import mapActions from 'vuex' */
  export default {
    name: "ListPost",
    components: {},
    props: [ 'postList' ],

    data(){
      return {}
    },

    created(){},

    methods:{},

    mounted(){},

    destroyed(){
    }
  };
</script>