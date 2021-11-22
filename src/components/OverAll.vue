<template>
  <div class="overall">
    <h2 class="overall__title">Overall Rating</h2>
    <div class="overall__content">
        <h2 class="rating">4.5 <span class="rating--grey">/5</span></h2>
        <div class='stars'>

        </div>
        <div class="total-reviews">
          <p class="total-reviews__count">202 reviews</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
  .overall{
    @include card-small('overall');
    &__title{
        text-align: start;
        margin-bottom: 3rem;
    }
    &__content{
      display: flex;
      justify-content: center;
      flex-direction: column;
      .rating{
        font-size: 5rem;
        &--grey{
          color: #7f8c8d;
          font-size: 4rem;
          font-weight: 400;
        }
      }
      .total-reviews{
        font-weight: 600;
        font-size: 1.4rem;
        .total-reviews__count{
          color: #7f8c8d;
        }
      }
    }
  }
</style>