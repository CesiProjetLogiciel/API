/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { apiKeyBearerMiddleware } from "../middlewares/oauth.middleware";

import { Jwt, RefreshTokenResponse, UserType } from "../models/oauth.interface";
import { RegisterUser } from "../models/user.interface";
import { Authentication, Refresh, TokenResponse } from "../models/oauth.interface";
import * as UsersService from "../services/users.service";
import * as LogsService from "../services/logs.service";

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
        var new_user: RegisterUser = req.body;
        
        // TODO check if user_type valid
        // TODO check if referral code and give discount
        // TODO send email verification

        var serviceData: number = await UsersService.createUser(new_user);

        var token: TokenResponse = {
            user_id: serviceData,
            user_type: new_user.user_type,
            access_token: generateAccessToken(serviceData),
            expires_in: 1800,
            refresh_token: generateRefreshToken(serviceData),
        }
        if (new_user.user_type == UserType.THIRD_PARTY_DEV) {
            token.api_key = require('crypto').randomBytes(64).toString('hex');
            // TODO store in DB
        }

        await LogsService.createConnectionLog(); // TODO
        res.status(201).json(token);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

oauthRouter.post("/token", apiKeyBearerMiddleware, async (req: Request, res: Response) => {
    try {
        if (req.body.grant_type == "client_credentials") {
            var login_body: Authentication = req.body;

            var serviceData: number|false = await UsersService.checkCredentials(login_body.email, login_body.password);

            if (serviceData === false) {
                return res.status(401).json({result: "Unauthorized. Invalid credentials"});
            }

            var userData = await UsersService.readUser(serviceData);

            var token: TokenResponse = {
                user_id: serviceData,
                user_type: UserType.CLIENT, // TODO userData.type
                access_token: generateAccessToken(serviceData),
                expires_in: 1800,
                refresh_token: generateRefreshToken(serviceData)
            };

            await LogsService.createConnectionLog(); // TODO
            return res.status(200).json(token);
        }
        else if (req.body.grant_type == "refresh_token") {
            var refresh_body: Refresh = req.body;
            jwt.verify(refresh_body.refresh_token, process.env.TOKEN_SECRET as string, (err: any, payload: any) => {
                if (!refresh_body.refresh_token) {
                    err = "error";
                }
                if (err) {
                    console.log(err);
                    return res.status(401).json({result: "Unauthorized. Invalid token"});
                }
                
                var jwt_payload: Jwt = payload;
    
                if (jwt_payload.exp > (Date.now()/1000) && jwt_payload.type == "refresh") {
                    var token: RefreshTokenResponse = {
                        user_id: jwt_payload.sub,
                        access_token: generateAccessToken(jwt_payload.sub),
                        expires_in: 1800,
                        refresh_token: generateRefreshToken(jwt_payload.sub)
                    };
                    return res.status(200).json(token);
                }
                else {
                    return res.status(401).json({result: "Unauthorized. Invalid token"});
                }
            });
        }
        else {
            return res.status(401).json({result: "Unauthorized. Invalid token"});
        }
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});
