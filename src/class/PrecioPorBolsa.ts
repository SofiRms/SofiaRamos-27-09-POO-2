import { Precio } from "../interfaces/Precio";

export class PrecioPorBolsa implements Precio{
    price: number;

    constructor(price: number){
        this.price = price; //desestructuración
    }

    calcular(cantidad?: number): number {

        if(!cantidad)return 0
//si la compra es de 10 bolsas o más, descuento de 30%
        if(cantidad >= 10 ) return this.price* cantidad * 0,70
        
        return this.price * cantidad
    }
}