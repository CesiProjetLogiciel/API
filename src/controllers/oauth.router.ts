/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { apiKeyBearerMiddleware } from "../middlewares/oauth.middleware";

import { Jwt } from "../models/oauth.interface";
import { RegisterUser } from "../models/user.interface";
import { Authentication, Refresh, TokenResponse } from "../models/oauth.interface";

/**
 * Router Definition
 */

export const oauthRouter = express.Router();

function generateAccessToken(user_id: number) {
    var payload: object = {
        jti: require('crypto').randomBytes(16).toString('hex'),
        sub: user_id,
        type: "access"
    }
    return jwt.sign(payload, process.env.TOKEN_SECRET as string, { expiresIn: '1800s' });
}

function generateRefreshToken(user_id: number) {
    var payload: object = {
        jti: require('crypto').randomBytes(16).toString('hex'),
        sub: user_id,
        type: "refresh"
    }
    return jwt.sign(payload, process.env.TOKEN_SECRET as string, { expiresIn: '604800s' });
}

/**
 * Controller Definitions
 */

oauthRouter.post("/register", apiKeyBearerMiddleware, async (req: Request, res: Response) => {
    try {
        var user: RegisterUser = req.body;
        
        // TODO
        //const newItem = await ItemService.create(item);
        var user_id: number = 5;
        var token: TokenResponse = {
            user_id: user_id,
            access_token: generateAccessToken(user_id),
            expires_in: 604800,
            refresh_token: generateRefreshToken(user_id),
        }
        if (user.user_type == "THIRD_PARTY_DEV") {
            token.api_key = require('crypto').randomBytes(64).toString('hex');
            // TODO store in DB
        }

        res.status(201).json(token);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

oauthRouter.post("/token", apiKeyBearerMiddleware, async (req: Request, res: Response) => {
    try {
        const item: Authentication | Refresh = req.body;
  
        // TODO
        //const newItem = await ItemService.create(item);
        var user_id: number = 5;
        var token: TokenResponse = {
            user_id: user_id,
            access_token: generateAccessToken(user_id),
            expires_in: 604800,
            refresh_token: generateRefreshToken(user_id),
        }
  
        res.status(200).json(token);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});
