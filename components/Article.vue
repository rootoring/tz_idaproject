<template>
  <article>
    <img :src="product.img" alt="">
    <div class="content">
      <h2 class="title">{{ product.name }}</h2>
      <p class="description">{{ product.description }}</p>
      <span class="price">{{` ${beautyPrice(product.price)}  руб.` }} </span>
    </div>
    <span class="trash"  @click="$emit('delete')"><i class="fas fa-trash-alt"></i></span>
  </article>
</template>

<script>

  export default {
    name:'Main-Article',
    props:{
      product:{
        type:Object,
      }
      },
      methods:{
        beautyPrice(price){
         return price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        }
    }
  }
</script>


<style scoped lang="scss">
  article:hover{
    transform: scale(1.02);
  }
  article{
    position:relative;
    width: 330px;
    display: flex;
    flex-direction: column;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    margin: 0 16px 16px 0;
    padding-bottom: 24px;
    transition: .3s all;

    @media (max-width: 1744px) {
      width: 30%;
    }
    @media (max-width: 1030px) {
      width: 45%;
    } 
    @media (max-width: 840px) {
      width: 80%;
      margin-right: 0;
    }  
    @media (max-width: 768px) {
      width: 45%;
      margin-top:15px;
      margin-right: 15px;
    }   
    @media (max-width: 590px) {
     width: 100%;
    }      

      img{
        width: 100%;
        align-self: center;
      }
      .content{
        padding: 0 16px;

        .title{
          font-size: 20px;
          line-height: 25px;
          margin: 16px 0;
        }

        .description{
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          width: 100%;
        }

        .price{
          display: inline-block;
          font-weight: 600;
          font-size: 24px;
          line-height: 30px;
          margin-top: 32px;
        }
      } 
      &:hover .trash{
        opacity:1;
        visibility:visible;
      }
      .trash{
        width: 32px;
        height: 32px;
        background: #FF8484;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 9px;
        cursor: pointer;
        right:-10px;
        top:-10px;
        transition:.3s all;
        position: absolute;
        z-index: 10;
        font-size:18px;
        border-radius:5px;
        color:#fff;
        opacity:0;
        visibility:hidden;
          &:hover{
            transform:scale(1.2);
            }
            &:active{
            transform:scale(1);
            }
        }

  }
</style>