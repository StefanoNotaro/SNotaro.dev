import { coreEnvironment } from './environment.core';
import { secrets } from './secrets/secrets.prod';

export const environment = {
    production: true,
    ...coreEnvironment,
    secrets: { ...secrets }
}