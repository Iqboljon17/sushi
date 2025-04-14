<template>
  <div>
    <header>
      <div class="header__media-menu">
        <div class="header__media-menu-nav">
          <ul>
            <li>
              <div class="item">
                Меню
                <button @click="openMenuItem()">></button>
              </div>
              <ul class="header__menu-nav-item">
                <li><router-link to="/">Роллы</router-link></li>
                <li><router-link>Запеченные роллы</router-link></li>
                <li><router-link>Горячие роллы</router-link></li>
                <li><router-link to="/setCart">Сеты</router-link></li>
                <li><router-link>Закуски</router-link></li>
                <li><router-link>Wok</router-link></li>
                <li><router-link>Пицца</router-link></li>
                <li><router-link>Напитки</router-link></li>
                <li><router-link to="/SiteLocation">site location</router-link></li>
              </ul>
            </li>
          </ul>
          
          <div class="header__menu-nav-item">
            <li>Роллы</li>
            <li>Роллы</li>
            <li>Роллы</li>
            <li>Роллы</li>
            <li>Роллы</li>
          </div>
        </div>
        <button @click="removeMediaMenu()" class="closeMeu">
          <img src="./assets/images/svg/icons8-close (1).svg" alt="" />
        </button>
      </div>
      <div class="container">
        <button @click="addMediaMenu()" class="header__menu">
          <img src="./assets/images/svg/menu.svg" alt="" />
        </button>
        <button class="header__button">
          <img
            class="header__button-img"
            src="./assets/images/svg/header-btn-img.svg"
            alt=""
          />
          <span class="header__button-text">Вход</span>
        </button>

        <div class="header__info">
          <router-link to="/SiteLocation">
            <div class="location">
              <div class="location__img">
                <img src="./assets/images/svg/location.svg" alt="" class="" />
              </div>
              <select name="" id="">
                <option value="">Одинцово</option>
                <option value="">Одинцово</option>
              </select>
            </div>
          </router-link>
          <div class="info__phone-number">
            <p>+7 (499) 322 06 72 доб 4</p>
          </div>
        </div>

        <router-link to="/" class="header__logo">
          <img src="./assets/images/png/лого.png" alt="" />
        </router-link>

        <div class="header__social">
          <a href="https://www.instagram.com/1q8oljon/">
            <img src="./assets/images/svg/instagram.svg" alt="" />
          </a>
          <a href="#">
            <img src="./assets/images/svg/you tube.svg" alt="" />
          </a>
          <a href="#">
            <img src="./assets/images/svg/VK.svg" alt="" />
          </a>
        </div>

        <div class="header__cart">
          <div class="header__cart-img">
            <img src="./assets/images/svg/cart.svg" alt="" class="" />
            <span>0</span>
          </div>
          <div class="header__cart-info">
            <p>В корзине</p>
            <h2>9 999 ₽</h2>
          </div>
        </div>

        <div class="header__media-cart">
          <img src="./assets/images/svg/корзина.svg" alt="" />
        </div>
      </div>
    </header>

    <div class="header__navbar">
      <div class="container">
        <nav class="header__navlist">
          <ul>
            <li class="nav__item"><router-link to="/">Роллы</router-link></li>
            <li class="nav__item">
              <router-link>Запеченные роллы</router-link>
            </li>
            <li class="nav__item"><router-link>Горячие роллы</router-link></li>
            <li class="nav__item">
              <router-link to="/setCart">Сеты</router-link>
            </li>
            <li class="nav__item"><router-link>Закуски</router-link></li>
            <li class="nav__item"><router-link>Wok</router-link></li>
            <li class="nav__item"><router-link>Пицца</router-link></li>
            <li class="nav__item"><router-link>Напитки</router-link></li>
          </ul>
        </nav>
      </div>
    </div>

    <router-view />

    <footer class="footer">
      <div class="container">
        <div class="footer-left">
          <router-link class="footer-logo">
            <img
              src="./assets/images/svg/Vector (6).svg"
              alt="Logo"
              class="logo-img"
            />
            <span class="logo-text">УНИМЭ СУШИ</span>
          </router-link>
          <div class="footer-contact">
            <span>
              <img
                src="./assets/images/svg/footer-cart.svg"
                alt=""
              />Одинцово</span
            >
            <span class="phone">+7 (499) 322 06 72</span> доб 4
          </div>
        </div>

        <div class="footer-center">
          <div class="menu-column">
            <a href="#">Роллы</a>
            <a href="#">Запеченные роллы</a>
            <a href="#">Горячие роллы</a>
            <a href="#">Сеты</a>
          </div>
          <div class="menu-column">
            <a href="#">Закуски</a>
            <a href="#">Wok</a>
            <a href="#">Пицца</a>
            <a href="#">Напитки</a>
          </div>
        </div>

        <div class="footer-right">
          <div class="social-icons">
            <a href="#"
              ><img
                src="./assets/images/svg/footer-instagram.svg"
                alt="Instagram"
            /></a>
            <a href="#"
              ><img src="./assets/images/svg/footer-youtube.svg" alt="YouTube"
            /></a>
            <a href="#"
              ><img src="./assets/images/svg/footer-vk.svg" alt="VK"
            /></a>
          </div>
          <div class="app-links">
            <a href="#"
              ><img
                src="./assets/images/png/Векторный смарт-объект копия 2.png"
                alt="App Store"
            /></a>
            <a href="#"
              ><img src="./assets/images/png/playmarket.png" alt="Google Play"
            /></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
