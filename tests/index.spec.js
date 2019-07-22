require('dotenv-safe').config({
    allowEmptyValues: true,
    path: './tests/.env.test',
    sample: './tests/.env.test',
});
require('ts-node/register');

const sinon = require('sinon');
const chai = require('chai')
    .use(require('sinon-chai'))
    .use(require('chai-subset'))
    .use(require('chai-as-promised'))
    .use(require('chai-http'));


global.Promise = require('bluebird');


/**
 * Chai
 */
global.chai = chai;
global.expect = chai.expect;
global.should = chai.should;
should();

/**
 * Sinon
 */
global.sinon = sinon;
