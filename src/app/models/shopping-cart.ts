import { Product } from './product';
import { ShoppingCartItem } from './shopping-cart-item';

// If logic is added interface -> class
export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
        this.itemsMap = itemsMap || {};

        for (let productId in itemsMap) {
            let item = itemsMap[productId];
            // let x = new ShoppingCartItem({
            //     // // Method 2
            //     // title: item.title,
            //     // imageUrl: item.imageUrl,
            //     // price: item.price,
            //     // Method 3 spreading
            //     ...item,
            //     $key: productId
                
            // });
            // // Method 1
            // //Object.assign(x, item); 
            // //x.$key = productId; 
            this.items.push(new ShoppingCartItem({...item, $key: productId}));
        }
    }

    getQuantity(product: Product) {
        let item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    }

    get totalPrice() {
        let sum = 0;
        for (let productId in this.items)
            sum += this.items[productId].totalPrice;
        return sum;
    }

    get totalItemsCount(): number {
        let count = 0;
        for (let productId in this.items)
            count += this.items[productId].quantity;
        return count;
    }

}