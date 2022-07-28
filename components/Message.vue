<template>
	<span :class=" `message ${messageActive ? 'active-message' : ''}`">Продукт добавлен</span>
</template>


<script>

import {  mapGetters } from 'vuex'

	export default{
		name:"Message-app",

    computed:{
      ...mapGetters({
          messageActive: 'main/getMessageStatus',
        }),		
	}
}	
</script>


<style type="text/css">
	.message{
		display: none;
		top: 25px;
		right: 50%;
	}

	.active-message{
		display: flex;
		position: fixed;
		border-radius: 4px;
		color: #fff;
		background: #7BAE73;
		padding: 10px 15px;
		opacity: .9;
		transition: .3s all;
		animation: load 2s ;
	}

	 @keyframes load {
  0% {
     transform: translateY(-200%);
      }
 50% {
     transform: translateY(0%);
      }   
  100%{
  		 transform: translateY(-200%);
  		}            
  }
</style>