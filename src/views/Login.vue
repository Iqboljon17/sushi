<template>
  <div>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-10 w-auto"
          src="../assets/images/png/лого.png"
          alt="Your Company"
        />
        <h2
          class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
        >
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form v-if="!store.token" class="space-y-6" @submit.prevent="login()">
          <div>
            <label class="block text-sm/6 font-medium text-gray-900"
              >Username</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="Username"
                required
                class="border block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm/6 font-medium text-gray-900"
                >Password</label
              >
            </div>
            <div class="mt-2 flex items-center gap-[5px]">
              <input
                v-model="Password"
                :type="inputType"
                required
                class="border block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <button
                @click="viewPassword()"
                type="button"
                class="view__Password"
              >
                <img src="" alt="" />
              </button>
            </div>
          </div>

          <div>
            <button
              class="bg-[#eb6101] flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <button
          @click="signOut()"
          v-if="store.token"
          type="button"
          class="bg-[#eb6101] flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign Out
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/store";
import services from "@/services/services";
let Name = ref("");
let Username = ref("");
let Password = ref("");

let store = useCounterStore();
let inputType = ref("password");
function viewPassword() {
  if (inputType.value == "password") {
    inputType.value = "text";
  } else {
    inputType.value = "password";
  }
}
async function login() {
  let formdata = new FormData();
  formdata.append("username", Username.value);
  formdata.append("password", Password.value);
  let res = await services.login(formdata);
  localStorage.setItem("token", res.data?.access_token);
  store.token = res.data.access_token;  
}

function signOut() {
  localStorage.clear();
  window.location.href = "/";
}
</script>

<style lang="scss" scoped>
.view__Password {
  width: 20px;
  height: 20px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>