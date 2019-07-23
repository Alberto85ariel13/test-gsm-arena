"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotEnvSafe = require("dotenv-safe");
dotEnvSafe.config();
require("reflect-metadata");
const app_1 = require("../config/app");
app_1.startView();
