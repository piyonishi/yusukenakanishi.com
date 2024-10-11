import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { expensesRoute } from './routes/expenses';

const app = new Hono();

app.use('*', logger());

app.get('/test', (c) => {
  return c.json({ message: 'test' });
});

app.route('/api/expenses', expensesRoute);

export default app;
