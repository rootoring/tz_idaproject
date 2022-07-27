<template>
  <div>
    <Main />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  components:{
    Main:() => import('@/components/Main.vue')
  }
}
</script>
