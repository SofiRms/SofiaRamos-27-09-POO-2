import { Precio } from "./interfaces/Precio";
import { PrecioCantidad } from "./class/PrecioCantidad";
import { PrecioPorBolsa } from "./class/PrecioPorBolsa";
import { PrecioUnitario } from "./class/Preciounidad";
import { Stock } from './class/Stock';
import { Product } from './class/Products';



const stock: Stock = new Stock();//objeto con las características de la clase stock


document.addEventListener('DOMContentLoaded', () => {
  const enviarButton = document.getElementById('enviar');

  if (enviarButton) {
    enviarButton.addEventListener('click', () => {
      // valores de los campos del formulario
      const nombreProducto = (document.getElementById('seleccion') as HTMLSelectElement).value;
      const tipoVenta = (document.getElementById('tipoVenta') as HTMLSelectElement).value;
      const cantidadRegistrar = (document.getElementById('cantidad-agregar') as HTMLInputElement).value;
      let precioInput = parseInt((document.getElementById('precio') as HTMLInputElement).value);

      const cantidad = parseInt(cantidadRegistrar);
      let precio: Precio

      // instancia de Precio
      switch (tipoVenta) {
        case 'Unitario':
          precio = new PrecioUnitario(precioInput);
          break;
        case 'Cantidad':
          precio = new PrecioCantidad(precioInput);
          break;
        case 'Bolsa':
          precio = new PrecioPorBolsa(precioInput);
          break;
      }

      if (precio) {
        // Crear un objeto de producto
        const nuevoProducto: Product = new Product({
          name: nombreProducto,
          price: precio,
        });

        // Agregar el producto al array de productos
        stock.addProduct(nuevoProducto, cantidad);

        console.log("Producto agregado:", nuevoProducto);
        console.log("Lista de productos:", stock.getAll());

        Inventario(nuevoProducto)

      }
    });
  }
});

function Inventario(nuevoProducto: Product) {

  const idStock = document.getElementById('Agregar')

  const productoAgregado= nuevoProducto.name
  const productoAgregadoPrecio = nuevoProducto.price.price
  if (idStock) {
    idStock.innerHTML = ` Se agregó ${productoAgregado} al stock. Precio $ ${productoAgregadoPrecio}`

  }

}

document.addEventListener('DOMContentLoaded', () => {
  const enviarButton = document.getElementById('enviar2');

  if (enviarButton) {
    enviarButton.addEventListener('click', () => {

      const producto = (document.getElementById('seleccion2') as HTMLSelectElement).value;
      const vendido = (document.getElementById('cantidad-vendida') as HTMLInputElement).value;
      const ventas = parseInt(vendido)

      if (!producto) {
        return false
      }
      const productos: Product[] = stock.getAll().filter((p) => p.name === producto)

      stock.delete(productos[0], ventas)


      Mostar()

    }
    )
  }
});


function Mostar() {

  const stockElement = document.getElementById('stockElement');


  const stock1 = stock.getAll()

  const list = {
    mother: 0,
    monitor: 0,
    teclado: 0,
    notebook: 0,
    procesador: 0,
  }

  stock1.forEach((product) => {
    switch (product.name) {
      case 'Motherboard':
        list.mother++;
        break;
      case 'Monitor':
        list.monitor++;
        break;
      case 'Notebook':
        list.notebook++;
        break;
      case 'Procesador':
        list.procesador++;
        break;
      case 'Teclado':
        list.teclado++;
        break;
      default:
        console.log(product.name)
        break;
    }
  })

  if (stockElement) {
    // Crear un mensaje de stock disponible
    const mensajeStock = `Stock disponible para :\n
    teclado: ${list.teclado}\n
    motherboard: ${list.mother}\n
    notebook: ${list.notebook}\n
    procesador: ${list.procesador}\n
    monitor: ${list.monitor}`;

    // Asignar el mensaje al innerHTML del elemento
    stockElement.innerHTML = mensajeStock;
  }
}





export { }
