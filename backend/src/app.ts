import { Hono } from 'hono';
import api from './index';
import { logger } from 'hono/logger';

const app = new Hono();

app.use('*', logger());

app.route('/api/v1', api);

export default app;