function addMediaMenu() {
  const MediaMenu = document.querySelector(".header__media-menu");
  MediaMenu.classList.add("header__media-menu-active");
}
function removeMediaMenu() {
  const MediaMenu = document.querySelector(".header__media-menu");
  MediaMenu.classList.remove("header__media-menu-active");
  MediaMenu.classList.add("header__media-menu-close");
}

function openMenuItem() {
  const menuItem = document.querySelector(".header__menu-nav-item");
  menuItem.classList.toggle("header__menu-nav-item-active");
}
</script>

<style lang="scss" scoped>
@import "./assets/css/mixins";

// Container base style
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

// Header
header {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  .header__media-menu {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    background-color: #fff;
    box-shadow: 0px 5px 15px 0px #0000001a;
    transform: translateX(-100%);
    width: 250px;
    height: 100%;

    .header__media-menu-nav {
      margin-top: 50px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      ul {
        li {
          display: flex;
          flex-direction: column;
        }
      }
      .header__menu-nav-item {
        display: none;
      }
      .header__menu-nav-item-active {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      ul {
        li {
          display: flex;
          gap: 20px;

          button {
            background: none;
            border: none;
            cursor: pointer;
          }
        }
      }
    }

    .closeMeu {
      position: absolute;
      top: 0;
      right: 0;
      margin-top: 20px;
      margin-right: 20px;
      width: 20px;
      height: 20px;
      background: none;
      border: none;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }
  .header__media-menu-active {
    transform: translateX(0%);
    transition: all 0.5s ease;
  }
  .header__media-menu-close {
    transition: all 0.5s ease;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 15px 20px;

    .header__menu {
      display: none;
      background: none;
      cursor: pointer;
      border: none;
      @media (max-width: 570px) {
        display: flex;
      }
    }
    .header__media-cart {
      display: none;
      @media (max-width: 570px) {
        display: flex;
      }
    }

    .header__button {
      display: flex;
      align-items: center;
      gap: 9px;
      padding: 10px 15px;
      border-radius: 10px;
      border: 1.5px solid #eb6101;
      background: none;
      cursor: pointer;
      @include media("max-width: 765px") {
        padding: 8px 10px;
      }
      @media (max-width: 570px) {
        display: none;
      }

      .header__button-text {
        @include font(500px, 16px, 1.2);
      }

      .header__button-img {
        width: 20px;
        height: 20px;
        object-fit: contain;
      }
    }

    .header__info {
      display: flex;
      flex-direction: column;
      gap: 5px;
      @media (max-width: 742px) {
        display: none;
      }

      .location {
        display: flex;
        align-items: center;
        gap: 8px;

        .location__img {
          width: 14px;
          height: 18px;

          img {
            width: 100%;
            height: auto;
            display: block;
          }
        }

        select {
          border: none;
          background: transparent;
          font-size: 14px;
          cursor: pointer;
        }
      }

      .info__phone-number {
        font-size: 14px;
        color: #333;
      }
    }

    .header__logo {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 120px;
        height: auto;
        object-fit: contain;
      }
    }

    .header__social {
      display: flex;
      align-items: center;
      gap: 12px;
      @media (max-width: 570px) {
        display: none;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        background-color: #f5f5f5;
        border-radius: 10px;

        img {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }
      }
    }

    .header__cart {
      display: flex;
      align-items: center;
      gap: 12px;
      @media (max-width: 570px) {
        display: none;
      }

      .header__cart-img {
        position: relative;

        img {
          width: 28px;
          height: 28px;
        }

        span {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: #eb6101;
          color: #fff;
          border-radius: 50%;
          padding: 3px 6px;
          font-size: 12px;
        }
      }

      .header__cart-info {
        display: flex;
        flex-direction: column;

        p {
          font-size: 12px;
          margin: 0;
          color: #555;
        }

        h2 {
          font-size: 16px;
          margin: 0;
          font-weight: bold;
        }
      }
    }
  }
}

// Navbar
.header__navbar {
  background-color: #fff;
  border-top: 2px solid #f5f5f5;

  .container {
    padding: 10px 0;

    .header__navlist {
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        padding: 0;
        margin: 0;
        @include font(600px, 16px, 1.2);

        @media (max-widht: 740px) {
          @include font(500px, 10px, 1.2);
        }

        .nav__item {
          padding: 10px 15px;
          transition: all 0.2s ease;

          a {
            text-decoration: none;
            color: #000;
          }

          &:hover {
            border-top: 2px solid #eb6101;
            padding-top: 8px;
            color: #eb6101;
          }
        }
      }
    }
  }
}

