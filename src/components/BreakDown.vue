<template>
  <div class="breakdown">
      <div class="breakdown__title-container">
          <div class="circle"></div>
          <h2 class="title">Rating Breakdown</h2>
      </div>
      <div class='breakdown__reviews'>
          <rating-bar/>
          <rating-bar/>
          <rating-bar/>
          <rating-bar/>
          <rating-bar/>
      </div>
      
  </div>
</template>

<script>
import ratingBar from './RatingBar.vue'
export default {
    components: {
    ratingBar
  }
}
</script>

<style lang='scss'>
    .breakdown{
        @include card(breakdown);
        &__title-container{
            @include overview-title-container;
            .circle{
                @include circle-icon($green)
            }
        }
        &__reviews{
            
        }
        
    }
</style>