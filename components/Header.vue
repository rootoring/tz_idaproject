<template>
  <header>
    <h1>Добавление товара</h1>



  </header>
</template>

<script>
  export default {
    name:'Header-app',
  }
</script>


<style  lang="scss" scoped>
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    h1{
      font-size: 28px;
      font-weight: 600;
      line-height: 35px;
    }
  }
</style>