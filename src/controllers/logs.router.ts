/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

import * as LogsService from "../services/logs.service";

/**
 * Router Definition
 */

export const logsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

logsRouter.get("/connections", async (req: Request, res: Response) => {
    try {
        var serviceData = await LogsService.readConnectionLog();
        var logs: any = {
            data: []
        }
        serviceData.forEach(function(entry: any) {
            logs.data.push({
                log: entry.Logs,
                type: entry.Type
            })
        })
  
        res.status(200).json(logs);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

logsRouter.get("/components", async (req: Request, res: Response) => {
    try {
        var serviceData = await LogsService.readComponentDownloadLog();
        var logs: any = {
            data: []
        }
        serviceData.forEach(function(entry: any) {
            logs.data.push({
                log: entry.Logs,
                type: entry.Type
            })
        })

        res.status(200).json(logs);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});
