/**
* Data Model Interfaces
*/

import axios from "axios";

import { BaseProduct, Product, PutProduct } from "../models/product.interface";

/**
* Service Methods
*/

export const createProduct = async function (restaurant_id: number, product: BaseProduct): Promise<true|null> {
    // TODO axios

    if (!restaurant_id) {
        return null;
    }
    return true;
}

export const readProductList = async function (restaurant_id: number): Promise<Array<Product>|null> {
    // TODO axios
    var products: Array<Product> = [
        {
            id: 1,
            restaurant_id: 6,
            name: "Hamburger",
            description: "",
            price: 5.0,
            image: "7aipvWGHHonRfNG2H/+vnWDUXeMEP87ObOJFfZFYbRR0TxaT3gV4L90BXZpy"
        },
        {
            id: 2,
            restaurant_id: 6,
            name: "Cheeseburger",
            description: "",
            price: 5.5,
            image: "7aipvWGHHonRfNG2H/+vnWDUXeMEP87ObOJFfZFYbRR0TxaT3gV4L90BXZpy"
        }
    ]

    if (!restaurant_id) {
        return null;
    }
    return products;
}

export const readProduct = async function (restaurant_id: number, product_id: number): Promise<Product|null> {
    // TODO axios
    var product: Product = {
        id: 2,
        restaurant_id: 6,
        name: "Cheeseburger",
        description: "",
        price: 5.5,
        image: "7aipvWGHHonRfNG2H/+vnWDUXeMEP87ObOJFfZFYbRR0TxaT3gV4L90BXZpy"
    }

    if (!restaurant_id || !product_id) {
        return null;
    }
    return product;
}

export const updateProduct = async function (restaurant_id: number, product_id: number, changes: PutProduct): Promise<true|null> {
    // TODO axios

    if (!restaurant_id || !product_id) {
        return null;
    }
    return true;
}

export const deleteProduct = async function (restaurant_id: number, product_id: number): Promise<true|null> {
    // TODO axios

    if (!restaurant_id || !product_id) {
        return null;
    }
    return true;
}