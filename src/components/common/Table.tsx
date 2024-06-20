import { Card, Typography } from '@material-tailwind/react';
import { getUsers } from '../../apiHandlers/apiRead';
import { useEffect, useState } from 'react';
import ButtonProp from './Button';
import UserModal from './modals/UserModal';
import { IUser } from '../../models/User';

const TABLE_HEAD = ['ID', 'Name', 'Email', ''];

export default function Table() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data);
        });
    }, []);

    function onEditClick(user: IUser | null | undefined) {
        if (user == null) {
            return;
        }
        setSelectedUser(user);
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    return (
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-gray-600 p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {users.map(({ id, username, email }) => (
                        <tr key={id} className="even:bg-gray-50 odd:bg-gray-200 hover:bg-gray-400">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {id}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {username}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {email}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                    <ButtonProp onClick={() => onEditClick(users.find((user) => user.id === id))} buttonType="neutral">
                                        Details
                                    </ButtonProp>
                                </Typography>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <UserModal user={selectedUser} open={isModalOpen} onClose={closeModal} />
        </Card>
    );
}
