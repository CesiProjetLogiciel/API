/**
* Data Model Interfaces
*/

import axios from "axios";

import { PostRestaurant, PutRestaurant, Restaurant } from "../models/restaurant.interface";

/**
* Service Methods
*/

export const readRestaurantStats = async function (id: string): Promise<any|null> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.STATS_SERVICE_PORT}/stats/restaurants`,
    });

    // if (!id) {
    //     return null;
    // }
    console.log(response.data)
    return response.data;
}

export const readSalesStats = async function (): Promise<any> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.STATS_SERVICE_PORT}/stats/sales`,
    });

    console.log(response.data)
    return response.data;
}

export const readPerformanceStats = async function (): Promise<any> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.STATS_SERVICE_PORT}/stats/performances`,
    });

    console.log(response.data)
    return response.data;
}
