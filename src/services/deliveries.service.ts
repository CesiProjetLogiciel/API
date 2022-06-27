/**
* Data Model Interfaces
*/

import axios from "axios";

import { Delivery } from "../models/order.interface";

/**
* Service Methods
*/

export const readDeliveryList = async function (): Promise<Array<Delivery>> {
    // TODO axios
    var deliveries: Array<Delivery> = [
        {
            id: 1,
            user_id: 5,
            delivery_address: "19 Avenue de la Forêt de Haye, 54000 Nancy",
            restaurant_id: 6,
            restaurant_address: "14 rue du forgeron, 54000 Nancy",
            deliveryman_id: 7,
            status: "DELIVERED"
        }
    ]

    return deliveries;
}

export const readDelivery = async function (id: number): Promise<Delivery|null> {
    // TODO axios
    var delivery: Delivery = {
        id: 1,
        user_id: 5,
        delivery_address: "19 Avenue de la Forêt de Haye, 54000 Nancy",
        restaurant_id: 6,
        restaurant_address: "14 rue du forgeron, 54000 Nancy",
        deliveryman_id: 7,
        status: "DELIVERED"
    }

    if (!id) {
        return null;
    }
    return delivery;
}