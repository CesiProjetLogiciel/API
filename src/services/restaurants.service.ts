/**
* Data Model Interfaces
*/

import axios from "axios";

import { PostRestaurant, PutRestaurant, Restaurant } from "../models/restaurant.interface";

/**
* Service Methods
*/

export const createRestaurant = async function (user_id: number, restaurant: PostRestaurant): Promise<true|null> {
    var body: any = {
        idSQL: user_id,
        name: restaurant.name,
        description: restaurant.description,
        Image: restaurant.image,
        Category: restaurant.category
    }
    var response = await axios({
        method: "post",
        url: `${process.env.SERVICES_URL}:${process.env.RESTAURANT_SERVICE_PORT}/restaurants`,
        data: body
    });

    return true;
}

export const readRestaurantList = async function (): Promise<Array<Restaurant>> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.RESTAURANT_SERVICE_PORT}/restaurants`
    });
    var restaurants: Array<Restaurant> = [];
    response.data.forEach(function(rest: any) {
        restaurants.push({
            id: rest._id,
            idSQL: rest.idSQL,
            name: rest.name,
            description: rest.description ? rest.description : "",
            category: rest.Category,
            image: rest.Image ? rest.Image : ""
        })
    });

    return restaurants;
}

export const readRestaurant = async function (id: string): Promise<Restaurant|null> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.RESTAURANT_SERVICE_PORT}/restaurants/${id}`
    });
    if (!response.data.length) {
        return null;
    }
    var restaurant: Restaurant = {
        id: response.data[0]._id,
        idSQL: response.data[0].idSQL,
        name: response.data[0].name,
        description: response.data[0].description ? response.data[0].description : "",
        category: response.data[0].Category,
        image: response.data[0].Image ? response.data[0].Image : ""
    }

    // if (!id) {
    //     return null;
    // }
    return restaurant;
}

export const updateRestaurant = async function (id: string, changes: PutRestaurant): Promise<true|null> {
    var body: any = {};
    if (changes.name) body.name = changes.name;
    if (changes.description) body.description = changes.description;
    if (changes.category) body.Category = changes.category;
    if (changes.image) body.Image = changes.image;
    var response = await axios({
        method: "put",
        url: `${process.env.SERVICES_URL}:${process.env.RESTAURANT_SERVICE_PORT}/restaurants/${id}`,
        data: body
    });

    // if (!id) {
    //     return null;
    // }
    return true;
}

export const deleteRestaurant = async function (id: string): Promise<true|null> {
    var response = await axios({
        method: "delete",
        url: `${process.env.SERVICES_URL}:${process.env.RESTAURANT_SERVICE_PORT}/restaurants/${id}`
    });

    // if (!id) {
    //     return null;
    // }
    return true;
}