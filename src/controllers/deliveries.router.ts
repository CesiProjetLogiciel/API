/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { BaseItem, Item } from "./item.interface";

/**
 * Router Definition
 */

export const deliveriesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

deliveriesRouter.get("/", async (req: Request, res: Response) => {
    try {
      const items: Item[] = await ItemService.findAll();
  
      res.status(200).send(items);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });

// GET items/:id

deliveriesRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const item: Item = await ItemService.find(id);
  
      if (item) {
        return res.status(200).send(item);
      }
  
      res.status(404).send("item not found");
    } catch (e) {
      res.status(500).send(e.message);
    }
  });
