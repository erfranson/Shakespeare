<template>
  <div class="userreview">
    <div class="userreview__user">
    <div class="icon"></div>
    
      <div class="user-name">
        <h3>Tom Jones</h3>
      </div>
      <div class="post-info">
        <p>October 12, 2021</p>
      </div>
    </div>
    <div class="userreview__review">
      <div class="rating">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>
      <div class="title">
        <h2>Good Product Love it!</h2>
      </div>
      <div class="review">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, nemo asperiores accusantium, maxime reiciendis dolorum natus, labore eum laborum necessitatibus facere dignissimos voluptatem. Reiciendis vel totam modi, neque deserunt distinctio?</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .userreview{
      display: flex;
      flex-direction: row;
      @include card(review);
      margin-bottom: 3rem;
      &__user{
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon{
          height: 8rem;
          width: 8rem;
          background-image: url('../assets/person.svg');
          background-size: 70px 70px;
          background-position: center;
          background-repeat: no-repeat;
          background-color: $green;
          border-radius: 5px;
          margin-bottom: 1rem;
        }
      
        margin-right: 4rem;
        .user-name{
          color: $blue;
          font-weight: 600;
          font-size: 1.2rem;
        }
        .post-info{
          font-size: 1.2rem;
          color: $dark-grey;
          
        }
      }
      &__review{
        display: flex;
        width: 80%;
        flex-direction: column;
        align-items: flex-start;
        .rating{
          display: flex;
          flex-direction: row;
          margin-bottom: 1rem;
          .star{
            @include star-icon;
            height: 3rem;
            width:  3rem;
          }
        }
        .title{
          h2{
            font-weight: 800;
          }
        }
        .review{
          font-size: 1.4rem;
          text-align: start;
          color: $dark-grey;
        }
      }
    }
</style>