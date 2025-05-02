<template>
  <div>
    <form action="" class="cart__wrapper">
      <div class="container">
        <div class="cart__right">
          <CartOrder/>
        </div>
        <button @click="submitOrder()" type="button" class="sendorder bg-sky-500 hover:bg-sky-700 ...">Send order</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CartOrder from "@/components/CartOrder.vue"
import { createOrder } from "@/services/order" 
const cartItems = ref([])
const router = useRouter()

onMounted(() => {
  const savedCart = localStorage.getItem('cart')
  if (savedCart) {
    cartItems.value = JSON.parse(savedCart)
  }
})

function submitOrder() {
  const products = cartItems.value.map(item => ({
    product_id: item.id,
    amount: item.quantity
  }));

  createOrder(products)
    .then(() => {
      alert('Buyurtma yuborildi');
      localStorage.removeItem('cart');
      router.push('/');
    })
    .catch(() => {
      alert('Buyurtma yuborishda xatolik yuz berdi');
    });
}

let modules = [Navigation, Pagination];
</script>

<style lang="scss" scoped>
@import "../assets/css/mixins";

.cart__wrapper {
  margin-top: 79px;
  .container {
    display: flex;
    flex-direction: column;
    gap: 50px;

    .sendorder {
      width: fit-content;
      margin: 0 auto;
      color: #fff;
      border-radius: 10px;
      padding: 10px;
      background-color: #eb6101;
    }

    @media (max-width: 800px) {
      display: flex;
      flex-direction: column-reverse;
    }

    input,
    select {
      border: 1px solid #a6a6a6;
      border-radius: 10px;
      padding: 15px 16px;
    }

   
    .cart__right {
      width: 100%;
      display: flex;
      flex-direction: column;
      @media (max-width: 800px) {
        width: 100%;
      }
    }
  }
}

</style>