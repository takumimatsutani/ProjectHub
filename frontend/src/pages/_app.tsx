// src/pages/_app.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

// React Queryクライアントの作成
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}