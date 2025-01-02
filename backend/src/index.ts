import { Hono } from 'hono';
import { postsRoute } from './routes/posts';

const api = new Hono();
api.route('/posts', postsRoute);

export default api;
