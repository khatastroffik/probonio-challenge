import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { useState } from 'react';
import { ApiList } from './Components/ApiList';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export function App() {
    const [enabled, setEnabled] = useState<boolean>(false);
    const doLoad = () => { setEnabled(true); };

    return (<>
        <QueryClientProvider client={queryClient}>
                <h1 >Probonio Interview Challenge</h1>
                <button onClick={doLoad}>Load the data from the server</button>
                <ApiList enabled={enabled}></ApiList>
            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>

        </>);
}
