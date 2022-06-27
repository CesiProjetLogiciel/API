/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

import { PagedList } from "../models/paged_list.interface";
import { Order, OrderUpdate, PostOrder } from "../models/order.interface";
import * as OrdersService from "../services/orders.service";

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
        var serviceData: Array<Order> = await OrdersService.readOrderList();

        var list: PagedList<Order> = {
            data: serviceData,
            page: 1,
            total_pages: 2,
            items_per_page: 1,
            total_items: 2,
            next: "/api/orders&page=2",
            prev: ""
        }
  
        res.status(200).json(list);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// GET items/:id

ordersRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
        var serviceData: Order|null = await OrdersService.readOrder(id);

        if (serviceData === null) {
            return res.status(404).json({result: "Order not found."});
        }
  
        return res.status(200).json(serviceData);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// POST items

ordersRouter.post("/", async (req: Request, res: Response) => {
    try {
        var order: PostOrder = req.body;

        if (await OrdersService.validatePayment(order.payment_token)) {
            var serviceData: true|null = await OrdersService.createOrder(order);
      
            return res.status(201).json({result: "Created"});
        }
        else {
            return res.status(403).json({result: "Forbidden. Payment could not be verified"});
        }

    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// PUT items/:id

ordersRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
        var changes: OrderUpdate = req.body;
  
        var serviceData: true|null = await OrdersService.updateOrder(id, changes);

        if (serviceData === null) {
            return res.status(404).json({result: "Order not found."});
        }
  
        return res.status(200).json({result: "Updated"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});