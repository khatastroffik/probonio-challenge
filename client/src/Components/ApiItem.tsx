import { Api } from '../Domain';

interface ApiItemProps {
    item: Api;
}

export function ApiItem({ item }: ApiItemProps) {
    return <>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.id}
            </th>
            <td className="px-6 py-4">
                {item.title}
            </td>
            <td className="px-6 py-4">
                {item.description}
            </td>
        </tr>
    </>;
}
