<template>
    <div @click="toHome">
      1111
    </div>
</template>
<script>
  export default{
    data(){
        return {}
    },
    methods:{
      toHome(){
        this.$router.push('home')
      }
    }
  }
</script>