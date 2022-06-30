/**
* Data Model Interfaces
*/

import axios from "axios";
import bcrypt from "bcrypt";

import { PutUser, RegisterUser, User } from "../models/user.interface";

/**
* Service Methods
*/

export const createUser = async function (user: RegisterUser): Promise<number> {
    var body = {
        Lastname: user.last_name,
        Firstname: user.first_name,
        Pass: await bcrypt.hash(user.password, 10),
        isSuspended: false,
        Email: user.email,
        Type: user.user_type
    }
    if (user.user_type == "Restaurant") {
        body.isSuspended = true;
    }
    var response = await axios({
        method: "post",
        url: `${process.env.SERVICES_URL}:${process.env.USER_SERVICE_PORT}/users`,
        data: body
    });

    console.log(response.data)
    return response.data.id;
}

export const readUser = async function (id: number): Promise<User|null> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.USER_SERVICE_PORT}/users/${id}`
    });

    var user: User = {
        id: response.data.id,
        type: response.data.type,
        first_name: response.data.firstname,
        last_name: response.data.lastname,
        email: response.data.email,
        referral_code: "GC5Z2C"
    }

    if (!response.data) {
        return null;
    }
    return user;
}

export const checkCredentials = async function (email: string, password: string): Promise<number|false> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.USER_SERVICE_PORT}/users/${email}`
    });
    if (response.data && await bcrypt.compare(password, response.data.pass)) {
        return response.data.id;
    }
    // if (response.data && password == response.data.pass) {
    //     return response.data.id;
    // }
    return false;
}

export const updateUser = async function (id: number, changes: PutUser): Promise<true|null> {
    var body: any = {};
    if (changes.first_name) body.Firstname = changes.first_name;
    if (changes.last_name) body.Lastname = changes.last_name;
    if (changes.email) body.Email = changes.email;
    if (changes.password) body.Pass = await bcrypt.hash(changes.password, 10);
    var response = await axios({
        method: "put",
        url: `${process.env.SERVICES_URL}:${process.env.USER_SERVICE_PORT}/users/${id}`,
        data: body
    });

    // if (!id) {
    //     return null;
    // }
    return true;
}

export const deleteUser = async function (id: number): Promise<true|null> {
    var response = await axios({
        method: "delete",
        url: `${process.env.SERVICES_URL}:${process.env.USER_SERVICE_PORT}/users/${id}`
    });

    // if (!id) {
    //     return null;
    // }
    return true;
}