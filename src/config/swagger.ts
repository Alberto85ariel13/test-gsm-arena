import * as fs from 'fs';
import * as swaggerUi from 'swagger-ui-express';

const getJson = path => JSON.parse(fs.readFileSync(path, 'utf8'));

const swaggerFile: any = getJson(`${process.cwd()}/swagger.json`);
const packageFile: any = getJson(`${process.cwd()}/package.json`);

export const register = (server) => {
    swaggerFile.info = {
        title: packageFile.name,
        description: packageFile.description,
        version: packageFile.version,
    };
    swaggerFile.host = `${process.env.HOST}:${process.env.SWAGGER_PORT}`;
    swaggerFile.basePath = '/';

    server.use(
        '/documentation',
        swaggerUi.serve,
        swaggerUi.setup(swaggerFile)
    );

    return server;
};
