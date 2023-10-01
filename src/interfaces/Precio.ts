export interface Precio {
    price: number;
//cantidad es un parámetro opcional
//lo uso en caso de que se seleccione el tipo de venta por cantidad o por bolsa
    calcular(cantidad?: number): number;
}
