/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import log from "morgan";

import { routes } from "./routes";
import { errorHandler } from "./middlewares/error.middleware";
import { notFoundHandler } from "./middlewares/not-found.middleware";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.SERVER_PORT) {
    console.log("fail");
    process.exit(1);
}

const SERVER_PORT: number = parseInt(process.env.SERVER_PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(log("tiny"));

// Init routes
const mainRouter = express.Router();
routes(mainRouter);
app.use("/api", mainRouter)

// Middlewares
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */

app.listen(SERVER_PORT, () => {
    console.log(
        `Express Server started on Port ${SERVER_PORT} | Environment : ${app.get('env')}`
    );
});