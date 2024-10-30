import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getTotalBlogs() {
      const res = await fetch('/api/v1/posts/total-blogs');
      const data = await res.json();
      setCount(data.total);
    }
    getTotalBlogs();
  }, []);

  return (
    <>
      <Card className="w-[580px] m-auto">
        <CardHeader>
          <CardTitle>Total value</CardTitle>
          <CardDescription className="flex">
            Total value of counter.
            <a href="https://vitejs.dev" target="_blank">
              <img
                src={viteLogo}
                className="inline-block ml-2"
                alt="Vite logo"
                width={14}
              />
            </a>
            <a href="https://react.dev" target="_blank">
              <img
                src={reactLogo}
                className="inline-block ml-1"
                alt="React logo"
                width={14}
              />
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4 text-lg">
            {count}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex gap-3 w-full">
            <Button
              size={'sm'}
              onClick={() => setCount((count) => count - 1)}
              className="w-full"
            >
              DOWN
            </Button>
            <Button
              size={'sm'}
              onClick={() => setCount((count) => count + 1)}
              className="w-full mr-1"
            >
              UP
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}

export default App;
