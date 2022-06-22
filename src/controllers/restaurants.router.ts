/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

import { productsRouter } from "./products.router";
import { menusRouter } from "./menus.router";

import { PagedList } from "../models/paged_list.interface";
import { PostRestaurant, PutRestaurant, Restaurant } from "../models/restaurant.interface";

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
        // TODO
        //const items: Item[] = await ItemService.findAll();

        var restaurants: PagedList<Restaurant> = {
            data: [
                {
                    id: 6,
                    name: "Burger & Co",
                    description: "Restaurant de burgers",
                    category: "Fast-food",
                    image: "7aipvWGHHonRfNG2H/+vnWDUXeMEP87ObOJFfZFYbRR0TxaT3gV4L90BXZpy"
                },
                {
                    id: 7,
                    name: "Pizza Supreme",
                    description: "Pizzeria de quartier",
                    category: "Pizzas",
                    image: "7aipvWGHHonRfNG2H/+vnWDUXeMEP87ObOJFfZFYbRR0TxaT3gV4L90BXZpy"
                }
            ],
            page: 1,
            total_pages: 2,
            items_per_page: 2,
            total_items: 3,
            next: "/api/restaurants&page=2",
            prev: ""
        }
  
        res.status(200).send(restaurants);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// GET items/:id

restaurantsRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
        // TODO
        //const item: Item = await ItemService.find(id);

        var restaurant: Restaurant = {
            id: 6,
            name: "Burger & Co",
            description: "Restaurant de burgers",
            category: "Fast-food",
            image: "7aipvWGHHonRfNG2H/+vnWDUXeMEP87ObOJFfZFYbRR0TxaT3gV4L90BXZpy"
        }
  
        if (restaurant) {
            return res.status(200).send(restaurant);
        }
  
        res.status(404).send("Restaurant not found");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// POST items

restaurantsRouter.post("/", async (req: Request, res: Response) => {
    try {
        var restaurant: PostRestaurant = req.body;
  
        // TODO
        //const newItem = await ItemService.create(item);
  
        res.status(201).json({result: "Created"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// PUT items/:id

restaurantsRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
        var restaurant: PutRestaurant = req.body;

        // TODO
        //const existingItem: Item = await ItemService.find(id);

        res.status(200).json({result: "Updated"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// DELETE items/:id

restaurantsRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        // TODO
        //await ItemService.remove(id);
  
        res.status(200).json({result: "Deleted"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
 });

 // GET Restaurant stats

 restaurantsRouter.get("/:id/stats", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
        // TODO
        //const item: Item = await ItemService.find(id);

        var stats = {
            stats: "todo"
        }
  
        if (stats) {
            return res.status(200).send(stats);
        }
  
        res.status(404).send("Restaurant not found");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});