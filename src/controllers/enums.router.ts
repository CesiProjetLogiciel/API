/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

import { Country } from "../models/country.interface";
import * as EnumsService from "../services/enums.service";

/**
 * Router Definition
 */

export const enumsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

enumsRouter.get("/user-types", async (req: Request, res: Response) => {
    try {
        var serviceData: Array<string> = await EnumsService.readUserTypes();

        var types = {
            data: serviceData
        }
  
        res.status(200).json(types);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

enumsRouter.get("/countries", async (req: Request, res: Response) => {
    try {
        var serviceData: Array<Country> = await EnumsService.readCountries();

        var countries = {
            data: serviceData
        }

        res.status(200).json(countries);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});
