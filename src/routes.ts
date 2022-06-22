/**
 * Required External Modules
 */

import express from "express";

import { oauthRouter } from "./controllers/oauth.router";
import { usersRouter } from "./controllers/users.router";
import { restaurantsRouter } from "./controllers/restaurants.router";
import { ordersRouter } from "./controllers/orders.router";
import { deliveriesRouter } from "./controllers/deliveries.router";
import { notificationsRouter } from "./controllers/notifications.router";
import { logsRouter } from "./controllers/logs.router";
import { statsRouter } from "./controllers/stats.router";

/**
 * Routes
 */

export const routes = function(mainRouter: express.Router) {
    mainRouter.use("/oauth", oauthRouter);
    mainRouter.use("/users", usersRouter);
    mainRouter.use("/restaurants", restaurantsRouter);
    mainRouter.use("/orders", ordersRouter);
    mainRouter.use("/deliveries", deliveriesRouter);
    mainRouter.use("/notifications", notificationsRouter);
    mainRouter.use("/logs", logsRouter);
    mainRouter.use("/stats", statsRouter);
};