/**
* Data Model Interfaces
*/

import axios from "axios";

import { PostRestaurant, PutRestaurant, Restaurant } from "../models/restaurant.interface";

/**
* Service Methods
*/

export const createConnectionLog = async function (user_id: number): Promise<true|null> {
    var response = await axios({
        method: "post",
        url: `${process.env.SERVICES_URL}:${process.env.LOG_SERVICE_PORT}/logs/connections`,
        data: { logs: `USER_ID=${user_id} CONNECTED AT ${new Date().toUTCString()}`}
    });

    return true;
}

export const readConnectionLog = async function (): Promise<Array<any>> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.LOG_SERVICE_PORT}/logs/connections`
    });

    console.log(response.data)
    return response.data;
}

export const createComponentDownloadLog = async function (component_id: number, user_id: number): Promise<true|null> {
    var response = await axios({
        method: "post",
        url: `${process.env.SERVICES_URL}:${process.env.LOG_SERVICE_PORT}/logs/components`,
        data: { logs: `COMPONENT_ID=${component_id} DOWNLOADED BY USER_ID=${user_id} AT ${new Date().toUTCString()}`}
    });

    return true;
}

export const readComponentDownloadLog = async function (): Promise<Array<any>> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.LOG_SERVICE_PORT}/logs/components`
    });

    console.log(response.data)
    return response.data;
}