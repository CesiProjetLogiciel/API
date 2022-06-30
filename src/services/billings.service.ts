/**
* Data Model Interfaces
*/

import axios from "axios";

import { Address, BaseAddress, PutAddress } from "../models/address.interface";
import { Country } from "../models/country.interface";
import * as EnumsService from "../services/enums.service";

/**
* Service Methods
*/

export const createBilling = async function (user_id: number, billing: BaseAddress): Promise<true|null> {
    var body: any = {
        Zipcode: billing.zipcode,
        City: billing.city,
        Address: billing.address,
        State: billing.state,
        Lastname: billing.last_name,
        Firstname: billing.first_name,
        PhoneNumber: billing.phone_number,
        idUser: user_id
    }
    if (billing.additional_info) {
        body.AdditionnalInfo = billing.additional_info;
    }
    var countries: Array<Country> = await EnumsService.readCountries();
    countries.forEach(function(country: any) {
        if (country.name == billing.country) {
            body.idCountry = country.id;
            body.PhoneCountryCode = country.phone_country_code
        }
    })
    
    var response = await axios({
        method: "post",
        url: `${process.env.SERVICES_URL}:${process.env.BILLING_SERVICE_PORT}/billingaddress`,
        data: body
    });
    console.log(response.status)
    console.log(response.data)

    // if (!response.data) {
    //     return null;
    // }
    return true;
}

export const readBilling = async function (user_id: number): Promise<Array<Address>|null> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.BILLING_SERVICE_PORT}/billingaddress?idUsers=${user_id}`
    });
    console.log(response.data)
    var addresses: Array<Address> = [];
    response.data.forEach(function(element: any) {
        addresses.push({
            id: element.id,
            user_id: element.id_Users,
            zipcode: element.zipcode,
            city: element.city,
            address: element.address,
            state: element.state,
            additional_info: element.additionnalInfo,
            last_name: element.lastname,
            first_name: element.firstname,
            phone_number: `${element.phonecountrycode}${element.phonenumber.substring(1)}`,
            country: element.name
        })
    });

    // if (!response.data) {
    //     return null;
    // }
    return addresses;
}

export const updateBilling = async function (user_id: number, billing_id: number, changes: PutAddress): Promise<true|null> {
    var body: any = {};
    if (changes.zipcode) body.Zipcode = changes.zipcode;
    if (changes.city) body.City = changes.city;
    if (changes.address) body.Address = changes.address;
    if (changes.state) body.State = changes.state;
    if (changes.additional_info) body.AdditionnalInfo = changes.additional_info;
    if (changes.last_name) body.Lastname = changes.last_name;
    if (changes.first_name) body.Firstname = changes.first_name;
    if (changes.phone_number) body.PhoneNumber = changes.phone_number;
    if (changes.country) {
        var countries: Array<Country> = await EnumsService.readCountries();
        countries.forEach(function(country: any) {
            if (country.name == changes.country) {
                body.idCountry = country.id;
                body.PhoneCountryCode = country.phone_country_code
            }
        })
    }
    var response = await axios({
        method: "put",
        url: `${process.env.SERVICES_URL}:${process.env.BILLING_SERVICE_PORT}/billingaddress/${billing_id}`,
        data: body
    });

    // if (!user_id || !billing_id) {
    //     return null;
    // }
    return true;
}

export const deleteBilling = async function (user_id: number, billing_id: number): Promise<true|null> {
    var response = await axios({
        method: "delete",
        url: `${process.env.SERVICES_URL}:${process.env.BILLING_SERVICE_PORT}/billingaddress/${billing_id}`
    });

    // if (!user_id || !billing_id) {
    //     return null;
    // }
    return true;
}