import { Product } from "./Products";

export class Stock {
    private listaProductos:  Array<Product> = []


    addProduct(producto: Product, cantidad: number) {
    for(let i = 0; i < cantidad; i++) {
        this.listaProductos.push(producto);
    }
    }
    getAll () : Array<Product> {
    return this.listaProductos
    }
    
    delete(product: Product, cant: number) {
       let cont = 1
        const nuevo: Product [] = this.listaProductos.filter((prod)=> {
            if(prod != product){
              return prod
            }else{
              if(cont <= cant){
                cont ++
              }else{
                return prod
              }
            }
          })
          this.listaProductos = nuevo}

    }
 
