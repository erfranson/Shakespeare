<template>
  <div class="overall">
    <div class='overall__title-container'>
      <div class='circle'></div>
      <h2 class="title">Overall Rating</h2>
    </div>
    
    <div class="overall__content">
        <h2 class="rating">4.5 <span class="rating--grey">/5</span></h2>
        <div class='stars'>
          <div class='star'>

          </div>
          <div class='star'>

          </div>
          <div class='star'>

          </div>
          <div class='star'>

          </div>
          <div class='star'>

          </div>
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
    @include card(overall);
    &__title-container{
        @include overview-title-container;
        .circle{
          @include circle-icon($blue);
        }
    }
    &__content{
      margin: 0 auto;
      width: 20rem;
      .rating{
        font-size: 5rem;
        &--grey{
          color: #7f8c8d;
          font-size: 4rem;
          font-weight: 400;
        }
      }
      .stars{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 1rem;        
        .star{
          @include star-icon;
          width: 3rem;
          height: 3rem;
        }
      }
      .total-reviews{
        font-weight: 600;
        font-size: 1.4rem;
        .total-reviews__count{
          color: $dark-grey;
        }
      }
    }
  }
</style>