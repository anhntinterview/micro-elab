'use client';

import { ElementProvider } from '@app/app/template/context/element.provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ElementProvider>
          {children}
      </ElementProvider>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}
