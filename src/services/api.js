import axios from 'axios'

axios.defaults.baseURL = 'https://my-json-server.typicode.com/narek941/FakeJSONPlaceholder'

const getAllProductsItems = async () => {
  const response = await axios.get('/product')
  return response.data
}
const getCarouselItems = async () => {
  const response = await axios.get('/carousel')
  return response.data
}
const getAllCategoryItems = async () => {
  const response = await axios.get('/categories')
  return response.data
}
const getProductItemById = async id => {
  const response = await axios.get(`/product/${id}`)
  return response.data
}
const getProductWithPassedPageNumber = async (passedPageNumber) => {

  const response = await axios.get(`/product`, {
    params: {
      per_page: 9,
      _page: passedPageNumber ? passedPageNumber : 1,
    }
  }
  );
  return response.data
}
const getProductItemsWithCategory = async category => {
  if (category === 'all') {
    return getAllProductsItems()
  }
  const response = await axios.get(`/product?category=${category}`)
  return response.data;
}
const getLimitItems = async (limit) => {
  const response = await axios.get(`/product/?_limit=${limit}`)
  return response.data
}
// const getAllOrderHistory = async () => {
//   const response = await axios.get('/order-history')
//   return response.data
// }

// const getOrderHistoryItemById = async id => {
//   const response = await axios.get(`/order-history/${id}`)
//   return response.data
// }


// const addOrderHistoryItem = async item => {
//   const response = await axios.post('/order-history', item)
//   return response.data
// }



export {
  getAllProductsItems,
  getProductWithPassedPageNumber,
  getCarouselItems,
  getAllCategoryItems,
  getProductItemById,
  getProductItemsWithCategory,
  getLimitItems
}
