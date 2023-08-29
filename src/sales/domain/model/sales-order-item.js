class SalesOrderItem {
    constructor({ orderId, productId, quantity, unitPrice}) {
        this._orderId = orderId;
        this._productId = productId;
        this._quantity = quantity;
        this._unitPrice = unitPrice;
    }

    calculateItemPrice() {
        return this._quantity * this._unitPrice;
    }
}