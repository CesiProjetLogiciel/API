/**
* Data Model Interfaces
*/

import axios from "axios";

import { PostRestaurant, PutRestaurant, Restaurant } from "../models/restaurant.interface";

/**
* Service Methods
*/

export const createConnectionLog = async function (): Promise<true|null> {
    // TODO axios

    return true;
}

export const readConnectionLog = async function (): Promise<Array<any>> {
    // TODO axios
    var logs = [
        {
            logs: "test log"
        }
    ]

    return logs;
}

export const createComponentDownloadLog = async function (): Promise<true|null> {
    // TODO axios

    return true;
}

export const readComponentDownloadLog = async function (): Promise<Array<any>> {
    // TODO axios
    var logs = [
        {
            logs: "test log"
        }
    ]

    return logs;
}