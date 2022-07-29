<template>
  <main>
      <transition-group name="list" tag="div">
    <Article v-for="product,index of products" :key="product.id" :product="product" @delete="deleteProduct(index)"/>
    </transition-group>
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
      this.stayProduct()
    }
  }

</script>

<style lang="scss">
  main{
    margin-left: 15px;
    width: 90%;
    @media (max-width: 768px) {
      justify-content: center;
      margin-left: 0;
      width: 100%;
    }  
    div {
    width: 100%;
    display: flex;
    margin-left: 15px;
    flex-wrap: wrap;
    }


.list-enter-active,
.list-leave-active {
  transition: all 1s ease;

}
.list-enter,.list-leave-to {
 opacity: 0;
  transform: translateX(-50px);
}        
  }
</style>