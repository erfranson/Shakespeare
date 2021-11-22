<template>
  <div class="reviews">
    <div class="reviews__overview-container">
        <overall/>
        <breakdown/>
        <helpful/>
    </div>
    <div class="reviews__review-container">
        <userreview/>
        <userreview/>
    </div>
  </div>
</template>

<script>

import overall from '../components/OverAll.vue'
import breakdown from '../components/BreakDown.vue'
import helpful from '../components/HelpfulReview.vue'
import userreview from '../components/UserReview.vue'

export default {
  setup() {
    
  },
  components: {
    overall,
    breakdown,
    helpful,
    userreview
  }
}

</script>

<style lang='scss'>
  .reviews{
    max-width: 140rem;
    width: 100%;
    margin: 0 auto;
    &__overview-container{
      width: 100%;
      display: grid;
      column-gap: 5rem;
      row-gap: 5rem;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 25rem auto;
      grid-template-areas: 
      'overall breakdown helpful helpful';

      @media only screen and (max-width: $xl) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 25rem 25rem auto;
        grid-template-areas: 
        'overall breakdown'
        'helpful helpful';
      }
      @media only screen and (max-width: $sm) {
        grid-template-columns:  1fr;
        grid-template-rows: 25rem 25rem 25rem auto;
        grid-template-areas: 
        'overall'
        'breakdown'
        'helpful';
      }
    }
    @media only screen and (max-width: $xl) {
      padding: 0 1.5rem;
    } 
  }
</style>
