import { Api } from '../Domain';

interface ApiItemProps {
    item: Api;
}

export function ApiItem({ item }: ApiItemProps) {
    return <>
        <tr >
            <th scope="row" >
                {item.id}
            </th>
            <td >
                {item.title}
            </td>
            <td >
                {item.description}
            </td>
        </tr>
    </>;
}
