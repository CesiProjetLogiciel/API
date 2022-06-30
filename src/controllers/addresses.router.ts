/**
* Required External Modules and Interfaces
*/

import express, { Request, Response } from "express";

import { PagedList } from "../models/paged_list.interface";
import { Address, BaseAddress, PutAddress } from "../models/address.interface";
import * as AddressesService from "../services/addresses.service";

/**
* Router Definition
*/

export const addressesRouter = express.Router();

/**
* Controller Definitions
*/

// GET users/:user_id/addresses

addressesRouter.get("/:id/addresses", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    
    try {
        var serviceData: Array<Address>|null = await AddressesService.readAddress(id);
        
        if (serviceData === null) {
            return res.status(404).json({result: "User not found."});
        }
        
        var addresses: PagedList<Address> = {
            data: serviceData,
            page: 1,
            total_pages: 2,
            items_per_page: 1,
            total_items: 2,
            next: `/api/users/${id}/addresses&page=2`,
            prev: ""
        }
        
        res.status(200).json(addresses);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// POST users/:user_id/addresses

addressesRouter.post("/:id/addresses", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    
    try {
        var address: BaseAddress = req.body;
        
        var serviceData: true|null = await AddressesService.createAddress(id, address);

        if (serviceData === null) {
            return res.status(404).json({result: "User not found."});
        }
        
        res.status(201).json({result: "Created"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// PUT users/:user_id/addresses/:address_id

addressesRouter.put("/:user_id/addresses/:address_id", async (req: Request, res: Response) => {
    const user_id: number = parseInt(req.params.user_id, 10);
    const address_id: number = parseInt(req.params.address_id, 10);
    
    try {
        var changes: PutAddress = req.body;
        
        var serviceData: true|null = await AddressesService.updateAddress(user_id, address_id, changes);

        if (serviceData === null) {
            return res.status(404).json({result: "User or address not found."});
        }
        
        res.status(200).json({result: "Updated"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// DELETE users/:user_id/addresses/:address_id

addressesRouter.delete("/:user_id/addresses/:address_id", async (req: Request, res: Response) => {
    const user_id: number = parseInt(req.params.user_id, 10);
    const address_id: number = parseInt(req.params.address_id, 10);
    
    try {
        var serviceData: true|null = await AddressesService.deleteAddress(user_id, address_id);

        if (serviceData === null) {
            return res.status(404).json({result: "User or address not found."});
        }
        
        res.status(200).json({result: "Deleted"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});