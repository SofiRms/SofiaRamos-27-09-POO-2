import { Precio } from "./Precio";
export class Producto {
    id: number = 0;
    name: string = ''
    price: Precio;
    available: boolean = true

    constructor(
        {name,price, available}:
        {name : string, price : Precio, available: boolean}
    ){
        this.name = name;
        this.price = price;
        this.available = available;
    }
}