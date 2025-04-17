import { useQuery } from '@tanstack/react-query';
import { ApiItem } from './ApiItem';
import { Api } from '../Domain';

interface ApiListProps {
    enabled: boolean;
}

export function ApiList({ enabled }: ApiListProps) {
    const { status, error, data } = useQuery({
        enabled: enabled,
        queryKey: ['api-items'],
        queryFn: () => fetch(`http://localhost:3000/api/v1/apis`).then((res) => { return res.json() })
    })

    if (!enabled) return <p>nothing to do</p>
    if (status === 'pending') return <p>Loading...</p>
    if (status === 'error') return <p>Error!</p>

    return (
        <>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    This is a list of free public APIs
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">a (shortened) list of free public apis as provided gracefully by <a className="text-fuchsia-700" href="https://www.freepublicapis.com">www.freepublicapis.com</a> .</p>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: Api) => <ApiItem key={item.id} item={{ id: item.id, title: item.title, description: item.description }} ></ApiItem >)}
                </tbody>
            </table>
        </>
    );
}
