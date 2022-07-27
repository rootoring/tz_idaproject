
const copyObj = (obj) => JSON.parse(JSON.stringify(obj))

export const state = () => ({
  productList:[],
  message:false
})

export const mutations = {
  createProduct(state, product){
    state.productList.unshift( copyObj(product) );
  },
  productDelete(state, index){
  	state.productList.splice(index, 1)
  },
  setMessage(state, ctx){
  	state.message = ctx;
  }

}

export const actions = {
}

export const getters = {
  getProduct(state){
  	return state.productList
  },
  getMessageStatus(state){
  	return state.message
  }
}  

