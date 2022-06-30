/**
* Data Model Interfaces
*/

import axios from "axios";

import { Delivery } from "../models/order.interface";
import * as AddressesService from "../services/addresses.service";

/**
* Service Methods
*/

export const readDeliveryList = async function (): Promise<Array<Delivery>> {

    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.DELIVERY_SERVICE_PORT}/deliveries`
    });
    var getDeliveries = async function (delivery: any) {
        return {
            id: delivery._id,
            user_id: delivery.Client,
            delivery_address: delivery.DeliveryAddress,
            restaurant_id: delivery.Restaurant.ObjectId,
            restaurant_address: (await AddressesService.readAddress(delivery.Restaurant.id))[0].id,
            deliveryman_id: delivery.DeliveryMan,
            status: delivery.Status
        }
    }
    var deliveries = await Promise.all(response.data.map(getDeliveries));

    return deliveries;
}

export const readDelivery = async function (id: string): Promise<Delivery|null> {

    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.DELIVERY_SERVICE_PORT}/deliveries/${id}`
    });
    var delivery = {
        id: response.data[0]._id,
        user_id: response.data[0].Client,
        delivery_address: response.data[0].DeliveryAddress,
        restaurant_id: response.data[0].Restaurant.ObjectId,
        restaurant_address: (await AddressesService.readAddress(response.data[0].Restaurant.id))[0].id,
        deliveryman_id: response.data[0].DeliveryMan,
        status: response.data[0].Status
    }

    // if (!id) {
    //     return null;
    // }
    return delivery;
}