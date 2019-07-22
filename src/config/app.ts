import 'reflect-metadata';
import { createExpressServer, useContainer } from 'routing-controllers';
import { errors } from 'celebrate';
import { initDatabaseConnection } from './db';
import { register as registerSwagger } from './swagger';
import { initDi } from './di';
import { logger } from '../utils/logger';

export const onError = port => (error: NodeJS.ErrnoException) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = (typeof port === 'string') ? `Pipe ${port}` : `Port ${port}`;
    /* tslint:disable */
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
    /* tslint:enable */
};

export const initServer = async () => {
    await initDatabaseConnection();

    const container = await initDi();

    useContainer(container);

    const app = createExpressServer({
        controllers: [`${__dirname}/../controllers/*{.ts,.js}`],
    });

    registerSwagger(app);

    app.use(errors());

    return app;
};

const port = process.env.PORT;
export const startView = async () => {
    const server = await initServer();

    server.listen(port, () => {
        logger.info(`Listening on ${process.env.HOST}:${process.env.PORT}`);
    });
    server.on('error', onError(port));
};
