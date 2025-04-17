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
        <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold underline text-gray-800 h-20">Probonio Interview Challenge</h1>
                <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700" onClick={doLoad}>Load the data from the server</button>
                <ApiList enabled={enabled}></ApiList>
            </div>
            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>

        </>);
}
