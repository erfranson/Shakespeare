<template>
  <div class="nav">
      <div class="nav__icon-container">
        <img class="icon" src="../assets/shakespeare.svg" alt="shakespeare Icon">
        <h1 class="company-name">Shakespeare</h1>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
  .nav{
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 8rem;
    justify-content: center;
    padding: 0 1.2rem 0 1.2rem;
    background-color: #ffffff;
    &__icon-container{
      display: flex;
      flex-direction: row;
      align-items: center;
      max-width: 140rem;
      width: 100%;
        .icon{
          height: 5rem;
          width: 5rem;
        }
        .company-name{
          font-family: 'Comforter', sans-serif;
          color: #000000;
          font-weight: bold;
          font-size: 2.5rem;
        }
    }
  }
</style>