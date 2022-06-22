/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

import { PagedList } from "../models/paged_list.interface";
import { BaseOrder, Order, OrderUpdate } from "../models/order.interface";

/**
 * Router Definition
 */

export const ordersRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

ordersRouter.get("/", async (req: Request, res: Response) => {
    try {
        // TODO
        //const items: Item[] = await ItemService.findAll();

        var list: PagedList<Order> = {
            data: [
                {
                    id: 1,
                    user_id: 5,
                    delivery_address: "19 Avenue de la Forêt de Haye, 54000 Nancy",
                    restaurant_id: 6,
                    product_ids: [1, 2],
                    menu_ids: [1],
                    price: 7.0,
                    deliveryman_id: 7,
                    status: "DELIVERED"
                }
            ],
            page: 1,
            total_pages: 2,
            items_per_page: 1,
            total_items: 2,
            next: "/api/orders&page=2",
            prev: ""
        }
  
        res.status(200).send(list);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// GET items/:id

ordersRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
        // TODO

        var order: Order = {
            id: 1,
            user_id: 5,
            delivery_address: "19 Avenue de la Forêt de Haye, 54000 Nancy",
            restaurant_id: 6,
            product_ids: [1, 2],
            menu_ids: [1],
            price: 7.0,
            deliveryman_id: 7,
            status: "DELIVERED"
        }
  
        if (order) {
            return res.status(200).send(order);
        }
  
        res.status(404).send("item not found");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// POST items

ordersRouter.post("/", async (req: Request, res: Response) => {
    try {
        var order: BaseOrder = req.body;
        // TODO
        // const newItem = await ItemService.create(item);
  
        res.status(201).json({result: "Created"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// PUT items/:id

ordersRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
        var update: OrderUpdate = req.body;
  
        // TODO
        //const existingItem: Item = await ItemService.find(id);
  
        // TODO
        if (update) {
            //const updatedItem = await ItemService.update(id, itemUpdate);
            return res.status(200).json({result: "Updated"});
        }
        res.status(404).json({result: "Not found"});

    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// POST Validate payment ??

ordersRouter.post("/:id/payment", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        var order: BaseOrder = req.body;
        // TODO
        // const newItem = await ItemService.create(item);
  
        res.status(201).json({result: "todo"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});