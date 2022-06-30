/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

import { PagedList } from "../models/paged_list.interface";
import { Menu, PostMenu, PutMenu } from "../models/menu.interface";
import * as MenusService from "../services/menus.service";

/**
 * Router Definition
 */

export const menusRouter = express.Router();

/**
 * Controller Definitions
 */

// GET :restaurant_id/menus

menusRouter.get("/:id/menus", async (req: Request, res: Response) => {
    const id: string = req.params.id;

    try {
        var serviceData: Array<Menu>|null =  await MenusService.readMenuList(id);

        if (serviceData === null) {
            return res.status(404).json({result: "Restaurant not found."});
        }

        var menus: PagedList<Menu> = {
            data: serviceData,
            page: 1,
            total_pages: 2,
            items_per_page: 1,
            total_items: 2,
            next: `/api/restaurants/${id}/menus&page=2`,
            prev: ""
        }
  
        res.status(200).json(menus);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// GET :restaurant_id/menus/:menu_id

menusRouter.get("/:restaurant_id/menus/:menu_id", async (req: Request, res: Response) => {
    const restaurant_id: string = req.params.restaurant_id;
    const menu_id: string = req.params.menu_id;
  
    try {
        var serviceData: Menu|null = await MenusService.readMenu(restaurant_id, menu_id);

        if (serviceData === null) {
            return res.status(404).json({result: "Restaurant or menu not found."});
        }
  
        res.status(200).json(serviceData);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// POST :restaurant_id/menus

menusRouter.post("/:id/menus", async (req: Request, res: Response) => {
    const id: string = req.params.id;

    try {
        var menu: PostMenu = req.body;
  
        var serviceData: true|null = await MenusService.createMenu(id, menu);

        if (serviceData === null) {
            return res.status(404).json({result: "Restaurant not found."});
        }
  
        res.status(201).json({result: "Created"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// PUT :restaurant_id/menus/:menu_id

menusRouter.put("/:restaurant_id/menus/:menu_id", async (req: Request, res: Response) => {
    const restaurant_id: string = req.params.restaurant_id;
    const menu_id: string = req.params.menu_id;
  
    try {
        var changes: PutMenu = req.body;

        var serviceData: true|null = await MenusService.updateMenu(restaurant_id, menu_id, changes);

        if (serviceData === null) {
            return res.status(404).json({result: "Restaurant or menu not found."});
        }

        res.status(200).json({result: "Updated"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// DELETE :restaurant_id/menus/:menu_id

menusRouter.delete("/:restaurant_id/menus/:menu_id", async (req: Request, res: Response) => {
    const restaurant_id: string = req.params.restaurant_id;
    const menu_id: string = req.params.menu_id;

    try {
        var serviceData: true|null = await MenusService.deleteMenu(restaurant_id, menu_id);

        if (serviceData === null) {
            return res.status(404).json({result: "Restaurant or menu not found."});
        }
  
        res.status(200).json({result: "Deleted"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

 // POST :restaurant_id/menus/:menu_id/products

 menusRouter.post("/:restaurant_id/menus/:menu_id/products", async (req: Request, res: Response) => {
    const restaurant_id: string = req.params.restaurant_id;
    const menu_id: string = req.params.menu_id;

    try {
        var product_id: string = req.body.product_id;
  
        var serviceData: true|null = await MenusService.addMenuProduct(restaurant_id, menu_id, product_id);

        if (serviceData === null) {
            return res.status(404).json({result: "Restaurant or menu or product not found."});
        }
  
        res.status(201).json({result: "Created"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// DELETE :restaurant_id/menus/:menu_id/products/:product_id

menusRouter.delete("/:restaurant_id/menus/:menu_id/products/:product_id", async (req: Request, res: Response) => {
    const restaurant_id: string = req.params.restaurant_id;
    const menu_id: string = req.params.menu_id;
    const product_id: string = req.params.product_id;

    try {
        var serviceData: true|null = await MenusService.deleteMenuProduct(restaurant_id, menu_id, product_id);

        if (serviceData === null) {
            return res.status(404).json({result: "Restaurant or menu or product not found."});
        }
  
        res.status(200).json({result: "Deleted"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});
