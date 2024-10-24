import path from 'node:path';

export const ENV_VARS = {
  PORT: 'PORT',
};

export const MONGO_BD_VARS = {
  MONGO_USER: 'MONGO_USER',
  MONGO_PASSWORD: 'MONGO_PASSWORD',
  MONGO_URL: 'MONGO_URL',
  MONGO_DB: 'MONGO_DB',
};

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;

export const ROLES = {
  CONTACT: 'contact',
  USER: 'user',
};

export const SMTP = {
  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASSWORD: 'SMTP_PASSWORD',
  SMTP_FROM: 'SMTP_FROM',
};

export const JWT = {
  JWT_SECRET: 'JWT_SECRET',
};

export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');

export const APPDOMAIN = { APP_DOMAIN: 'APP_DOMAIN' };


export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');

export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');


export const CLOUDINARY = {
  CLOUD_NAME: 'CLOUD_NAME',
  API_KEY: 'API_KEY',
  API_SECRET: 'API_SECRET',
};



export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json');