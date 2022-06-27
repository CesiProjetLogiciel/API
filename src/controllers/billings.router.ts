/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

import { PagedList } from "../models/paged_list.interface";
import { Address, BaseAddress, PutAddress } from "../models/address.interface";
import * as BillingsService from "../services/billings.service";

/**
 * Router Definition
 */

export const billingsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET users/:user_id/billings

billingsRouter.get("/:id/billings", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        var serviceData: Array<Address>|null = await BillingsService.readBilling(id);

        if (serviceData === null) {
            return res.status(404).json({result: "User not found."});
        }

        var billings: PagedList<Address> = {
            data: serviceData,
            page: 1,
            total_pages: 2,
            items_per_page: 1,
            total_items: 2,
            next: `/api/users/${id}/billings&page=2`,
            prev: ""
        }
  
        res.status(200).json(billings);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// POST users/:user_id/billings

billingsRouter.post("/:id/billings", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        var billing: BaseAddress = req.body;
  
        var serviceData: true|null = await BillingsService.createBilling(id, billing);

        if (serviceData === null) {
            return res.status(404).json({result: "User not found."});
        }
  
        res.status(201).json({result: "Created"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// PUT users/:user_id/billings/:billing_id

billingsRouter.put("/:user_id/billings/:billing_id", async (req: Request, res: Response) => {
    const user_id: number = parseInt(req.params.user_id, 10);
    const billing_id: number = parseInt(req.params.billing_id, 10);
  
    try {
        var changes: PutAddress = req.body;

        var serviceData: true|null = await BillingsService.updateBilling(user_id, billing_id, changes);

        if (serviceData === null) {
            return res.status(404).json({result: "User or address not found."});
        }

        res.status(200).json({result: "Updated"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// DELETE users/:user_id/billings/:billing_id

billingsRouter.delete("/:user_id/billings/:billing_id", async (req: Request, res: Response) => {
    const user_id: number = parseInt(req.params.user_id, 10);
    const billing_id: number = parseInt(req.params.billing_id, 10);

    try {
        var serviceData: true|null = await BillingsService.deleteBilling(user_id, billing_id);

        if (serviceData === null) {
            return res.status(404).json({result: "User or address not found."});
        }
  
        res.status(200).json({result: "Deleted"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
 });