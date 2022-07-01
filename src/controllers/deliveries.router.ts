/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

import { PagedList } from "../models/paged_list.interface";
import { Delivery } from "../models/order.interface";
import * as DeliveriesService from "../services/deliveries.service";
import * as AddressService from "../services/addresses.service"

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
        var serviceData: Array<Delivery> = await DeliveriesService.readDeliveryList();

        var deliveries: PagedList<Delivery> = {
            data: serviceData,
            page: 1,
            total_pages: 2,
            items_per_page: 1,
            total_items: 2,
            next: "/api/deliveries&page=2",
            prev: ""
        }

        res.status(200).json(deliveries);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// GET deliveries/:id

deliveriesRouter.get("/:id", async (req: Request, res: Response) => {
    const id: string = req.params.id;
  
    try {
        var serviceData: Delivery|null = await DeliveriesService.readDelivery(id);

        if (serviceData === null) {
            return res.status(404).json({result: "Delivery not found."});
        }

        return res.status(200).json(serviceData);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});
