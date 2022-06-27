/**
* Data Model Interfaces
*/

import axios from "axios";

import { PostRestaurant, PutRestaurant, Restaurant } from "../models/restaurant.interface";

/**
* Service Methods
*/

export const createRestaurant = async function (restaurant: PostRestaurant): Promise<true|null> {
    // TODO axios

    return true;
}

export const readRestaurantList = async function (): Promise<Array<Restaurant>> {
    // TODO axios
    var restaurants: Array<Restaurant> = [
        {
            id: 6,
            name: "Burger & Co",
            description: "Restaurant de burgers",
            category: "Fast-food",
            image: "7aipvWGHHonRfNG2H/+vnWDUXeMEP87ObOJFfZFYbRR0TxaT3gV4L90BXZpy"
        },
        {
            id: 7,
            name: "Pizza Supreme",
            description: "Pizzeria de quartier",
            category: "Pizzas",
            image: "7aipvWGHHonRfNG2H/+vnWDUXeMEP87ObOJFfZFYbRR0TxaT3gV4L90BXZpy"
        }
    ]

    return restaurants;
}

export const readRestaurant = async function (id: number): Promise<Restaurant|null> {
    // TODO axios
    var restaurant: Restaurant = {
        id: 6,
        name: "Burger & Co",
        description: "Restaurant de burgers",
        category: "Fast-food",
        image: "7aipvWGHHonRfNG2H/+vnWDUXeMEP87ObOJFfZFYbRR0TxaT3gV4L90BXZpy"
    }

    if (!id) {
        return null;
    }
    return restaurant;
}

export const updateRestaurant = async function (id: number, changes: PutRestaurant): Promise<true|null> {
    // TODO axios

    if (!id) {
        return null;
    }
    return true;
}

export const deleteRestaurant = async function (id: number): Promise<true|null> {
    // TODO axios

    if (!id) {
        return null;
    }
    return true;
}