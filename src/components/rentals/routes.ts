import { CommonRoutesConfig } from '../../common/routes';
import express from 'express';

export class RentalsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Rentals');
    }

    configureRoutes(): express.Application {

        this.app.route("/rentals")
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`List of rentals`);
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send(`Post to rentals`);
            })

        this.app.route("/rentals/:id")
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for id ${req.params.id}`);
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`PUT requested for id ${req.params.id}`);
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`PATCH requested for id ${req.params.id}`);
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(`DELETE requested for id ${req.params.id}`);
            })

        return this.app;
    }
}