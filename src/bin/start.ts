import * as dotEnvSafe from 'dotenv-safe';
dotEnvSafe.config();

import 'reflect-metadata';
import { startView } from '../config/app';
startView();
