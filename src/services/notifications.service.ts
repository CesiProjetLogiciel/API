/**
* Data Model Interfaces
*/

import axios from "axios";

import { PostRestaurant, PutRestaurant, Restaurant } from "../models/restaurant.interface";

/**
* Service Methods
*/

export const createNotificationUser = async function (phone_number: string, content: string): Promise<true|null> {
    console.log("before")
    try {
        var response = await axios({
            method: "post",
            url: `${process.env.SERVICES_URL}:${process.env.NOTIFICATION_SERVICE_PORT}/notifications/users`,
            data: {
                phonenumber: phone_number,
                body: content
            }
        });
    } catch(e: any) {
        console.log(e.response.data.message)
        return null;
    }
    

    return true;
}

export const createNotificationRestaurant = async function (phone_number: string, content: string): Promise<true|null> {
    var response = await axios({
        method: "post",
        url: `${process.env.SERVICES_URL}:${process.env.NOTIFICATION_SERVICE_PORT}/notifications/restaurant`,
        data: {
            phonenumber: phone_number,
            body: content
        }
    });

    return true;
}

export const createNotificationDeliveryman = async function (phone_number: string, content: string): Promise<true|null> {
    var response = await axios({
        method: "post",
        url: `${process.env.SERVICES_URL}:${process.env.NOTIFICATION_SERVICE_PORT}/notifications/deliveryman`,
        data: {
            phonenumber: phone_number,
            body: content
        }
    });

    return true;
}