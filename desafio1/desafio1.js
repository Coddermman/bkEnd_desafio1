class ProductManager{
    #products
    #error
    constructor(){
        this.#products=[]
        this.#error = undefined

    }
getProducs = ()=> this.#products
getProductById = (id) => {
    const product =this.#products.find(item => item.id === id)
    if (!product) return 'Product Not found'
    return product
}
#generateId = ()=> (this.#products.length === 0)? 1 : this.#products[this.#products.length-1].id + 1
#validation = (title, description, price, thumbnail, code, stock)=>{
   if (!title ||  !description || !price || !thumbnail || !code || !stock) {
    this.#error = `this Item [${title}] missing dates`
   }else {
    const found = this.#products.find(item =>item.code === code)
    if(found) this.#error = `This Item [${title}] with code already used`
    else this.#error = undefined
   }

}

addProduct =(title, description, price, thumbnail, code, stock) =>{
     this.#validation(title, description, price, thumbnail, code, stock) 
     if (this.#error === undefined ) 
     this.#products.push({id: this.#generateId(), title, description, price, thumbnail, code, stock})
     else console.log(this.#error)
     
}
}


const productManager = new ProductManager()
// console.log(productManager.getProducs())
productManager.addProduct('titulo1', 'descripcion1', 5, 'https://images.app.goo.gl/jf9nHnayNyKsw', 'asd01', 23)
productManager.addProduct('titulo2', 'descripcion2', 5, 'https://images.app.goo.gl/jf9nHnayNyKsw', 'asd02')
productManager.addProduct('titulo3', 'descripcion3', 5, 'https://images.app.goo.gl/jf9nHnayNyKsw', 'asd01',78 )
productManager.addProduct('titulo4', 'descripcion4', 5, 'https://images.app.goo.gl/jf9nHnayNyKsw', 'asd04', 74)
console.log(productManager.getProducs())
console.log(productManager.getProductById(2))
console.log(productManager.getProductById(9))