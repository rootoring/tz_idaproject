<template>
  <main>
    <Article v-for="product,index of products" :key="index" :product="product" @delete="deleteProduct(index)"/>
    <!-- В свойство key присваивать index не рекоммендуется, но в данном случае решил сделать так -->
  </main>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'

  export default {
    name:'Product-list',
    components:{
      Article: () => import ('@/components/Article')
    },
    computed:{
      ...mapGetters({
        products: 'main/getProduct',
      }) 
    },
    methods:{
      ...mapMutations({
        productDelete:"main/productDelete",
        stayProduct:'main/productStatic'
      }),      
      deleteProduct(index){
        this.productDelete(index)
      }
    },

    mounted(){
      this.stayProduct();
    }
  }

</script>

<style lang="scss">
  main{
    display: flex;
    margin-left: 15px;
    width: 90%;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      margin-left: 0;
      width: 100%;

    }             
  }
</style>