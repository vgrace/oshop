import { Product } from "./product";

export class ShoppingCartItem { 
    $key: string; 
    title: string;
    imageUrl: string;
    price: number;
    quantity: number; 

    // Object that looks lite ShoppingCartItem, can have one or more parameters
    constructor (init?: Partial<ShoppingCartItem>){
        Object.assign(this, init); 
    }
    get totalPrice() { return this.price * this.quantity; }
}