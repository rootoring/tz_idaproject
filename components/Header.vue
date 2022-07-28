<template>
  <header>
    <h1>Добавление товара</h1>

    <select v-model="filterStatus" class="form-control">
        <option disabled value="" class="default">По умолчанию</option>
        <option value="max">Price MAX</option>
        <option value="min">Price MIN</option>
        <option value="name">Name</option>
    </select>
  </header>
</template>

<script>

import{ mapMutations } from 'vuex'

  export default {
    name:'Header-app',

    data(){
      return{
        filterStatus:''
      }
    },

    watch:{
      filterStatus(){
       this.productFilter(this.filterStatus)
      }
    },

    methods:{
      ...mapMutations({
        productFilter:'main/productFilter'
      })
    }
  }
</script>


<style  lang="scss" scoped>
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    @media (max-width: 460px) {
     flex-direction: column;
    }  

    h1{
      font-size: 28px;
      font-weight: 600;
      line-height: 35px;

      @media (max-width: 460px) {
        margin-bottom: 10px;
        text-align: center;
      }  
    }

    .form-control{
      padding: 10px 15px;
      background: #FFFEFB;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;

     option {
      font-family: 'Source Sans Pro';
      }
    }
  }
</style>