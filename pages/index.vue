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

<style scoped lang="scss">
  div {
    width: 100%;
    display: flex;
  }
</style>