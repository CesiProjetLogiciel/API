/**
* Data Model Interfaces
*/

import axios from "axios";

import { readProduct } from "./products.service";
import { Menu, PostMenu, PutMenu } from "../models/menu.interface";
import { MenuProduct } from "../models/product.interface";

/**
* Service Methods
*/

export const createMenu = async function (restaurant_id: string, menu: PostMenu): Promise<true|null> {
    var body: any = {
        name: menu.name,
        description: menu.description,
        Price: menu.price
    }
    var response = await axios({
        method: "post",
        url: `${process.env.SERVICES_URL}:${process.env.MENU_SERVICE_PORT}/restaurants/${restaurant_id}/menus`,
        data: body
    });
    console.log(response.data)
    menu.product_ids.forEach(async function(product_id: string) {
        await addMenuProduct(restaurant_id, response.data._id, product_id);
    })

    // if (!restaurant_id) {
    //     return null;
    // }
    return true;
}

export const readMenuList = async function (restaurant_id: string): Promise<Array<Menu>|null> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.MENU_SERVICE_PORT}/restaurants/${restaurant_id}/menus`,
    });

    var getProduct = async function (product_id: string) {
        var product: any = await readProduct(restaurant_id, product_id);
            if (product) {
                return {
                    id: product_id,
                    name: product.name,
                    description: product.description ? product.description : ""
                }
            }
    }
    var getMenus = async function (menu: any) {
        var products: Array<MenuProduct> = await Promise.all( menu.Product.map(getProduct) );
        return {
            id: menu._id,
            restaurant_id: restaurant_id,
            name: menu.name,
            price: menu.Price,
            description: menu.description ? menu.description : "",
            products: products
        }
    }

    var menus: Array<Menu> = await Promise.all( response.data.map(getMenus) );

    // if (!restaurant_id) {
    //     return null;
    // }
    return menus;
}

export const readMenu = async function (restaurant_id: string, menu_id: string): Promise<Menu|null> {
    var response = await axios({
        method: "get",
        url: `${process.env.SERVICES_URL}:${process.env.MENU_SERVICE_PORT}/restaurants/${restaurant_id}/menus/${menu_id}`,
    });
    if (!response.data) {
        return null;
    }

    var getProduct = async function (product_id: string) {
        var product: any = await readProduct(restaurant_id, product_id);
            if (product) {
                return {
                    id: product_id,
                    name: product.name,
                    description: product.description ? product.description : ""
                }
            }
    }
    var menu: Menu = {
        id: response.data._id,
        restaurant_id: restaurant_id,
        name: response.data.name,
        price: response.data.Price,
        description: response.data.description ? response.data.description : "",
        products: response.data.Product ? await Promise.all(response.data.Product.map(getProduct)) : []
    }

    // if (!restaurant_id || !menu_id) {
    //     return null;
    // }
    return menu;
}

export const updateMenu = async function (restaurant_id: string, menu_id: string, changes: PutMenu): Promise<true|null> {
    var body: any = {}
    if (changes.name) body.name = changes.name;
    if (changes.price) body.Price = changes.price;
    if (changes.description) body.description = changes.description;
    var response = await axios({
        method: "put",
        url: `${process.env.SERVICES_URL}:${process.env.MENU_SERVICE_PORT}/restaurants/${restaurant_id}/menus/${menu_id}`,
        data: body
    });

    // if (!restaurant_id || !menu_id) {
    //     return null;
    // }
    return true;
}

export const deleteMenu = async function (restaurant_id: string, menu_id: string): Promise<true|null> {
    var response = await axios({
        method: "delete",
        url: `${process.env.SERVICES_URL}:${process.env.MENU_SERVICE_PORT}/restaurants/${restaurant_id}/menus/${menu_id}`
    });

    // if (!restaurant_id || !menu_id) {
    //     return null;
    // }
    return true;
}

export const addMenuProduct = async function (restaurant_id: string, menu_id: string, product_id: string): Promise<true|null> {
    var response = await axios({
        method: "post",
        url: `${process.env.SERVICES_URL}:${process.env.MENU_SERVICE_PORT}/restaurants/${restaurant_id}/menus/${menu_id}/products`,
        data: { Product: product_id }
    });

    // if (!restaurant_id || !menu_id || !product_id) {
    //     return null;
    // }
    return true;
}

export const deleteMenuProduct = async function (restaurant_id: string, menu_id: string, product_id: string): Promise<true|null> {
    var response = await axios({
        method: "delete",
        url: `${process.env.SERVICES_URL}:${process.env.MENU_SERVICE_PORT}/restaurants/${restaurant_id}/menus/${menu_id}/products/${product_id}`
    });

    // if (!restaurant_id || !menu_id || !product_id) {
    //     return null;
    // }
    return true;
}