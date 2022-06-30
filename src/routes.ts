/**
 * Required External Modules
 */

import express from "express";
import passport from "passport";

import { bearerMiddleware } from "./middlewares/oauth.middleware";

import { oauthRouter } from "./controllers/oauth.router";
import { usersRouter } from "./controllers/users.router";
import { restaurantsRouter } from "./controllers/restaurants.router";
import { ordersRouter } from "./controllers/orders.router";
import { deliveriesRouter } from "./controllers/deliveries.router";
import { logsRouter } from "./controllers/logs.router";
import { statsRouter } from "./controllers/stats.router";
import { enumsRouter } from "./controllers/enums.router";

/**
 * Routes
 */

export const routes = function(mainRouter: express.Router) {
    mainRouter.use("/oauth", oauthRouter);
    mainRouter.use(bearerMiddleware);
    // TODO middleware to check if user has access to resource
    mainRouter.use("/users", usersRouter);
    mainRouter.use("/restaurants", restaurantsRouter);
    mainRouter.use("/orders", ordersRouter);
    mainRouter.use("/deliveries", deliveriesRouter);
    mainRouter.use("/logs", logsRouter);
    mainRouter.use("/stats", statsRouter);
    mainRouter.use("/", enumsRouter);
};