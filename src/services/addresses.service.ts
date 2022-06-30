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

export const createAddress = async function (user_id: number, address: BaseAddress): Promise<true|null> {
    var body: any = {
        Zipcode: address.zipcode,
        City: address.city,
        Address: address.address,
        State: address.state,
        Lastname: address.last_name,
        Firstname: address.first_name,
        PhoneNumber: address.phone_number,
        idUser: user_id
    }
    if (address.additional_info) {
        body.AdditionnalInfo = address.additional_info;
    }
    var countries: Array<Country> = await EnumsService.readCountries();
    countries.forEach(function(country: any) {
        if (country.name == address.country) {
            body.idCountry = country.id;
            body.PhoneCountryCode = country.phone_country_code
        }
    })
    var response = await axios({
        method: "post",
        url: `${process.env.SERVICES_URL}:${process.env.ADDRESS_SERVICE_PORT}/deliveryaddress`,
        data: body
    });

    // if (!response.data) {
    //     return null;
    // }
    return true;
}

export const readAddress = async function (user_id: number): Promise<Array<Address>|null> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.ADDRESS_SERVICE_PORT}/deliveryaddress?idUsers=${user_id}`
    });
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

export const readAddressById = async function (id: number): Promise<Address> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.ADDRESS_SERVICE_PORT}/deliveryaddress/${id}`
    });
    var address: Address = {
        id: response.data.id,
        user_id: response.data.id_Users,
        zipcode: response.data.zipcode,
        city: response.data.city,
        address: response.data.address,
        state: response.data.state,
        additional_info: response.data.additionnalInfo,
        last_name: response.data.lastname,
        first_name: response.data.firstname,
        phone_number: `${response.data.phonecountrycode}${response.data.phonenumber.substring(1)}`,
        country: response.data.name
    }

    return address;
}

export const updateAddress = async function (user_id: number, address_id: number, changes: PutAddress): Promise<true|null> {
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
        url: `${process.env.SERVICES_URL}:${process.env.ADDRESS_SERVICE_PORT}/deliveryaddress/${address_id}`,
        data: body
    });

    // if (!response.data) {
    //     return null;
    // }
    return true;
}

export const deleteAddress = async function (user_id: number, address_id: number): Promise<true|null> {
    var response = await axios({
        method: "delete",
        url: `${process.env.SERVICES_URL}:${process.env.ADDRESS_SERVICE_PORT}/deliveryaddress/${address_id}`
    });

    // if (!response.data) {
    //     return null;
    // }
    return true;
}