<template>
  <ul>
      <li v-for="item of commentList" :key="item._id">
          <p>{{item.content}}</p>
      </li>
  </ul>
</template>

<script>
/* import mapActions from 'vuex' */
  export default {
    name: "ListComment",
    components: {},
    props: [ 'commentList' ],

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