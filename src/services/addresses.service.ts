/**
* Data Model Interfaces
*/

import axios from "axios";

import { Address, BaseAddress, PutAddress } from "../models/address.interface";

/**
* Service Methods
*/

export const createAddress = async function (user_id: number, address: BaseAddress): Promise<true|null> {
    // TODO axios

    if (!user_id) {
        return null;
    }
    return true;
}

export const readAddress = async function (user_id: number): Promise<Array<Address>|null> {
    // TODO axios
    var addresses: Array<Address> = [
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
    return addresses;
}

export const updateAddress = async function (user_id: number, address_id: number, changes: PutAddress): Promise<true|null> {
    // TODO axios

    if (!user_id || !address_id) {
        return null;
    }
    return true;
}

export const deleteAddress = async function (user_id: number, address_id: number): Promise<true|null> {
    // TODO axios

    if (!user_id || !address_id) {
        return null;
    }
    return true;
}