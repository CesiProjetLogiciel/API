/**
 * Required External Modules
 */

import express from "express";

import { itemsRouter } from "./items/items.router";

import { registerRouter } from "./controllers/register.router";
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

export const routes = function(app: express.Express) {
    app.use("/api/menu/items", itemsRouter);

    app.use("/register", registerRouter);
    app.use("/oauth", oauthRouter);
    app.use("/users", usersRouter);
    app.use("/restaurants", restaurantsRouter);
    app.use("/orders", ordersRouter);
    app.use("/deliveries", deliveriesRouter);
    app.use("/notifications", notificationsRouter);
    app.use("/logs", logsRouter);
    app.use("/stats", statsRouter);
};