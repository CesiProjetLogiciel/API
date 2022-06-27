/**
* Data Model Interfaces
*/

import axios from "axios";

import { Country } from "../models/country.interface";

/**
* Service Methods
*/

export const readUserTypes = async function (): Promise<Array<string>> {
    // TODO axios
    var types: Array<string> = [
        "client",
        "delivery_man",
        "restaurant",
        "third_party_dev",
        "commercial",
        "technical"
    ]

    return types;
}

export const readCountries = async function (): Promise<Array<Country>> {
    // TODO axios
    var countries: Array<Country> = [
        {
            name: "France",
            phone_country_code: "+33"
        },
        {
            name: "Luxembourg",
            phone_country_code: "+352"
        }
    ]

    return countries;
}