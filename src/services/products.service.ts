/**
* Data Model Interfaces
*/

import axios from "axios";

import { BaseProduct, Product, PutProduct } from "../models/product.interface";

/**
* Service Methods
*/

export const createProduct = async function (restaurant_id: string, product: BaseProduct): Promise<true|null> {
    var body: any = {
        name: product.name,
        Price: product.price
    }
    if (product.description) body.description = product.description;
    if (product.image) body.Image = product.image;
    var response = await axios({
        method: "post",
        url: `${process.env.SERVICES_URL}:${process.env.PRODUCT_SERVICE_PORT}/restaurants/${restaurant_id}/products`,
        data: body
    });

    // if (!restaurant_id) {
    //     return null;
    // }
    return true;
}

export const readProductList = async function (restaurant_id: string): Promise<Array<Product>|null> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.PRODUCT_SERVICE_PORT}/restaurants/${restaurant_id}/products`
    });
    var products: Array<Product> = [];
    response.data.forEach(function(product: any) {
        products.push({
            id: product._id,
            restaurant_id: restaurant_id,
            name: product.name,
            description: product.description ? product.description : "",
            price: product.Price,
            image: product.Image ? product.Image : ""
        })
    })

    // if (!restaurant_id) {
    //     return null;
    // }
    return products;
}

export const readProduct = async function (restaurant_id: string, product_id: string): Promise<Product|null> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.PRODUCT_SERVICE_PORT}/restaurants/${restaurant_id}/products/${product_id}`
    });
    if (!response.data) {
        return null;
    }
    var product: Product = {
        id: response.data._id,
        restaurant_id: restaurant_id,
        name: response.data.name,
        description: response.data.description ? response.data.description : "",
        price: response.data.Price,
        image: response.data.Image ? response.data.Image : ""
    }

    // if (!restaurant_id || !product_id) {
    //     return null;
    // }
    
    return product;
}

export const updateProduct = async function (restaurant_id: string, product_id: string, changes: PutProduct): Promise<true|null> {
    var body: any = {};
    if (changes.name) body.name = changes.name;
    if (changes.price) body.Price = changes.price;
    if (changes.description) body.description = changes.description;
    if (changes.image) body.Image = changes.image;
    var response = await axios({
        method: "put",
        url: `${process.env.SERVICES_URL}:${process.env.PRODUCT_SERVICE_PORT}/restaurants/${restaurant_id}/products/${product_id}`,
        data: body
    });

    // if (!restaurant_id || !product_id) {
    //     return null;
    // }
    return true;
}

export const deleteProduct = async function (restaurant_id: string, product_id: string): Promise<true|null> {
    var response = await axios({
        method: "delete",
        url: `${process.env.SERVICES_URL}:${process.env.PRODUCT_SERVICE_PORT}/restaurants/${restaurant_id}/products/${product_id}`
    });

    // if (!restaurant_id || !product_id) {
    //     return null;
    // }
    return true;
}