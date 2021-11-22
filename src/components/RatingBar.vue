<template>
  <div class="ratingbar">
    <div class="numOfStars">
        <p>5</p>
    </div>
    <div class="star">

    </div>
    <div class="bar">

    </div>
    <div class="count">
        100
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
    .ratingbar{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: #7f8c8d;
        margin-bottom: 1rem;
        .numOfStars{
            margin-right: .5rem;
            
        }
        .star{
            @include star-icon;
            width: 2rem;
            height: 2rem;
            margin-right: .5rem;
        }
        .bar{
            width: 15rem;
            height: .8rem;
            background-color: $light-grey;
            border-radius: 5.5rem;
            margin-right: .5rem;
        }
    }
</style>