/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

import * as NotificationsService from "../services/notifications.service";
// TODO

/**
 * Router Definition
 */

export const notificationsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

notificationsRouter.get("/", async (req: Request, res: Response) => {
    try {
        var serviceData = await NotificationsService.readNotificationList();

        var notifications = {
            data: serviceData
        }
  
        res.status(200).json(notifications);
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// POST items

notificationsRouter.post("/", async (req: Request, res: Response) => {
    try {
        // TODO
        var serviceData: true|null = await NotificationsService.createNotification();
  
        res.status(201).json({result: "Created"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});

// DELETE items/:id

notificationsRouter.delete("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        // TODO
        var serviceData: true|null = await NotificationsService.deleteNotification(id);

        if (serviceData === null) {
            return res.status(404).json({result: "Notification not found."});
        }
  
        res.status(200).json({result: "Deleted"});
    } catch (e: any) {
        res.status(500).json(e.message);
    }
});