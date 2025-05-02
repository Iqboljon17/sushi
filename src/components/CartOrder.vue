<template>
  <div class="cart__right-top">
    <h1 class="cart__right-order-title">Ваш заказ</h1>

    <div
      v-for="(item, index) in cartItems"
      :key="index"
      class="cart__right-order"
    >
      <div class="cart__right-order-img">
        <img class="h-[100%]" :src="`http://5.182.26.17:8000/images/${item.image}`" />
      </div>

      <div class="cart__right-order-quantity">
        <h2 class="cart__right-order-quantity-title">{{ item.title }}</h2>
        <p class="cart__right-order-quantity-desc">{{ item.description }}</p>

        <div class="cart__right-quantity">
          <button type="button" @click="decreaseQuantity(index)">-</button>
          <h3>{{ item.quantity }}</h3>
          <button type="button" @click="increaseQuantity(index)">+</button>
        </div>
      </div>

      <h2 class="cart__right-order-price">{{ item.price * item.quantity }}₽</h2>

      <button
        type="button"
        class="card__right-close-card"
        @click="removeItem(index)"
      >
        <img src="../assets/images/svg/icons8-close (1).svg" alt="Remove" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const cartItems = ref([]);

onMounted(() => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cartItems.value = JSON.parse(savedCart);
  }
});

function increaseQuantity(index) {
  cartItems.value[index].quantity++;
  updateLocalStorage();
}

function decreaseQuantity(index) {
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity--;
    updateLocalStorage();
  }
}

function removeItem(index) {
  cartItems.value.splice(index, 1);
  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cartItems.value));
}
</script>

<style lang="scss" scoped>
@import "../assets/css/mixins";

.cart__right-top {
  padding: 30px 40px;
  box-shadow: 0px 20px 20px 10px #00000008;
  border-radius: 10px;
  @media (max-width: 515px) {
    padding: 20px;
  }
  @media (max-width: 450px) {
    padding: 10px;
  }
}

.cart__right-order-title {
  @include font(600, 24px, 1.2);
  margin-bottom: 25px;
}

.cart__right-order {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 15px 0;
  border-bottom: 1px solid #eee;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .cart__right-order-img {
    background: #f8f8f8;
    border-radius: 10px;
    padding: 10px;
    width: 150px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .cart__right-order-quantity {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    .cart__right-order-quantity-title {
      @include font(500, 16px, 1.2);
      @media (max-width: 350px) {
        @include font(400, 14px, 1.2);
      }
    }

    .cart__right-order-quantity-desc {
      @include font(500, 14px, 1.2);
      color: #a6a6a6;
      @media (max-width: 350px) {
        @include font(400, 12px, 1.2);
      }
    }

    .cart__right-quantity {
      display: flex;
      align-items: center;
      gap: 10px;

      h3 {
        @include font(500, 14px, 1.2);
        @media (max-width: 350px) {
          @include font(400, 12px, 1.2);
        }
      }

      button {
        width: 24px;
        height: 24px;
        font-size: 14px;
        background: #eceeec;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .cart__right-order-price {
    @include font(600, 18px, 1.2);
    white-space: nowrap;
    @media (max-width: 350px) {
      @include font(400, 14px, 1.2);
    }
  }

  .card__right-close-card {
    width: 20px;
    height: 20px;
    background: none;
    border: none;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

</style>
