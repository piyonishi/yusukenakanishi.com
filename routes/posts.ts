import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';

const postSchema = z.object({
  id: z.number().int().positive().min(1),
  title: z.string().min(3).max(50),
  content: z.string(),
});

type Post = z.infer<typeof postSchema>;

const createPostSchema = postSchema.omit({ id: true });

const fakePosts: Post[] = [
  {
    id: 1,
    title: 'Hello World',
    content: 'This is a test post',
  },
  {
    id: 2,
    title: 'Hello World 2',
    content: 'This is a test post 2',
  },
  {
    id: 3,
    title: 'Hello World 3',
    content: 'This is a test post 3',
  },
];

export const postsRoute = new Hono()
  .get('/', (c) => {
    return c.json({ posts: fakePosts });
  })
  .post('/', zValidator('json', createPostSchema), (c) => {
    const post = c.req.valid('json');
    fakePosts.push({ ...post, id: fakePosts.length + 1 });
    return c.json({
      post,
      status: 201,
      success: true,
      message: 'New post 🚀',
    });
  })
  .get('/:id{[0-9]+}', (c) => {
    const id = Number.parseInt(c.req.param('id'));
    const post = fakePosts.find((post) => post.id === id);
    if (!post) {
      return c.notFound();
    }
    return c.json({ post });
  })
  .delete('/:id{[0-9]+}', (c) => {
    const id = Number.parseInt(c.req.param('id'));
    const index = fakePosts.findIndex((post) => post.id === id);
    if (index === -1) {
      return c.notFound();
    }
    const deletedPost = fakePosts.splice(index, 1)[0];
    return c.json({
      post: deletedPost,
      status: 200,
      success: true,
      message: 'Post deleted 🚀',
    });
  })
  .put('/:id{[0-9]+}', zValidator('json', createPostSchema), (c) => {
    const id = Number.parseInt(c.req.param('id'));
    const index = fakePosts.findIndex((post) => post.id === id);
    if (index === -1) {
      return c.notFound();
    }
    const updatedPost = { ...fakePosts[index], ...c.req.valid('json') };
    fakePosts[index] = updatedPost;
    return c.json({
      post: updatedPost,
      status: 200,
      success: true,
      message: 'Post updated 🚀',
    });
  });
