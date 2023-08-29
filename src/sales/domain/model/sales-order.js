import { SalesOrderItem } from './sales-order-item.js';
export class SalesOrder {
    constructor(id, customerId) {
        this._id = id;
        this.customerId = customerId;
        this._items = [];

    }
    addItem({ productId, quantity, unitPrice }) {
        this._items.push(new SalesOrderItem({
            orderId: this._id,
            productId,
            quantity,
            unitPrice
        }));
    }

    calculateTotalPrice() {
        return this._items.reduce((total, item) => total + item.calculateItemPrice(), 0);
    }

    get items() {
        return this._items;
    }

}