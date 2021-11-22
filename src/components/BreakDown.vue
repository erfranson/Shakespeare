<template>
  <div class="breakdown">
      <div class="breakdown__title-container">
          <div class="circle"></div>
          <h2 class="title">Rating Breakdown</h2>
      </div>    
      
  </div>
</template>

<script>
export default {

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
        
    }
</style>