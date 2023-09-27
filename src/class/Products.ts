import { Precio } from "../interfaces/Precio";

export class Product {
    id: number = 0;
    name: string = ''
    price: Precio;
    
    //constructor (como su nombre lo indica)
    constructor(
        {name,price}:
        {name : string, price : Precio}
    ){
        this.name = name;
        this.price = price;
     
    }
//Métodos
    getProduct() {
        return{
            id: this.id,
            name: this.name,
            price: this.price,
        }
    }
    
    setTipoVenta( type : Precio){
        this.price = type
        
    }
}
