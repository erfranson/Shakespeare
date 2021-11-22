<template>
  <div class="helpful">
      <div class="helpful__title-container">
          <div class="circle"></div>
          <h2 class="title">Most Helpful Reivew</h2>
      </div>  
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .helpful {
        @include card(helpful);
        &__title-container{
            @include overview-title-container;
            .circle{
                @include circle-icon($purple);
            }
        }
    }
</style>