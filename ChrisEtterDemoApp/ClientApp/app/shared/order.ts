﻿import * as _ from "lodash";

export class Order {

    constructor() {
        this.items = new Array<OrderItem>();
    }

    orderId: number;
    orderDate: Date = new Date();
    orderNumber: string;
    items: Array<OrderItem>;

    get subTotal(): number {
        return _.sum(_.map(this.items, i => i.unitPrice * i.quantity));
    }
}

export class OrderItem {
    id: number;
    quantity: number;
    unitPrice: number;
    productId: number;
    productCategory: string;
    productSize: string;
    productTitle: string;
    productArtist: string;
    productArtId: string;
}

