/**
 * Required External Modules and Interfaces
 */

 import express, { Request, Response } from "express";

 import { BasePaypal, UserPaypal } from "../models/paypal.interface";

 /**
 * Router Definition
 */

export const paypalRouter = express.Router();

/**
 * Controller Definitions
 */

// GET users/:user_id/paypal

paypalRouter.get("/:id/paypal", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
        // TODO
        //const item: Item = await ItemService.find(id);

        var paypal: UserPaypal = {
            user_id: 5,
            paypal: "restaurant@mail.com"
        }

        if (paypal) {
            return res.status(200).send(paypal);
        }

        res.status(404).send("User not found");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// POST users/:user_id/paypal

paypalRouter.post("/:id/paypal", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        var paypal: BasePaypal = req.body;
  
        // TODO
        //const newItem = await ItemService.create(item);
  
        res.status(201).json({result: "Created"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// PUT users/:user_id/paypal

paypalRouter.put("/:id/paypal", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
        var paypal: BasePaypal = req.body;
  
        // TODO
        //const existingItem: Item = await ItemService.find(id);

        res.status(200).json({result: "Updated"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// DELETE users/:user_id/paypal

paypalRouter.delete("/:id/paypal", async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        // TODO
        //await ItemService.remove(id);
  
        res.status(200).json({result: "Deleted"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});
