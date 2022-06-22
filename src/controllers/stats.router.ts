/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

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
        // TODO
        //const items: Item[] = await ItemService.findAll();

        var stats = {
            stats: "todo"
        }
  
        res.status(200).send(stats);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

statsRouter.get("/performance", async (req: Request, res: Response) => {
    try {
        // TODO
        //const items: Item[] = await ItemService.findAll();

        var stats = {
            stats: "todo"
        }

        res.status(200).send(stats);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});
