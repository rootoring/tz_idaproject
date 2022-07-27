<template>
  <div>
    <Header />
    <Nuxt /> 
    <Message />   
  </div>
</template>

<script>
  export default {
    name:'Default-layout',

    components:{
     Header: () => import ("@/components/Header.vue"),
     Message: () => import ("@/components/Message.vue")
    } 
  }
</script>
