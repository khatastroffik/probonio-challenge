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

    return (<>
        <table>
            <caption >
                This is a list of free public APIs
                <p >a (shortened) list of free public apis as provided gracefully by <a href="https://www.freepublicapis.com">www.freepublicapis.com</a> .</p>
            </caption>
            <thead>
                <tr>
                    <th scope="col" >
                        ID
                    </th>
                    <th scope="col" >
                        Title
                    </th>
                    <th scope="col" >
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item: Api) => <ApiItem key={item.id} item={{ id: item.id, title: item.title, description: item.description }} ></ApiItem >)}
            </tbody>
        </table>
        </>);
}
