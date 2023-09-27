import { Precio } from "../interfaces/Precio";

export class PrecioUnitario implements Precio{
    price: number;

    constructor( price: number){
        this.price = price; //definir
    }

    calcular(cantidad : number): number {
        return this.price * cantidad
    }

   
}