'use client';

import { PostProvider } from '@app/app/template/context/post.provider';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <PostProvider>{children}</PostProvider>

      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}