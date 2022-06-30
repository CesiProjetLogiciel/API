/**
* Data Model Interfaces
*/

import axios from "axios";

import { Country } from "../models/country.interface";

/**
* Service Methods
*/

export const readUserTypes = async function (): Promise<Array<string>> {
    // var types: Array<string> = [
    //     "client",
    //     "delivery_man",
    //     "restaurant",
    //     "third_party_dev",
    //     "commercial",
    //     "technical"
    // ]

    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.USERTYPE_SERVICE_PORT}/usertypes`
    });
    var types: Array<string> = [];
    response.data.forEach(function(type: any) {
        types.push(type.type)
    });

    return types;
}

export const readCountries = async function (): Promise<Array<Country>> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.COUNTRY_SERVICE_PORT}/countries`
    });
    var countries: Array<Country> = [];
    response.data.forEach(function(element: any) {
        countries.push({
            id: element.id,
            name: element.name,
            phone_country_code: element.phonecountrycode
        })
    });

    return countries;
}