/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

import { RegisterUser } from "../models/user.interface";
import { Authentication, Refresh, TokenResponse } from "../models/oauth.interface";

/**
 * Router Definition
 */

export const oauthRouter = express.Router();

/**
 * Controller Definitions
 */

 oauthRouter.post("/register", async (req: Request, res: Response) => {
    try {
        var user: RegisterUser = req.body;
  
        // TODO
        //const newItem = await ItemService.create(item);
        var token: TokenResponse = {
            user_id: 5,
            access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
            expires_in: 86400,
            refresh_token: "NDNjZWUzNWI6MjZjYjcwMzMyOTdlNDQzMWI5ZDMzODBmYj",
        }
  
        res.status(201).json(token);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

oauthRouter.post("/token", async (req: Request, res: Response) => {
    try {
        const item: Authentication | Refresh = req.body;
  
        // TODO
        //const newItem = await ItemService.create(item);
        var token: TokenResponse = {
            user_id: 5,
            access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
            expires_in: 86400,
            refresh_token: "NDNjZWUzNWI6MjZjYjcwMzMyOTdlNDQzMWI5ZDMzODBmYj",
        }
  
        res.status(200).json(token);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});
