/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

import { PagedList } from "../models/paged_list.interface";
import { Order, OrderStatus, OrderUpdate, PostOrder } from "../models/order.interface";
import * as OrdersService from "../services/orders.service";
import * as RestaurantsService from "../services/restaurants.service";
import * as NotificationsService from "../services/notifications.service";
import * as AddressesService from "../services/addresses.service";
import { Address } from "../models/address.interface";

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
    const id: string = req.params.id;
  
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
            var restaurant = (await RestaurantsService.readRestaurant(order.restaurant_id));
            if (restaurant) {
                var serviceData: true|null = await OrdersService.createOrder(order, restaurant.idSQL);
            }
            else {
                return res.status(404).json({result: "Restaurant not found"});
            }
      
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
    const id: string = req.params.id;
  
    try {
        var changes: OrderUpdate = req.body;
  
        var serviceData: true|null = await OrdersService.updateOrder(id, changes);

        if (serviceData === null) {
            return res.status(404).json({result: "Order not found."});
        }
        if (changes.status) {
            var order: Order|null = await OrdersService.readOrder(id);
            if (order) {
                var address: Address|null = await AddressesService.readAddressById(order.delivery_address);
                var message: string = `Your order is now ${OrderStatus[order.status ? order.status : 1]}`;
                if (changes.status == OrderStatus.IN_DELIVERY) {
                    message += ` by ${order.deliveryman_lastname} ${order.deliveryman_firstname}`;
                }
                var notifResponse = await NotificationsService.createNotificationUser(address.phone_number, 
                    message   
                )
                if (notifResponse == null) {
                    return res.status(500).json({result: "Failed to send user notification"})
                }

            }
        }
  
        return res.status(200).json({result: "Updated"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});