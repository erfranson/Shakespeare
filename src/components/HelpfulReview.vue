<template>
  <div class="helpful">
    <div class="helpful__title-container">
        <div class="circle"></div>
        <h2 class="title">Most Helpful Reivew</h2>
    </div>
    <div class="helpful__content">
        <div class="reviewer">
            <div class="reviewer__icon">

            </div>
            <div class="reviewer__name">
                <h3>Trevor Noah</h3> 
            </div>
            <div class="reviewer__post-info">
                <p>October 12, 2021</p>
            </div>
        </div>
        <div class="review">
            <div class="review__rating">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
            </div>
            <div class="review__title">
                <h2>Good Product Love it!</h2>
            </div>
            <div class="review__post">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorem vero nulla eaque tenetur minus libero in delectus laudantium, consequatur dolorum pariatur recusandae optio, sunt consequuntur qui expedita. Tenetur, nemo?</p> 
            </div>
        </div>
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
                @include circle-icon($yellow);
            }
        }
        &__content{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .reviewer{
                display: flex;
                flex-direction: column;
                align-items: center;
                &__icon{
                    background-color: $red;
                    border-radius: 5px;
                    width: 8rem;
                    height: 8rem;
                    margin-bottom: 1rem;
                    background-image: url('../assets/person.svg');
                    background-size: 70px 70px;
                    background-position: center;
                    background-repeat: no-repeat;
                    

                }
                &__name{
                    color: $blue;
                    font-size: 1.2rem
                }
                &__post-info{
                    color: $dark-grey;
                    font-size: 1.2rem;
                }
            }
            .review{
                text-align: start;
                width: 80%;
                &__rating{
                    display: flex;
                    flex-direction: row;
                    margin-bottom: 1rem;
                    .star{
                        margin-right: .5rem;
                        @include star-icon;
                        height: 3rem;
                        width: 3rem;
                    }
                }
                &__title{
                    h2{
                        font-weight: 800;
                        margin-bottom: 1rem;
                    }
                    
                }
                &__post{
                    font-size: 1.4rem;
                    color: $dark-grey;
                }
                @media only screen and (max-width: $xl){
                    width: 85%;
                }
                @media only screen and (max-width: $md){
                    width: 80%;
                }
                @media only screen and (max-width: $sm){
                    width: 70%;
                }
                
                
            }
        }
    }
</style>