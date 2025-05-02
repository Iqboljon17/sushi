<template>
  <div>
    <div class="index__products" v-for="cat in products" :key="cat.id">
      <div class="container">
        <div class="index__products-title-wrp">
          <h3 class="index__products-title">{{ cat.name }}</h3>
          <div class="index__title-desc">
            <router-link class="index__desc">Сортировать</router-link>
            <router-link class="index__desc">по популярности</router-link>
            <router-link class="index__desc">по цене</router-link>
          </div>
        </div>

        <div class="index__products-card-wrp">
          <div
            v-for="item in cat.data"
            :key="item.id"
            :id="`product-${item.id}`"
            class="index__products-card"
          >
            <div class="index__products-card-text-wrp">
              <h2 class="index_products-card-title">{{ item.name }}</h2>
              <p class="index__products-card-desc">{{ item.ingridient }}</p>
              <p class="index__products-card-desc2">{{ item.bonus }}</p>
              <p class="index__products-card-cal">
                {{ item.weight }} гр. {{ item.kcal }} ккал
              </p>
              <div class="index__products-quantity-wrp">
                <button @click="decreaseQuantity(item)">-</button>
                <h3>{{ item.quantity || 1 }}</h3>
                <button
                  @click="increaseQuantity(item)"
                  class="index_quantity-add"
                >
                  +
                </button>
                <button class="index__quantity-price-btn">по 6шт.</button>
                <button class="index__quantity-price-btn2">по 8шт.</button>
              </div>
              <div class="index__products-buy">
                <button @click="addToCart(item)">
                  <img src="../assets/images/svg/_Ð¡Ð»Ð¾Ð¹_4 (1).svg" alt="" />
                  <h3>Купить</h3>
                </button>
                <h2 class="z-50">{{ item.price }}₽</h2>
              </div>
            </div>

            <button>+</button>

            <div class="image__overlay">
              <img
                :src="`http://5.182.26.17:8000/images/${item.image}`"
                alt="Product Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/store";
import { computed, onMounted, ref } from "vue";
import { getCategories, getCategorieProducts } from "@/services/products";

let store = useCounterStore();
let products = ref([]);

async function fetchCategories() {
  let res = await getCategories();
  res.data.forEach(async (el) => {
    let res = await getCategorieProducts(el.id);
    products.value.push({
      name: el.name,
      id: el.id,
      data: res.data,
    });
  });
}

function increaseQuantity(item) {
  const productInCart = store.cart.find((el) => el.id === item.id);
  if (productInCart) {
    productInCart.quantity++;
  } else {
    item.quantity = (item.quantity || 1) + 1;
  }
}

function decreaseQuantity(item) {
  const productInCart = store.cart.find((el) => el.id === item.id);
  if (productInCart && productInCart.quantity > 1) {
    productInCart.quantity--;
  } else if (item.quantity > 1) {
    item.quantity--;
  }
}

function addToCart(item) {
  let productToAdd = {
    id: item.id,
    title: item.name,
    image: item.image,
    weight: item.weight,
    kcal: item.kcal,
    price: item.price,
    quantity: item.quantity || 1,
  };

  let existingProduct = store.cart.find((el) => el.id === item.id);
  if (!existingProduct) {
    store.cart.push(productToAdd);
  } else {
    existingProduct.quantity++;
  }

  localStorage.setItem("cart", JSON.stringify(store.cart));
}

fetchCategories();
</script>

<style lang="scss" scoped>
@import "../assets/css/mixins";
.index__products {
  .index__products-title {
    @include font(600, 24px, 1.2);
    margin-bottom: 5px;
    @media (max-width: 450px) {
      @include font(500, 15px, 1.2);
      letter-spacing: 0;
    }
  }
  .index__title-desc {
    display: flex;
    align-items: center;
    gap: 20px;

    .index__desc {
      @include font(500, 12px, 1.2);
      @media (max-width: 450px) {
        @include font(400, 8px, 1.2);
        letter-spacing: 0;
      }
    }

    .index__desc:hover {
      color: #a6a6a6;
      border-bottom: 1px dashed;
    }
  }
  .index__products-card-wrp {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 22px;
    @media (max-width: 895px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 605px) {
      grid-template-columns: 1fr;
    }

    .image__overlay {
      position: absolute;
      top: 0;
      right: 0;
      width: 46%;
      height: 100%;
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
      background: #fff;
      z-index: 1;
      img {
        display: flex;
        align-items: center;
        width: 100px;
        height: 100%;
        object-fit: contain;
        transform: translateX(30px);
      }
    }
    .index__products-card {
      display: flex;
      align-items: center;
      background-color: #eceeec;
      box-shadow: 0px 5px 15px 0px #0000001a;
      padding: 20px;
      border-radius: 10px;
      position: relative;

      button {
        width: 30px;
        height: 30px;
        color: #fff;
        background: linear-gradient(180deg, #fe8a49 0%, #eb6101 100%);
        border-radius: 50%;
        border: none;
        z-index: 2;
        cursor: pointer;
      }

      .index__products-card-text-wrp {
        display: flex;
        flex-direction: column;
        width: 50%;

        .index_products-card-title {
          @include font(600, 18px, 1.2);
          letter-spacing: 2;
          margin-bottom: 10px;
        }
        .index__products-card-desc {
          @include font(500, 12px, 1.2);
          margin-bottom: 10px;
        }
        .index__products-card-desc2 {
          @include font(500, 8px, 1.2);
          margin-bottom: 10px;
        }
        .index__products-card-cal {
          @include font(500, 12px, 1.2);
          color: #a6a6a6;
        }
        .index__products-quantity-wrp {
          margin-top: 10px;
          margin-bottom: 10px;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;

          h3 {
            @include font(500, 12px, 1.2);
          }
          button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 16px;
            height: 16px;
          }
          .index__quantity-price-btn,
          .index__quantity-price-btn2 {
            width: 57px;
            height: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10%;
            padding: 1px 2px;
            @include font(500, 10px, 1.2);
            color: #fff;
          }
        }
        .index__products-buy {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 10px;

          h2 {
            @include font(600, 24px, 1.2);
            letter-spacing: 2;
          }
          button {
            display: flex;
            align-items: center;
            width: 122px;
            height: 50px;
            gap: 10px;
            border-radius: 10px;
            padding: 10px;

            h3 {
              color: #fff;
              @include font(600, 16px, 1.2);
              width: 100%;
              padding-right: 22px;
              letter-spacing: 2;
              z-index: 2;
            }
          }
        }
      }
    }
  }
}
</style>