.header__navbar {
  ul {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    .nav__item {
      white-space: nowrap;
      font-size: 16px; // default font size
      padding: 0 10px;
    }
  }

  @media (max-width: 570px) {
    display: none; // hide the entire navbar
  }

  @media (max-width: 765px) {
    ul {
      .nav__item {
        font-size: 12px; // reduce font size for smaller screens
        padding: 0 6px;
      }
    }
  }
}
.footer {
  background-color: #fff;
  padding: 40px 20px;
  border-top: 1px solid #ddd;
  color: #333;
  font-size: 14px;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;

    .footer-left,
    .footer-center,
    .footer-right {
      flex: 1 1 200px;
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;

      .logo-img {
        height: 30px;
        object-fit: contain;
      }

      .logo-text {
        font-weight: bold;
        font-size: 20px;
      }
    }

    .footer-contact {
      display: flex;
      flex-direction: column;
      gap: 5px;

      span {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .phone {
        font-weight: bold;
        color: #000;
      }
    }

    .footer-center {
      display: flex;
      gap: 40px;

      .menu-column {
        display: flex;
        flex-direction: column;

        a {
          color: #333;
          text-decoration: none;
          margin-bottom: 8px;
          transition: color 0.3s;

          &:hover {
            color: #eb6101;
            text-decoration: underline;
          }
        }
      }
    }

    .footer-right {
      display: flex;
      flex-direction: column;
      gap: 15px;

      .social-icons,
      .app-links {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
      }

      .social-icons img {
        background-color: #eb6101;
        padding: 10px;
        border-radius: 10px;
        width: 36px;
        height: 36px;
      }

      .app-links img {
        height: 36px;
        object-fit: contain;
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
  }
}
</style>