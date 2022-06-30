/**
* Data Model Interfaces
*/

import axios from "axios";

import { BasePaypal, UserPaypal } from "../models/paypal.interface";

/**
* Service Methods
*/

export const createPaypal = async function (user_id: number, paypal: BasePaypal): Promise<true|null> {
    var response = await axios({
        method: "post",
        url: `${process.env.SERVICES_URL}:${process.env.PAYPAL_SERVICE_PORT}/paypal`,
        data: {
            idUser: user_id,
            Paypal: paypal.paypal
        }
    });

    // if (!user_id) {
    //     return null;
    // }
    return true;
}

export const readPaypal = async function (user_id: number): Promise<UserPaypal|null> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.PAYPAL_SERVICE_PORT}/paypal?idUsers=${user_id}`
    });
    if (Array.isArray(response.data) && !response.data.length) {
        return null;
    }
    var paypal: UserPaypal = {
        paypal_id: response.data[0].id,
        user_id: response.data[0].id_Users,
        paypal: response.data[0].paypal
    }

    return paypal;
}

export const updatePaypal = async function (user_id: number, changes: BasePaypal): Promise<true|null> {
    var userPaypal: UserPaypal|null = await readPaypal(user_id);
    if (userPaypal) {
        var response = await axios({
            method: "put",
            url: `${process.env.SERVICES_URL}:${process.env.PAYPAL_SERVICE_PORT}/paypal/${userPaypal.paypal_id}`,
            data: {
                Paypal: changes.paypal
            }
        });
        console.log(response.data)
    }

    // if (!user_id) {
    //     return null;
    // }
    return true;
}

export const deletePaypal = async function (user_id: number): Promise<true|null> {
    var userPaypal: UserPaypal|null = await readPaypal(user_id);
    if (userPaypal) {
        var response = await axios({
            method: "delete",
            url: `${process.env.SERVICES_URL}:${process.env.PAYPAL_SERVICE_PORT}/paypal/${userPaypal.paypal_id}`
        });
    }

    // if (!user_id) {
    //     return null;
    // }
    return true;
}