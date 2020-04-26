import express from 'express';
import cors from 'cors';
import { router } from './middlewares/routesMiddleware';
import { Express as ExpressApp } from 'express-serve-static-core';

export default (): ExpressApp => {
    const app = express();
    const apiVersion = process.env.API_VERSION ?? '/api/v1';
    app.use(cors());

    app.use(apiVersion, router);

    return app;
};
