/**
 * Required External Modules and Interfaces
 */

 import express, { Request, Response } from "express";

 import { BasePaypal, UserPaypal } from "../models/paypal.interface";
 import * as PaypalService from "../services/paypal.service";

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
        var serviceData: UserPaypal|null = await PaypalService.readPaypal(id);

        if (serviceData === null) {
            return res.status(404).json({result: "User not found."});
        }

        return res.status(200).json(serviceData);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// POST users/:user_id/paypal

paypalRouter.post("/:id/paypal", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        var paypal: BasePaypal = {
            paypal: req.body.paypal_address
        };
        var serviceData: true|null = await PaypalService.createPaypal(id, paypal);

        if (serviceData === null) {
            return res.status(404).json({result: "User not found."});
        }
  
        res.status(201).json({result: "Created"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// PUT users/:user_id/paypal

paypalRouter.put("/:id/paypal", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
        var paypal: BasePaypal = {
            paypal: req.body.paypal_address
        };
  
        var serviceData: true|null = await PaypalService.updatePaypal(id, paypal);

        if (serviceData === null) {
            return res.status(404).json({result: "User not found."});
        }

        res.status(200).json({result: "Updated"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// DELETE users/:user_id/paypal

paypalRouter.delete("/:id/paypal", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        var serviceData: true|null = await PaypalService.deletePaypal(id);

        if (serviceData === null) {
            return res.status(404).json({result: "User not found."});
        }
  
        res.status(200).json({result: "Deleted"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});
