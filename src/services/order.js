import API from "./API"

export async function createOrder(products) {
  return await API.post('/create_order', {
    products: products
  })
}