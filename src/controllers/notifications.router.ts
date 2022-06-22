/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
// TODO

/**
 * Router Definition
 */

export const notificationsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

notificationsRouter.get("/", async (req: Request, res: Response) => {
    try {
        // TODO
        const items = {test: ""}
  
        res.status(200).send(items);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// POST items

notificationsRouter.post("/", async (req: Request, res: Response) => {
    try {
        // TODO
        const newItem = {test: ""}
  
        res.status(201).json({result: "Created"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// DELETE items/:id

notificationsRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        // TODO
        //await ItemService.remove(id);
  
        res.status(200).json({result: "Deleted"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});