/**
* Data Model Interfaces
*/

import axios from "axios";

import { Menu, PostMenu, PutMenu } from "../models/menu.interface";

/**
* Service Methods
*/

export const createMenu = async function (restaurant_id: number, menu: PostMenu): Promise<true|null> {
    // TODO axios

    if (!restaurant_id) {
        return null;
    }
    return true;
}

export const readMenuList = async function (restaurant_id: number): Promise<Array<Menu>|null> {
    // TODO axios
    var menus: Array<Menu> = [
        {
            id: 1,
            restaurant_id: 6,
            name: "Menu burger",
            price: 6.0,
            description: "",
            products: [
                {
                    id: 1,
                    name: "Hamburger",
                    description: ""
                },
                {
                    id: 2,
                    name: "Boisson",
                    description: ""
                }
            ]
        }
    ]

    if (!restaurant_id) {
        return null;
    }
    return menus;
}

export const readMenu = async function (restaurant_id: number, menu_id: number): Promise<Menu|null> {
    // TODO axios
    var menu: Menu = {
        id: 1,
        restaurant_id: 6,
        name: "Menu burger",
        price: 6.0,
        description: "",
        products: [
            {
                id: 1,
                name: "Hamburger",
                description: ""
            },
            {
                id: 2,
                name: "Boisson",
                description: ""
            }
        ]
    }

    if (!restaurant_id || !menu_id) {
        return null;
    }
    return menu;
}

export const updateMenu = async function (restaurant_id: number, menu_id: number, changes: PutMenu): Promise<true|null> {
    // TODO axios

    if (!restaurant_id || !menu_id) {
        return null;
    }
    return true;
}

export const deleteMenu = async function (restaurant_id: number, menu_id: number): Promise<true|null> {
    // TODO axios

    if (!restaurant_id || !menu_id) {
        return null;
    }
    return true;
}

export const addMenuProduct = async function (restaurant_id: number, menu_id: number, product_id: number): Promise<true|null> {
    // TODO axios

    if (!restaurant_id || !menu_id || !product_id) {
        return null;
    }
    return true;
}

export const deleteMenuProduct = async function (restaurant_id: number, menu_id: number, product_id: number): Promise<true|null> {
    // TODO axios

    if (!restaurant_id || !menu_id || !product_id) {
        return null;
    }
    return true;
}