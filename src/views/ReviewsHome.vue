<template>
  <div class="reviews">
    <div class="reviews__container">
        <overall/>
        <breakdown/>
    </div>
  </div>
</template>

<script>

import overall from '../components/OverAll.vue'
import breakdown from '../components/BreakDown.vue'

export default {
  setup() {
    
  },
  components: {
    overall,
    breakdown,
  }
}

</script>

<style lang='scss'>
  .reviews{

    max-width: 140rem;
    width: 100%;
    display: flex;
    margin: 0 auto;
    &__container{
      width: 100%;
      display: grid;
      column-gap: 5rem;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: auto;
      grid-template-areas: 
      'overall breakdown helpful helpful'
      'review review review review';
    }
  }
</style>
