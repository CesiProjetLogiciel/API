/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

import { PagedList } from "../models/paged_list.interface";
import { Delivery } from "../models/order.interface";

/**
 * Router Definition
 */

export const deliveriesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET deliveries

deliveriesRouter.get("/", async (req: Request, res: Response) => {
    try {
        // TODO
        //const items: Item[] = await ItemService.findAll();

        var list: PagedList<Delivery> = {
            data: [
                {
                    id: 1,
                    user_id: 5,
                    delivery_address: "19 Avenue de la Forêt de Haye, 54000 Nancy",
                    restaurant_id: 6,
                    restaurant_address: "14 rue du forgeron, 54000 Nancy",
                    deliveryman_id: 7,
                    status: "DELIVERED"
                }
            ],
            page: 1,
            total_pages: 2,
            items_per_page: 1,
            total_items: 2,
            next: "/api/deliveries&page=2",
            prev: ""
        }

        res.status(200).send(list);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// GET deliveries/:id

deliveriesRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
        // TODO
        //const item: Item = await ItemService.find(id);

        var delivery: Delivery = {
            id: 1,
            user_id: 5,
            delivery_address: "19 Avenue de la Forêt de Haye, 54000 Nancy",
            restaurant_id: 6,
            restaurant_address: "14 rue du forgeron, 54000 Nancy",
            deliveryman_id: 7,
            status: "DELIVERED"
        }

        if (delivery) {
            return res.status(200).send(delivery);
        }
  
        res.status(404).send("Delivery not found");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});
