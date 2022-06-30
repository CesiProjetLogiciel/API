/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import passport from "passport";

import { PagedList } from "../models/paged_list.interface";
import { BaseProduct, Product, PutProduct } from "../models/product.interface";
import * as ProductsService from "../services/products.service";
import axios from "axios";

/**
 * Router Definition
 */

export const productsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET :restaurant_id/products

productsRouter.get("/:id/products", async (req: Request, res: Response) => {
    if (!Number.isNaN(Number(req.params.id))){
        var response = await axios({
            method: "get",
            url: `${process.env.SERVICES_URL}:${process.env.RESTAURANT_SERVICE_PORT}/restaurants/${req.params.id}`
        });
        req.params.id = response.data.idSQL
    }

    const id: string = req.params.id;

    try {
        var serviceData: Array<Product>|null = await ProductsService.readProductList(id);

        if (serviceData === null) {
            return res.status(404).json({result: "Restaurant not found."});
        }

        var products: PagedList<Product> = {
            data: serviceData,
            page: 1,
            total_pages: 2,
            items_per_page: 2,
            total_items: 3,
            next: `/api/restaurants/${id}/products&page=2`,
            prev: ""
        }
  
        res.status(200).json(products);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// GET :restaurant_id/products/:product_id

productsRouter.get("/:restaurant_id/products/:product_id", async (req: Request, res: Response) => {
    const restaurant_id: string = req.params.restaurant_id;
    const product_id: string = req.params.product_id;
  
    try {
        var serviceData: Product|null = await ProductsService.readProduct(restaurant_id, product_id);

        if (serviceData === null) {
            return res.status(404).json({result: "Restaurant or product not found."});
        }
  
        res.status(200).json(serviceData);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// POST :restaurant_id/products

productsRouter.post("/:id/products", async (req: Request, res: Response) => {
    const id: string = req.params.id;

    try {
        var product: BaseProduct = req.body;
  
        var serviceData: true|null = await ProductsService.createProduct(id, product);

        if (serviceData === null) {
            return res.status(404).json({result: "Restaurant not found."});
        }
  
        res.status(201).json({result: "Created"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// PUT :restaurant_id/products/:product_id

productsRouter.put("/:restaurant_id/products/:product_id", async (req: Request, res: Response) => {
    const restaurant_id: string = req.params.restaurant_id;
    const product_id: string = req.params.product_id;
  
    try {
        var changes: PutProduct = req.body;

        var serviceData: true|null = await ProductsService.updateProduct(restaurant_id, product_id, changes);

        if (serviceData === null) {
            return res.status(404).json({result: "Restaurant or product not found."});
        }

        res.status(200).json({result: "Updated"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// DELETE :restaurant_id/products/:product_id

productsRouter.delete("/:restaurant_id/products/:product_id", async (req: Request, res: Response) => {
    const restaurant_id: string = req.params.restaurant_id;
    const product_id: string = req.params.product_id;

    try {
        var serviceData: true|null = await ProductsService.deleteProduct(restaurant_id, product_id);

        if (serviceData === null) {
            return res.status(404).json({result: "Restaurant or product not found."});
        }
  
        res.status(200).json({result: "Deleted"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
 });
