import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { postsRoute } from './routes/posts';

const app = new Hono();

app.use('*', logger());

app.get('/test', (c) => {
  return c.json({ message: 'test' });
});

app.route('/api/v1/posts', postsRoute);

export default app;
