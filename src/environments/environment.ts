import { coreEnvironment } from './environment.core';
import { secrets } from './secrets/secrets';

export const environment = {
    production: false,
    ...coreEnvironment,
    secrets: { ...secrets }
}