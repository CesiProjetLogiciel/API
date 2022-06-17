/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { BaseItem, Item } from "./item.interface";

/**
 * Router Definition
 */

export const registerRouter = express.Router();

/**
 * Controller Definitions
 */

 registerRouter.post("/", async (req: Request, res: Response) => {
    try {
      const item: BaseItem = req.body;
  
      const newItem = await ItemService.create(item);
  
      res.status(201).json(newItem);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });
