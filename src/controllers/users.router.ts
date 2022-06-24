/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

import { paypalRouter } from "./paypal.router";
import { addressesRouter } from "./addresses.router";
import { billingsRouter } from "./billings.router";

import { PutUser, User } from "../models/user.interface";

/**
 * Router Definition
 */

export const usersRouter = express.Router();
usersRouter.use("/", paypalRouter);
usersRouter.use("/", addressesRouter);
usersRouter.use("/", billingsRouter);

/**
 * Controller Definitions
 */

// GET users/:user_id

usersRouter.get("/:id", async (req: Request, res: Response) => {
    //console.log(req.author_id);
    const id: number = parseInt(req.params.id, 10);

    try {
        // TODO
        //const item: Item = await ItemService.find(id);

        var user: User = {
            id: 5,
            first_name: "Paul",
            last_name: "Boulanger",
            email: "paul.boulanger@mail.com"
        }

        if (user) {
            return res.status(200).send(user);
        }

        res.status(404).send("User not found");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// PUT users/:user_id

usersRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
        var user: PutUser = req.body;
  
        // TODO
        //const existingItem: Item = await ItemService.find(id);

        res.status(200).json({result: "Updated"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// DELETE users/:user_id

usersRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        // TODO
        //await ItemService.remove(id);
  
        res.status(200).json({result: "Deleted"});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});
