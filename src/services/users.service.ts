/**
* Data Model Interfaces
*/

import axios from "axios";

import { PutUser, RegisterUser, User } from "../models/user.interface";

/**
* Service Methods
*/

export const createUser = async function (user: RegisterUser): Promise<number> {
    // TODO axios

    return 5;
}

export const readUser = async function (id: number): Promise<User|null> {
    // TODO axios
    var user: User = {
        id: 5,
        first_name: "Paul",
        last_name: "Boulanger",
        email: "paul.boulanger@mail.com",
        referral_code: "GC5Z2C"
    }

    if (user) {
        return user;
    }
    return null;
}

export const checkCredentials = async function (email: string, password: string): Promise<number|false> {
    // TODO axios + compare credentials
    if (email && password) {
        return 5;
    }
    return false;
}

export const updateUser = async function (id: number, changes: PutUser): Promise<true|null> {
    // TODO axios

    if (!id) {
        return null;
    }
    return true;
}

export const deleteUser = async function (id: number): Promise<true|null> {
    // TODO axios

    if (!id) {
        return null;
    }
    return true;
}