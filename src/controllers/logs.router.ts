/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { BaseItem, Item } from "./item.interface";

/**
 * Router Definition
 */

export const logsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

logsRouter.get("/connections", async (req: Request, res: Response) => {
    try {
      const items: Item[] = await ItemService.findAll();
  
      res.status(200).send(items);
    } catch (e) {
      res.status(500).send(e.message);
    }
});

logsRouter.get("/components", async (req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
