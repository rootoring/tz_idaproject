function SortArray(x, y){
    if (x.name < y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
}


const copyObj = (obj) => JSON.parse(JSON.stringify(obj))



export const state = () => ({
  productList: [],
  message:false
})

export const mutations = {
  createProduct(state, product){
  	product.id = Math.random() * (0 - 99999) + 0;
    state.productList.unshift( copyObj(product) );
    localStorage.setItem('test', JSON.stringify(state.productList));
  },
  productDelete(state, index){
  	state.productList.splice(index, 1)
  	localStorage.setItem('test', JSON.stringify(state.productList));
  },
  setMessage(state, ctx){
  	state.message = ctx;
  },
  productFilter(state, status){
  	if(status === 'max') state.productList.sort((prev, next) =>  next.price - prev.price); 
  	if(status === 'min') state.productList.sort((prev, next) => prev.price - next.price); 
  	if(status === 'name') state.productList.sort(SortArray);
  },
  productStatic(state){ 
    if (JSON.parse( localStorage.getItem('test')) === null) {return 0}
    state.productList  = JSON.parse( localStorage.getItem('test'))  	
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

