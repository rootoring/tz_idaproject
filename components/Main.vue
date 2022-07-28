<template>
  <div class="wrapper">
    <MainForm />
    <ProductList />
  </div>
</template>

<script>

  export default {
    name:'Main-app',

    components:{
      MainForm: () => import ('@/components/MainForm.vue'),
      ProductList: () => import ('@/components/ProductList.vue')
    } 
  }
</script>

<style scoped lang="scss">
  .wrapper{
    display: flex;
    width: 100%;
    align-items:flex-start;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items:center;
    }  
    @media (max-width: 768px) {
      width: 100%;
      margin-top:15px;
      margin-right: 15px;
    }        
  }
</style>