/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

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
        // TODO
        var logs = {
            logs: "test log"
        }
  
        res.status(200).send(logs);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

logsRouter.get("/components", async (req: Request, res: Response) => {
    try {
        // TODO
        var logs = {
            logs: "test log"
        }

        res.status(200).send(logs);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});
