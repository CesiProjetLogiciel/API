/**
* Data Model Interfaces
*/

import axios from "axios";

import { Address, BaseAddress, PutAddress } from "../models/address.interface";

/**
* Service Methods
*/

export const createBilling = async function (user_id: number, billing: BaseAddress): Promise<true|null> {
    // TODO axios

    if (!user_id) {
        return null;
    }
    return true;
}

export const readBilling = async function (user_id: number): Promise<Array<Address>|null> {
    // TODO axios
    var billings: Array<Address> = [
        {
            id: 1,
            user_id: 5,
            zipcode: "54000",
            city: "Nancy",
            address: "19 Avenue de la Forêt de Haye",
            state: "",
            additional_info: "Bâtiment Cesi",
            last_name: "Boulanger",
            first_name: "Paul",
            phone_number: "+33688156385",
            country: "France"
        }
    ]

    if (!user_id) {
        return null;
    }
    return billings;
}

export const updateBilling = async function (user_id: number, billing_id: number, changes: PutAddress): Promise<true|null> {
    // TODO axios

    if (!user_id || !billing_id) {
        return null;
    }
    return true;
}

export const deleteBilling = async function (user_id: number, billing_id: number): Promise<true|null> {
    // TODO axios

    if (!user_id || !billing_id) {
        return null;
    }
    return true;
}