/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

import { paypalRouter } from "./paypal.router";
import { addressesRouter } from "./addresses.router";
import { billingsRouter } from "./billings.router";

import { PutUser, User } from "../models/user.interface";
import * as UsersService from "../services/users.service";

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
        var serviceData: User|null = await UsersService.readUser(id);

        if (serviceData === null) {
            return res.status(404).json({result: "User not found."});
        }

        res.status(200).json(serviceData);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// PUT users/:user_id

usersRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
        var changes: PutUser = req.body;
  
        var serviceData: true|null = await UsersService.updateUser(id, changes);

        if (serviceData === null) {
            return res.status(404).json({result: "User not found."});
        }

        res.status(200).json({result: "Updated"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// DELETE users/:user_id

usersRouter.delete("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    
    try {
        var serviceData: true|null = await UsersService.deleteUser(id);

        if (serviceData === null) {
            return res.status(404).json({result: "User not found."});
        }
  
        res.status(200).json({result: "Deleted"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});
