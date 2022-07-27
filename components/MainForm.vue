<template>
  <form>
    <div >
      <label>Наименование товара <span class="cercle"> </span></label>
      <input type="text" placeholder="Введите наименование товара" v-model="product.name" :class=" ` ${isValidateName ? 'validate' : ''}`">
      <span :class=" `validate-text ${isValidateName ? 'validate-text-active' : ''}`">Поле является обязательным</span>
    </div>
    <div>
      <label>Описание товара <span class="cercle"></span></label>
      <textarea class="description" type="text" placeholder="Введите описание товара" v-model="product.description" :class=" ` ${isValidateDescription ? 'validate' : ''}`"></textarea>
      <span :class=" `validate-text ${isValidateDescription ? 'validate-text-active' : ''}`">Поле является обязательным</span>
    </div>
    <div>
      <label>Ссылка на изображение товара <span class="cercle"></span></label>
      <input type="text" placeholder="Введите ссылку" v-model="product.img" :class=" ` ${isValidateImg ? 'validate' : ''}`">
      <span :class=" `validate-text ${isValidateImg ? 'validate-text-active' : ''}`">Поле является обязательным</span>
    </div>
    <div>
      <label>Цена товара <span class="cercle"></span></label>
      <input type="text" placeholder="Введите цену" v-model="product.price" :class=" ` ${isValidatePrice ? 'validate' : ''}`">
      <span :class=" `validate-text ${isValidatePrice ? 'validate-text-active' : ''}`">Поле является обязательным</span>
    </div>

    <button @click.prevent="createProduct(product), setMessage(true)" :disabled="!isValidateAll" :class=" ` ${isValidateAll ? 'active' : ''}`">Добавить товар</button>
  </form>
</template>

<script>

import { mapMutations } from 'vuex'

  export default {
    name:'Main-form',

    data(){
      return{
        product:{
          name:'',
          description:'',
          img:'Rectangle 31.png',
          price:''
        }
      }
    },

    computed:{
      isValidateAll(){
         if(this.product.name !== "" && this.product.description !== "" && this.product.img !== "" && this.product.price !== "") {
          return true
         } 
         return false 
      },
      isValidateName(){
        return this.product.name === ''
      },
      isValidateDescription(){
        return this.product.description === ''
      },
      isValidateImg(){
        return this.product.img === ''
      },
      isValidatePrice(){
        return this.product.price === ''
      },                  
    },

    methods:{
      ...mapMutations({
          createProduct: 'main/createProduct',
          set:"main/setMessage"
        }),
      setMessage(ctx){
        this.set(true);
        setTimeout(() =>this.set(false), 1000);
      }
    },
  }
</script>

<style scoped lang="scss">
  form{
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    padding: 24px;
    width: 330px;

      div+div{
        margin-top: 16px;
      }

      div{

        label{
          color: #49485E;
          display: flex;
          font-weight: 400;
          font-size: 10px;
          .cercle{
            height: 4px;
            width: 4px;
            background: #FF8484;
            border-radius: 50%;
          }
        }

        input,textarea{
          resize: none;
          font-size: 12px;
          padding:10px 15px;
          width: 100%;
          background: #FFFEFB;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
          margin-top: 4px;
       }

       .validate{
        border: 1px solid #FF8484;
        transition: .3s all;
        border-radius:4px;
       }

       .validate-text{
        font-weight: 400;
        font-size: 8px;
        line-height: 10px;
        color: #FF8484;  
        display: none;      
       }

       .validate-text-active{
        display: inline-block;
       }

       .description{
          height: 100px;
          justify-self: start;
       }
      }

      .active{
        background: #7BAE73;
        color: #fff;
        transition: .3s all;
      }

      .active:hover{
        transform: scale(1.05);
      }

      .active:active{
        transform: scale(1);
      }

      button{
        width: 100%;
        margin-top: 24px;
        padding: 10px;
        background: #EEEEEE;
        border-radius: 10px;
      }
    }

</style>