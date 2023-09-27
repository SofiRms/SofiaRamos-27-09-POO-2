export interface Precio {
    price: number;

    calcular(cantidad?: number): number;
}
