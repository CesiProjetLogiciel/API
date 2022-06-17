/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { BaseItem, Item } from "./item.interface";

/**
 * Router Definition
 */

export const statsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

statsRouter.get("/sales", async (req: Request, res: Response) => {
    try {
      const items: Item[] = await ItemService.findAll();
  
      res.status(200).send(items);
    } catch (e) {
      res.status(500).send(e.message);
    }
});

statsRouter.get("/performance", async (req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
