import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  let token = ref(localStorage.getItem("auth") ? localStorage.getItem("auth") : null)
  let cart = ref([])

  return { cart, token }
})
