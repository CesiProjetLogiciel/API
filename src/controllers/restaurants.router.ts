/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import passport from "passport";

import { productsRouter } from "./products.router";
import { menusRouter } from "./menus.router";

import { PagedList } from "../models/paged_list.interface";
import { PostRestaurant, PutRestaurant, Restaurant } from "../models/restaurant.interface";
import * as RestaurantsService from "../services/restaurants.service";
import * as StatsService from "../services/stats.service";

/**
 * Router Definition
 */

export const restaurantsRouter = express.Router();
restaurantsRouter.use("/", productsRouter);
restaurantsRouter.use("/", menusRouter);

/**
 * Controller Definitions
 */

// GET items

restaurantsRouter.get("/", async (req: Request, res: Response) => {
    try {
        var serviceData: Array<Restaurant> = await RestaurantsService.readRestaurantList();

        var restaurants: PagedList<Restaurant> = {
            data: serviceData,
            page: 1,
            total_pages: 2,
            items_per_page: 2,
            total_items: 3,
            next: "/api/restaurants&page=2",
            prev: ""
        }
  
        res.status(200).json(restaurants);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// GET items/:id

restaurantsRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
        var serviceData: Restaurant|null = await RestaurantsService.readRestaurant(id);

        if (serviceData === null) {
            return res.status(404).json({result: "Restaurant not found."});
        }
  
        res.status(200).json(serviceData);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// POST items

restaurantsRouter.post("/", async (req: Request, res: Response) => {
    try {
        var restaurant: PostRestaurant = req.body;
  
        var serviceData: true|null = await RestaurantsService.createRestaurant(restaurant);
  
        res.status(201).json({result: "Created"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// PUT items/:id

restaurantsRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
        var changes: PutRestaurant = req.body;

        var serviceData: true|null = await RestaurantsService.updateRestaurant(id, changes);

        if (serviceData === null) {
            return res.status(404).json({result: "Restaurant not found."});
        }

        res.status(200).json({result: "Updated"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// DELETE items/:id

restaurantsRouter.delete("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        var serviceData: true|null = await RestaurantsService.deleteRestaurant(id);

        if (serviceData === null) {
            return res.status(404).json({result: "Restaurant not found."});
        }
  
        res.status(200).json({result: "Deleted"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
 });

 // GET Restaurant stats

 restaurantsRouter.get("/:id/stats", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
        // TODO
        var serviceData: any|null = await StatsService.readRestaurantStats(id);

        if (serviceData === null) {
            return res.status(404).json({result: "Restaurant not found."});
        }
  
        res.status(200).json(serviceData);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});