import app from './src/app';
Bun.serve({
  fetch: app.fetch,
});

console.log('Server started at http://localhost:3000');
