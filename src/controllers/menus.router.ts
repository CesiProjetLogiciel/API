/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

import { PagedList } from "../models/paged_list.interface";
import { Menu, PostMenu } from "../models/menu.interface";
import { PutProduct } from "../models/product.interface";

/**
 * Router Definition
 */

export const menusRouter = express.Router();

/**
 * Controller Definitions
 */

// GET :restaurant_id/menus

menusRouter.get("/:id/menus", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        // TODO
        //const items: Item[] = await ItemService.findAll();

        var menus: PagedList<Menu> = {
            data: [
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
            ],
            page: 1,
            total_pages: 2,
            items_per_page: 1,
            total_items: 2,
            next: "/api/restaurants/6/menus&page=2",
            prev: ""
        }
  
        res.status(200).send(menus);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// GET :restaurant_id/menus/:menu_id

menusRouter.get("/:restaurant_id/menus/:menu_id", async (req: Request, res: Response) => {
    const restaurant_id: number = parseInt(req.params.restaurant_id, 10);
    const menu_id: number = parseInt(req.params.menu_id, 10);
  
    try {
        // TODO
        //const item: Item = await ItemService.find(id);

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
  
        if (menu) {
            return res.status(200).send(menu);
        }
  
        res.status(404).send("Menu not found");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// POST :restaurant_id/menus

menusRouter.post("/:id/menus", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        var menu: PostMenu = req.body;
  
        // TODO
        //const newItem = await ItemService.create(item);
  
        res.status(201).json({result: "Created"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// PUT :restaurant_id/menus/:menu_id

menusRouter.put("/:restaurant_id/menus/:menu_id", async (req: Request, res: Response) => {
    const restaurant_id: number = parseInt(req.params.restaurant_id, 10);
    const menu_id: number = parseInt(req.params.menu_id, 10);
  
    try {
        var product: PutProduct = req.body;

        // TODO
        //const existingItem: Item = await ItemService.find(id);

        res.status(200).json({result: "Updated"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// DELETE :restaurant_id/products/:menu_id

menusRouter.delete("/:restaurant_id/products/:menu_id", async (req: Request, res: Response) => {
    const restaurant_id: number = parseInt(req.params.restaurant_id, 10);
    const menu_id: number = parseInt(req.params.menu_id, 10);

    try {
        // TODO
        //await ItemService.remove(id);
  
        res.status(200).json({result: "Deleted"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

 // POST :restaurant_id/menus/:menu_id/products

 menusRouter.post("/:restaurant_id/menus/:menu_id/products", async (req: Request, res: Response) => {
    const restaurant_id: number = parseInt(req.params.restaurant_id, 10);
    const menu_id: number = parseInt(req.params.menu_id, 10);

    try {
        var product_id: number = req.body.product_id;
  
        // TODO
        //const newItem = await ItemService.create(item);
  
        res.status(201).json({result: "Created"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// DELETE :restaurant_id/menus/:menu_id/products/:product_id

menusRouter.delete("/:restaurant_id/menus/:menu_id/products/:product_id", async (req: Request, res: Response) => {
    const restaurant_id: number = parseInt(req.params.restaurant_id, 10);
    const menu_id: number = parseInt(req.params.menu_id, 10);
    const product_id: number = parseInt(req.params.product_id, 10);

    try {
        // TODO
        //await ItemService.remove(id);
  
        res.status(200).json({result: "Deleted"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});
