import { Hono } from 'hono';
import { logger } from 'hono/logger';
import api from './index';

const app = new Hono();

app.use('*', logger());

app.route('/api/v1', api);

export default app;
