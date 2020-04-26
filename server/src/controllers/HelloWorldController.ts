import * as express from 'express';
import message from "lib";

class HelloWorldController {
    async index(_req: express.Request, res: express.Response): Promise<void> {
        res.json({
            message: 'Mensagem de Exemplo ' + message(),
        });
    }
}

export default new HelloWorldController();
