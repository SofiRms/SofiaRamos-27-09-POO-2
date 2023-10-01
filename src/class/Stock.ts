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
    //retornar lista de productos cuando se borra uno
    delete(product: Product, cant: number) {
      let cont = 1; // Inicializo contador en 1
    
      const nuevo: Product[] = this.listaProductos.filter((prod) => {
        if (prod != product) {
          // 💻Si el producto no es igual al que quiero eliminar , lo conservo en la nueva lista.
          return prod;
        } else {
          if (cont <= cant) {
            // Si encuentra el producto que quiero eliminar y todavía no alcanzó la cantidad máxima que se debe eliminar (cant), incrementa el contador.
            cont++;
          } else {
            // Si ya se alcanzó la cantidad máxima de eliminación, se conserva el producto en la nueva lista.
            return prod;
          }
        }
      });
    
      this.listaProductos = nuevo; // Asignamos la nueva lista de productos a this.listaProductos
    }
    
 
