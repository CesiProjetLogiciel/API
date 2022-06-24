/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import passport from "passport";

import { PagedList } from "../models/paged_list.interface";
import { BaseProduct, Product, PutProduct } from "../models/product.interface";

/**
 * Router Definition
 */

export const productsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET :restaurant_id/products

productsRouter.get("/:id/products", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        // TODO
        //const items: Item[] = await ItemService.findAll();

        var products: PagedList<Product> = {
            data: [
                {
                    id: 1,
                    restaurant_id: 6,
                    name: "Hamburger",
                    description: "",
                    price: 5.0,
                    image: "7aipvWGHHonRfNG2H/+vnWDUXeMEP87ObOJFfZFYbRR0TxaT3gV4L90BXZpy"
                },
                {
                    id: 2,
                    restaurant_id: 6,
                    name: "Cheeseburger",
                    description: "",
                    price: 5.5,
                    image: "7aipvWGHHonRfNG2H/+vnWDUXeMEP87ObOJFfZFYbRR0TxaT3gV4L90BXZpy"
                }
            ],
            page: 1,
            total_pages: 2,
            items_per_page: 2,
            total_items: 3,
            next: "/api/restaurants/6/products&page=2",
            prev: ""
        }
  
        res.status(200).send(products);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// GET :restaurant_id/products/:product_id

productsRouter.get("/:restaurant_id/products/:product_id", async (req: Request, res: Response) => {
    const restaurant_id: number = parseInt(req.params.restaurant_id, 10);
    const product_id: number = parseInt(req.params.product_id, 10);
  
    try {
        // TODO
        //const item: Item = await ItemService.find(id);

        var product: Product = {
            id: 2,
            restaurant_id: 6,
            name: "Cheeseburger",
            description: "",
            price: 5.5,
            image: "7aipvWGHHonRfNG2H/+vnWDUXeMEP87ObOJFfZFYbRR0TxaT3gV4L90BXZpy"
        }
  
        if (product) {
            return res.status(200).send(product);
        }
  
        res.status(404).send("Product not found");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// POST :restaurant_id/products

productsRouter.post("/:id/products", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        var product: BaseProduct = req.body;
  
        // TODO
        //const newItem = await ItemService.create(item);
  
        res.status(201).json({result: "Created"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// PUT :restaurant_id/products/:product_id

productsRouter.put("/:restaurant_id/products/:product_id", async (req: Request, res: Response) => {
    const restaurant_id: number = parseInt(req.params.restaurant_id, 10);
    const product_id: number = parseInt(req.params.product_id, 10);
  
    try {
        var product: PutProduct = req.body;

        // TODO
        //const existingItem: Item = await ItemService.find(id);

        res.status(200).json({result: "Updated"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// DELETE :restaurant_id/products/:product_id

productsRouter.delete("/:restaurant_id/products/:product_id", async (req: Request, res: Response) => {
    const restaurant_id: number = parseInt(req.params.restaurant_id, 10);
    const product_id: number = parseInt(req.params.product_id, 10);

    try {
        // TODO
        //await ItemService.remove(id);
  
        res.status(200).json({result: "Deleted"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
 });
