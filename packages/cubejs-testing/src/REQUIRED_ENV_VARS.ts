/**
 * Environment variables that cannot be hardcoded in code, and instead must be specified via the cli.
 * Usually cloud db config & auth variables.
 */
export const REQUIRED_ENV_VARS: {[key: string]: string[]} = {
  athena: [
    'CUBEJS_AWS_KEY',
    'CUBEJS_AWS_SECRET',
    'CUBEJS_AWS_REGION',
    'CUBEJS_AWS_S3_OUTPUT_LOCATION',
    'CUBEJS_DB_EXPORT_BUCKET'
  ],
  bigquery: [
    'CUBEJS_DB_BQ_PROJECT_ID',
    'CUBEJS_DB_EXPORT_BUCKET',
    'CUBEJS_DB_BQ_CREDENTIALS',
  ],
  materialize: [],
  multidb: [],
  questdb: [],
  postgres: [],
};
