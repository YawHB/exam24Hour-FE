import { Card, Typography } from '@material-tailwind/react';
import { getUsers } from '../../apiHandlers/get/apiRead';
import { useEffect, useState } from 'react';
import ButtonProp from './Button';
import UserModal from './modals/UserModal';
import { IAthlete } from '../../models/athlete';

const TABLE_HEAD = ['Navn', 'Køn', 'Alder', 'Klub', ''];

export default function Table() {
    const [athlete, setAthlete] = useState<IAthlete[]>([]);
    const [selectedUser, setSelectedUser] = useState<IAthlete | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        getUsers().then((data) => {
            setAthlete(data);
        });
    }, []);

    function onEditClick(athlete: IAthlete | null | undefined) {
        if (athlete == null) {
            return;
        }
        setSelectedUser(athlete);
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    return (
        <div className="flex justify-around ">
            <div className="w-2/3 ml-0 mr-0">
                {' '}
                <Card className="h-full w-full ">
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
                            {athlete.map(({ id, name, sex, age, club }) => (
                                <tr key={id} className="even:bg-gray-50 odd:bg-gray-200 hover:bg-gray-400">
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {name}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {sex}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {age}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {club}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                            <ButtonProp onClick={() => onEditClick(athlete.find((athlete) => athlete.id === id))} buttonType="neutral">
                                                Details
                                            </ButtonProp>
                                        </Typography>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <UserModal athlete={selectedUser} open={isModalOpen} onClose={closeModal} />
                </Card>
            </div>
            {/* <div className="w-1/3 ml-0 mr-0">
                <Form />
            </div> */}
        </div>
    );
}
