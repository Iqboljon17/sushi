<template>
  <div>
      <!-- <div class="hero">
          <div class="container">
              <img src="@/assets/images/jpg/баннер 1.jpg" alt="" class="hero-img">
              <button class="hero__button">Подробнее</button>
          </div>
      </div> -->

      <div v-for="item in 8" :key="item" class="index__products">
          <div class="container">
              <div class="index__products-title-wrp">
                  <h3 class="index__products-title">Горячие роллы</h3>
                <div class="index__title-desc">
                  <button>Сортировать</button>
                  <button>по популярности</button>
                  <button>по цене</button>
                </div>
              </div>

              <div class="index__card-wrp">
                <div v-for="item in 5 " :key="item" class="index__products-card">
                <div class="index__card-text-wrp">
                  <h2 class="index__card-title">Эби Фурай</h2>
                  <p class="index__card-desc">Рис, нори, авокадо, лосось, креветки, творожный сыр, икра масаго, кляр, панировка.</p>
                  <div class="index__card-info">
                    <p class="index__info-title">Бесплатно:</p>
                    <h3 class="index__info-desc">Соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.</h3>
                  </div>
                  <p class="index__card-calory">205 гр. 115 ккал</p>

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
                    <h2 class="set__righ-price2">289₽</h2>
                  </div>
                </div>
                </div>

                <div class="index__products-img">
                  <img src="../assets/images/png/Эби_фурай.png" alt="">
                </div>
              </div>
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



.hero {
  .container {
    position: relative;

    img {
      width: 100%;
      display: block;
    }

    .hero__button {
      position: absolute;
      left: 89px;
      bottom: 72px;
      padding: 15px 30px;
      background-color: #EB6101;
      color: #fff;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }
  }
}

// Product sections
.index__products {
  margin-bottom: 60px;
  margin-top: 50px;

  .index__products-title-wrp {
    margin-bottom: 40px;
  }

  .index__products-title {
    @include font(600px, 24px, 1.2);
    margin-bottom: 5px;
  }

  .index__title-desc {
    display: flex;
    align-items: center;
    gap: 20px;

    button {
      @include font(500px, 12px, 1.2);
      border: none;
      background: none;
      cursor: pointer;
      margin-bottom: 40px;

      &:hover {
        color: #A6A6A6;
        border-bottom: 1px dashed #A6A6A6;
      }
    }
  }

  .index__card-wrp {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    @media (max-width: 678px) {
      grid-template-columns: 1fr;
      display: flex;
      flex-direction: column-reverse;
    }
  }

  .index__products-card {
    background-color: #F8F8F8;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
    box-shadow: 0px 5px 15px 0px #0000001A;
    gap: 50px;





  .index__products-img {
    flex-shrink: 0;
    max-width: 200px;
 
    

    img {
      width: 100%;
      height: auto;
      display: flex;
    }
  }


}


  .index__card-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .index__card-desc {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .index__card-info {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .index__card-calory {
    font-size: 12px;
    color: #999;
  }

  .set__right-quantity-wrp {
    margin-top: 10px;
    @media (max-width: 350px) {
      display: flex;
      flex-direction: column;
    }
  }

  .set__right-quantity {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .set__right_quantity-button {
    margin-top: 10px;

    button {
      margin-right: 10px;
    }
  }

  .set__righ-buy-button {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 15px;

    .add {
      display: flex;
      align-items: center;
      gap: 8px;
      background-color: #EB6101;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 8px;
      cursor: pointer;
    }

    .set__right-price {
      display: flex;
      gap: 10px;

      h2 {
        font-size: 16px;
      }
    }
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .index__card-wrp {
    grid-template-columns: 1fr;
  }

  .index__products-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .index__products-img {
    width: 100%;
    margin-top: 15px;
  }
}





</style>  