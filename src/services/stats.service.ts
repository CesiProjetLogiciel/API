/**
* Data Model Interfaces
*/

import axios from "axios";

import { PostRestaurant, PutRestaurant, Restaurant } from "../models/restaurant.interface";

/**
* Service Methods
*/

export const readRestaurantStats = async function (id: number): Promise<any|null> {
    // TODO axios
    var stats = {
        stats: "todo"
    }

    if (!id) {
        return null;
    }
    return stats;
}

export const readSalesStats = async function (): Promise<any> {
    // TODO axios
    var stats = {
        stats: "todo"
    }

    return stats;
}

export const readPerformanceStats = async function (): Promise<any> {
    // TODO axios
    var stats = {
        stats: "todo"
    }

    return stats;
}
