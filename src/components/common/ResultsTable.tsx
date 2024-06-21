import { Card, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import ButtonProp from './Button';
import UserModal from './modals/UserModal';
import { getAllDisciplines } from '../../apiHandlers/get/apiGetAllResults';

const TABLE_HEAD = ['Atlet Navn', 'Køn', 'Alder', 'Klub', 'Resultat Type', 'Dato', 'Resultat Værdi', ''];

export default function ResultsTable() {
    const [results, setResults] = useState<any[]>([]); // replace any with your results type
    const [selectedResult, setSelectedResult] = useState<any | null>(null); // replace any with your results type
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // replace with your function to fetch results
        getAllDisciplines().then((data) => {
            setResults(data);
        });
    }, []);

    function onEditClick(result: any | null | undefined) {
        // replace any with your results type
        if (result == null) {
            return;
        }
        setSelectedResult(result);
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    // Group results by disciplineName
    const groupedResults = results.reduce((groups, result) => {
        const key = result.disciplineName;
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(result);
        return groups;
    }, {});

    return (
        <div className="flex flex-col justify-around ">
            {Object.entries(groupedResults).map(([disciplineName, groupResults]) => (
                <div key={disciplineName} className="w-2/3 ml-0 mr-0">
                    <h2>{disciplineName}</h2>
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
                                {groupResults.map((result, index) => (
                                    <tr key={index}>
                                        <td>{result.athleteName}</td>
                                        <td>{result.athleteSex}</td>
                                        <td>{result.athleteAge}</td>
                                        <td>{result.athleteClub}</td>
                                        <td>{result.resultType}</td>
                                        <td>{result.date}</td>
                                        <td>{result.resultValue}</td>
                                        <td>
                                            <ButtonProp buttonType="neutral" onClick={() => onEditClick(result)} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                </div>
            ))}
            {selectedResult && <UserModal open={isModalOpen} onClose={closeModal} result={selectedResult} />}
        </div>
    );
}
