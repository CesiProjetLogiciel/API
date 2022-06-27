/**
* Data Model Interfaces
*/

import axios from "axios";

import { BasePaypal, UserPaypal } from "../models/paypal.interface";

/**
* Service Methods
*/

export const createPaypal = async function (user_id: number, paypal: BasePaypal): Promise<true|null> {
    // TODO axios

    if (!user_id) {
        return null;
    }
    return true;
}

export const readPaypal = async function (user_id: number): Promise<UserPaypal|null> {
    // TODO axios
    var paypal: UserPaypal = {
        user_id: 5,
        paypal: "restaurant@mail.com"
    }

    if (!user_id) {
        return null;
    }
    return paypal;
}

export const updatePaypal = async function (user_id: number, changes: BasePaypal): Promise<true|null> {
    // TODO axios

    if (!user_id) {
        return null;
    }
    return true;
}

export const deletePaypal = async function (user_id: number): Promise<true|null> {
    // TODO axios

    if (!user_id) {
        return null;
    }
    return true;
}