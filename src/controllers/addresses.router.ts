/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

import { PagedList } from "../models/paged_list.interface";
import { Address, BaseAddress, PutAddress } from "../models/address.interface";

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
        // TODO
        //const items: Item[] = await ItemService.findAll();

        var addresses: PagedList<Address> = {
            data: [
                {
                    id: 1,
                    user_id: 5,
                    zipcode: "54000",
                    city: "Nancy",
                    address: "19 Avenue de la Forêt de Haye",
                    state: "",
                    additional_info: "Bâtiment Cesi",
                    last_name: "Boulanger",
                    first_name: "Paul",
                    phone_number: "+33688156385",
                    country: "France"
                }
            ],
            page: 1,
            total_pages: 2,
            items_per_page: 1,
            total_items: 2,
            next: "/api/users/5/addresses&page=2",
            prev: ""
        }
  
        res.status(200).send(addresses);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// POST users/:user_id/addresses

addressesRouter.post("/:id/addresses", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        var address: BaseAddress = req.body;
  
        // TODO
        //const newItem = await ItemService.create(item);
  
        res.status(201).json({result: "Created"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// PUT users/:user_id/addresses/:address_id

addressesRouter.put("/:user_id/addresses/:address_id", async (req: Request, res: Response) => {
    const user_id: number = parseInt(req.params.user_id, 10);
    const address_id: number = parseInt(req.params.address_id, 10);
  
    try {
        var address: PutAddress = req.body;

        // TODO
        //const existingItem: Item = await ItemService.find(id);

        res.status(200).json({result: "Updated"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// DELETE users/:user_id/addresses/:address_id

addressesRouter.delete("/:user_id/addresses/:address_id", async (req: Request, res: Response) => {
    const user_id: number = parseInt(req.params.user_id, 10);
    const address_id: number = parseInt(req.params.address_id, 10);

    try {
        // TODO
        //await ItemService.remove(id);
  
        res.status(200).json({result: "Deleted"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
 });