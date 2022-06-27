/**
* Data Model Interfaces
*/

import axios from "axios";

import { Order, OrderUpdate, PostOrder } from "../models/order.interface";

/**
* Service Methods
*/

export const createOrder = async function (order: PostOrder): Promise<true|null> {
    // TODO axios

    return true;
}

export const readOrderList = async function (): Promise<Array<Order>> {
    // TODO axios
    var orders: Array<Order> = [
        {
            id: 1,
            user_id: 5,
            delivery_address: "19 Avenue de la Forêt de Haye, 54000 Nancy",
            restaurant_id: 6,
            product_ids: [1, 2],
            menu_ids: [1],
            price: 7.0,
            deliveryman_id: 7,
            status: "DELIVERED"
        }
    ]

    return orders;
}

export const readOrder = async function (id: number): Promise<Order|null> {
    // TODO axios
    var order: Order = {
        id: 1,
        user_id: 5,
        delivery_address: "19 Avenue de la Forêt de Haye, 54000 Nancy",
        restaurant_id: 6,
        product_ids: [1, 2],
        menu_ids: [1],
        price: 7.0,
        deliveryman_id: 7,
        status: "DELIVERED"
    }

    if (!id) {
        return null;
    }
    return order;
}

export const updateOrder = async function (id: number, changes: OrderUpdate): Promise<true|null> {
    // TODO axios

    if (!id) {
        return null;
    }
    return true;
}

export const validatePayment = async function (payment_token: string): Promise<Boolean> {
    // TODO axios

    if (payment_token) {
        return true;
    }
    else {
        return false;
    }
}