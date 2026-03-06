import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            staleTime: 10_000,
            refetchInterval: 10_000,
            refetchOnWindowFocus: false,
        },
    },
});

export default queryClient;
