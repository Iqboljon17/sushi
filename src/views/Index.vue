<template>
  <div>
    <Swiper :pagination="true" :modules="modules">
      <SwiperSlide v-for="item in 5" :key="item">
        <div class="hero">
          <div class="container">
            <img
              src="@/assets/images/jpg/баннер 1.jpg"
              alt=""
              class="hero-img"
            />
            <button class="hero__button">Подробнее</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <indexCard :product="item"/>

    <router-view />
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import indexCard from "@/components/indexCard.vue";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import services from "@/services/services";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";


let modules = [Navigation, Pagination];
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
      background-color: #eb6101;
      color: #fff;
      border: none;
      border-radius: 10px;
      cursor: pointer;

      @media (max-width: 1000px) {
        left: 70px;
        bottom: 65px;
      }
      @media (max-width: 940px) {
        left: 60px;
        bottom: 50px;
      }
      @media (max-width: 900px) {
        left: 60px;
        bottom: 40px;
      }
      @media (max-width: 760px) {
        left: 60px;
        bottom: 30px;
        padding: 10px 20px;
      }
      @media (max-width: 625px) {
        left: 50px;
        bottom: 20px;
        padding: 7px 15px;
      }
      @media (max-width: 500px) {
        left: 40px;
        bottom: 10px;
        padding: 7px 7px;
        @include font(400px, 12px, 1.2);
      }
      @media (max-width: 400px) {
        left: 40px;
        bottom: 5px;
        padding: 5px 5px;
        @include font(300px, 9px, 1.2);
      }
    }
  }
}
</style>  