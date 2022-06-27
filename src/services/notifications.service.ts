/**
* Data Model Interfaces
*/

import axios from "axios";

import { PostRestaurant, PutRestaurant, Restaurant } from "../models/restaurant.interface";

/**
* Service Methods
*/

export const createNotification = async function (): Promise<true|null> {
    // TODO axios

    return true;
}

export const readNotificationList = async function (): Promise<Array<any>> {
    // TODO axios
    const items = [{test: ""}]

    return items;
}

export const deleteNotification = async function (id: number): Promise<true|null> {
    // TODO axios

    if (!id) {
        return null;
    }
    return true;
}