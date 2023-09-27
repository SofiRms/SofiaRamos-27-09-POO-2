import { Precio } from "../interfaces/Precio";

export class PrecioCantidad implements Precio{
    price: number;

    constructor( price: number){
        this.price = price; //definir
    }

    calcular(cantidad?: number): number {

        if(!cantidad) return 0
//descuento para 5 o más unidades de producto
        if(cantidad >= 5) return this.price * 0,85 *cantidad
//descuento para 10 unidades o más
        if(cantidad >= 10) return this.price * 0,75 * cantidad

        return this.price* 0,9 * cantidad
    }

}

