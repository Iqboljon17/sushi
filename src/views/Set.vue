<template>
    <div>
        <div class="set__card-wrp">
            <div class="container">
                <div class="set__card" v-for="item in 25" :key="item">
                    <div class="set__card-left">
                    <img src="..//assets/images/png/set_sushi.png" alt="" class="set__left-img">

                    <h2 class="set__left-swiper-title">Добавить к заказу</h2>
                    <div class="set__left-wriper">
                        <router-link v-for="item in 4" :key="item" class="set__left-swiper-items">
                            <img src="../assets/images/svg/Имбирь.svg" alt="">
                            <p>Имбирь</p>
                            <div class="card__item-wrp">
                                <button>-</button>
                                <p>1</p>
                                <button class="add">+</button>
                                <h4 class="card__item-info">25₽</h4>
                            </div>
                        </router-link>
                    </div>
                    </div>

                    <div class="set__card-right">
                    <h1 class="set__card-right-title">Эби Фурай</h1>
                    <p class="set__card-calory">205 гр. 115 ккал</p>
                    <div class="set__right-info">
                        <p class="set__info-title">Состав:</p>
                        <h3 class="set__info-desc">Рис, нори, авокадо, лосось, креветки, творожный сыр, икра масаго, кляр, панировка.</h3>
                    </div>
                    <div class="set__right-info">
                        <p class="set__info-title">Бесплатно:</p>
                        <h3 class="set__info-desc">Соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.</h3>
                    </div>
                    <div class="set__right-quantity-wrp">
                        <div class="set__right-quantity">
                            <button>-</button>
                            <p>0</p>
                            <button class="add">+</button>
                        </div>
                        <div class="set__right_quantity-button">
                            <button class="add">по 6шт.</button>
                            <button>по 8шт.</button>
                        </div>
                    </div>
                    <div class="set__righ-buy-button">
                        <button class="add">
                            <img src="../assets/images/svg/_Ð¡Ð»Ð¾Ð¹_4 (1).svg" alt="">
                            <p>Купить</p>
                        </button>
                        <div class="set__right-price">
                            <h2 class="set__righ-price1">289₽</h2>
                            <h2 class="set__righ-price2">289₽</h2>
                        </div>
                    </div>
                
                    </div>
                    <button class="set__close__card">
                        <img src="../assets/images/svg/icons8-close (1).svg" alt="">
                    </button>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "../assets/css/mixins";

.set__card-wrp {
  margin-top: 80px;

  .container {
    .set__card {
      display: flex;
      flex-direction: row;
      box-shadow: 0px 20px 20px 10px rgba(0, 0, 0, 0.03);
      border-radius: 30px;
      margin-bottom: 95px;
      position: relative;
      padding: 30px 0;

      @media (max-width: 980px) {
        flex-direction: column;
      }

      .set__card-left {
        border-right: 2px solid #f5f5f5;
        padding: 30px 70px;

        .set__left-img {
          width: 100%;
          display: block;
        }

        .set__left-swiper-title {
          margin-bottom: 25px;
          @include font(600px, 24px, 1.2);
          @media (max-widht: 500px) {
            @include font(500px, 12px, 1.2);
          }
        }

        .set__left-wriper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          overflow-x: auto;

          .set__left-swiper-items {
            background-color: #f8f8f8;
            border-radius: 10px;
            padding: 10px;
            display: flex;
            width: fit-content;
            height: fit-content;
            flex-direction: column;
            align-items: center;

            img {
              width: 100%;
              transform: translateX(5px);
            }

            p {
              @include font(700px, 12px, 1.2);
              margin-bottom: 8px;
            }

            .card__item-wrp {
              display: flex;
              align-items: center;
              gap: 5px;

              button {
                width: 20px;
                height: 20px;
                border: none;
                border-radius: 50%;
                background-color: #eceeec;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .card__item-info {
                @include font(600px, 16px, 1.2);
              }
            }
          }
        }
      }

      .set__card-right {
        padding: 30px 70px;

        .set__card-right-title {
          @include font(600px, 24px, 1.2);
          margin-bottom: 5px;
          @media (max-width: 500px) {
            @include font(500px, 15px, 1.2);
          }
        }

        .set__card-calory {
          @include font(500px, 14px, 1.2);
          color: #a6a6a6;
          margin-bottom: 20px;
        }

        .set__info-title {
          @include font(500px, 12px, 1.2);
          color: #a6a6a6;
          margin-bottom: 4px;
        }

        .set__info-desc {
          @include font(500px, 16px, 1.2);
          margin-bottom: 30px;
          @media (max-widht: 500px) {
            @include font(400px, 10px, 1.2);
          }
        }

        .set__right-quantity-wrp {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 80px;

          @media (max-width: 390px) {
            flex-direction: column;
          }

          .set__right-quantity {
            display: flex;
            align-items: center;
            gap: 10px;

            button {
              width: 30px;
              height: 30px;
              border: none;
              border-radius: 50%;
              background-color: #eceeec;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            }
          }

          .set__right_quantity-button {
            display: flex;
            align-items: center;
            gap: 10px;

            button {
              padding: 7px 15px;
              border-radius: 10px;
              border: none;
              background-color: #eceeec;
              cursor: pointer;
              @include font(500px, 16px, 1.2);
            }

            .add {
              background-color: #eb6101;
              color: #fff;
            }
          }
        }

        .set__righ-buy-button {
          display: flex;
          align-items: center;
          gap: 44px;
          @media (max-width: 370px) {
            display: flex;
            flex-direction: column;
          }

          button {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 15px;
            border: none;
            border-radius: 10px;
            background-color: #eb6101;
            color: #fff;
            cursor: pointer;
            @media (max-widht: 500px) {
                padding: 10px;
            }
          }

          .set__right-price {
            display: flex;
            flex-direction: column;

            .set__righ-price1 {
              @include font(600px, 16px, 1.2);
              color: #eb6101;
              @media (max-widht: 500px) {
                @include font(50px, 10px, 1.2);
              }
            }

            .set__righ-price2 {
              @include font(600px, 32px, 1.2);
              @media (max-widht: 500px) {
                @include font(50px, 10px, 1.2);
              }
            }
          }
        }
      }

      .set__close__card {
        position: absolute;
        top: 31px;
        right: 21px;
        width: 23px;
        height: 23px;
        border: none;
        background: none;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

</style>