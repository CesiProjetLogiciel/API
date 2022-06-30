/**
* Data Model Interfaces
*/

import axios from "axios";

import { Order, OrderUpdate, PostOrder } from "../models/order.interface";
import * as ProductsService from "../services/products.service";
import * as MenusService from "../services/menus.service";
import * as UsersService from "../services/users.service";

/**
* Service Methods
*/

export const createOrder = async function (order: PostOrder, sql_id: number): Promise<true|null> {
    var body: any = {
        client: order.user_id,
        products: order.product_ids,
        restaurantSql: sql_id,
        restaurantMongo: order.restaurant_id,
        price: order.price,
        deliveryAddress: order.delivery_address,
        billingAddress: order.billing_address
    }
    var response = await axios({
        method: "post",
        url: `${process.env.SERVICES_URL}:${process.env.ORDER_SERVICE_PORT}/orders`,
        data: body
    });

    return true;
}

export const readOrderList = async function (): Promise<Array<Order>> {

    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.ORDER_SERVICE_PORT}/orders`
    });
    console.log(response.data)
    var getOrders = async function (order: any) {  
        const restaurant_id = order.Restaurant.ObjectId;
        console.log("ORDER")
        console.log(order.Products)
        var products: Array<any> = await Promise.all( order.Products.map(
            async function (product_id: string) {
                var product: any = await ProductsService.readProduct(restaurant_id, product_id);
                if (!product) {
                    product = await MenusService.readMenu(restaurant_id, product_id);
                    if (!product) {
                        return {
                            id: product_id,
                            name: "",
                            description: "",
                            type: "unknown"
                        }
                    }
                    return {
                        id: product_id,
                        name: product.name,
                        description: product.description ? product.description : "",
                        type: "menu"
                    }
                }
                if (product) {
                    return {
                        id: product_id,
                        name: product.name,
                        description: product.description ? product.description : "",
                        type: "product"
                    }
                }
            }
        ) );
        var deliveryman = await UsersService.readUser(order.DeliveryMan);
        console.log(deliveryman)
        return {
            id: order._id,
            user_id: order.Client,
            delivery_address: order.DeliveryAddress,
            billing_address: order.BillingAddress,
            restaurant_id: order.Restaurant.ObjectId,
            products: products,
            price: order.Price,
            deliveryman_id: order.DeliveryMan,
            deliveryman_firstname: deliveryman?.first_name,
            deliveryman_lastname: deliveryman?.last_name,
            status: order.Status
        }
    }
    var orders: Array<Order> = await Promise.all(response.data.map(getOrders));

    return orders;
}

export const readOrder = async function (id: string): Promise<Order|null> {

    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.ORDER_SERVICE_PORT}/orders/${id}`
    });

    var getProduct = async function (product_id: string) {
        var product: any = await ProductsService.readProduct(response.data[0].Restaurant.ObjectId, product_id);
        if (!product) {
            product = await MenusService.readMenu(response.data[0].Restaurant.ObjectId, product_id);
        }
        if (product) {
            return {
                id: product_id,
                name: product.name,
                description: product.description ? product.description : ""
            }
        }
    }
    var deliveryman = await UsersService.readUser(response.data[0].DeliveryMan);
    var order: Order = {
        id: response.data[0]._id,
        user_id: response.data[0].Client,
        delivery_address: response.data[0].DeliveryAddress,
        billing_address: response.data[0].BillingAddress,
        restaurant_id: response.data[0].Restaurant.ObjectId,
        products: await Promise.all(response.data[0].Products.map(getProduct)),
        price: response.data[0].Price,
        deliveryman_id: response.data[0].DeliveryMan,
        deliveryman_firstname: deliveryman?.first_name,
        deliveryman_lastname: deliveryman?.last_name,
        status: response.data[0].Status
    }

    // if (!id) {
    //     return null;
    // }
    return order;
}

export const updateOrder = async function (id: string, changes: OrderUpdate): Promise<true|null> {
    var body: any = {};
    if (changes.deliveryman_id) body.DeliveryMan = changes.deliveryman_id;
    if (changes.status) body.Status = changes.status;
    var response = await axios({
        method: "put",
        url: `${process.env.SERVICES_URL}:${process.env.ORDER_SERVICE_PORT}/orders/${id}`,
        data: body
    });

    // if (!id) {
    //     return null;
    // }
    return true;
}

export const validatePayment = async function (payment_token: string): Promise<Boolean> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.PAYMENT_SERVICE_PORT}/payment/`
    });

    return response.data;
}