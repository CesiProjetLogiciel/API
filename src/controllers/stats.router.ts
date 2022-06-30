/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

import * as StatsService from "../services/stats.service";

/**
 * Router Definition
 */

export const statsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

statsRouter.get("/sales", async (req: Request, res: Response) => {
    try {
        var serviceData: any = await StatsService.readSalesStats();
        var stats: any = {
            data: serviceData.stats
        }
        res.status(200).json(stats);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

statsRouter.get("/performance", async (req: Request, res: Response) => {
    try {
        var serviceData: any = await StatsService.readPerformanceStats();
        var stats: any = {
            data: serviceData.stats
        }
        res.status(200).json(stats);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});
