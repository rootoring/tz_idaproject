<template>
	<span :class=" `message ${messageActive ? 'active' : ''}`">Продукт добавлен</span>
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
		border-radius: 4px;
		color: #fff;
		background: #7BAE73;
		padding: 10px 15px;
		position: absolute;
		top: 10px;
		right: 10px;
		opacity: .9;
		display: none;
	}

	.active{
		display: inline-block;
	}
</style>