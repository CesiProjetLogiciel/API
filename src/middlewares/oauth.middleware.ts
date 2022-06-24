import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { Strategy } from "passport-http-bearer";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Jwt } from "../models/oauth.interface";

export const apiKeyBearerMiddleware = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    if (request.headers.authorization) {
        // TODO header == (env variable OR third party dev key in DB)
        var apiKey: string = request.headers.authorization.split(" ")[1];
        if (apiKey == process.env.WEB_API_KEY as string) {
            next();
            return;
        }
    }
    response.status(401).send({result: "Unauthorized"});
};

passport.use(new Strategy(
    function (token, callback) {
        jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, payload: any) => {
            if (!token) {
                err = "error";
            }
            if (err) {
                console.log(err);
                return callback(err, false);
            }
            
            var jwt_payload: Jwt = payload;

            if (jwt_payload.exp > (Date.now()/1000) && jwt_payload.type == "access") {
                return callback(null, jwt_payload.sub);
            }
            else {
                return callback(null, false);
            }
        });
    }
));

export const bearerMiddleware = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    passport.authenticate('bearer', { session: false }, function(err, user) {
        if (err) {
            return response.status(401).send({result: "Unauthorized. Invalid token"}).end();
        }
        next();
    })(request, response, next);
};