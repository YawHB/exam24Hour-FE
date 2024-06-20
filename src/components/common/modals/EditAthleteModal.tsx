import React, { useEffect, useState } from 'react';
import { IAthlete, IDiscipline } from '../../../models/athlete';
import { Button, Dialog, Card, CardBody, CardFooter, Typography, Input, Checkbox } from '@material-tailwind/react';
import { getAllDisciplines } from '../../../apiHandlers/get/apiGetAllDisciplines';
import apiUpdateAthlete from '../../../apiHandlers/put/apiUpdateAthlete';

interface DialogWithFormProps {
    open: boolean;
    onClose: () => void;
    athlete: IAthlete | null;
}

export default function EditAthleteModal({ open, onClose, athlete }: DialogWithFormProps) {
    const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([]);
    const [allDisciplines, setAllDisciplines] = useState<IDiscipline[]>([]);

    useEffect(() => {
        getAllDisciplines().then((discipliner) => {
            if (discipliner) {
                setAllDisciplines(discipliner);
            }
        });
    }, []);

    useEffect(() => {
        if (athlete && athlete.disciplines) {
            setSelectedDisciplines(athlete.disciplines.map((discipline) => discipline.name));
        }
    }, [athlete]);

    const handleDisciplinesChange = (disciplineName: string) => {
        setSelectedDisciplines((prevSelectedDisciplines) => {
            if (prevSelectedDisciplines.includes(disciplineName)) {
                // Hvis disciplinen allerede er valgt, fjern den fra valgte discipliner
                return prevSelectedDisciplines.filter((name) => name !== disciplineName);
            } else {
                // Hvis disciplinen ikke er valgt, tilføj den til valgte discipliner
                return [...prevSelectedDisciplines, disciplineName];
            }
        });
        console.log(selectedDisciplines);
    };

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!athlete?.name) {
            console.error('Athlete name is undefined');
            return;
        }
        // Opret et nyt atletobjekt med de opdaterede discipliner
        const updatedDisciplines = selectedDisciplines
            .map((disciplineName) => {
                return allDisciplines.find((discipline) => discipline.name === disciplineName);
            })
            .filter((discipline): discipline is IDiscipline => discipline !== undefined);

        const updatedAthlete: IAthlete = {
            ...athlete,
            disciplines: updatedDisciplines,
        };
        // Log det opdaterede atletobjekt
        console.log(updatedAthlete);
        //? Lav fetch request til API for at opdatere atletten
        apiUpdateAthlete(updatedAthlete);
        onClose();
    }

    return (
        <>
            <Dialog size="xs" open={open} handler={onClose} className="bg-transparent shadow-none h-[42rem] overflow-scroll">
                <Card className="mx-auto w-full max-w-[24rem]">
                    <form onSubmit={handleSubmit}>
                        <CardBody className="flex flex-col gap-4">
                            <Typography variant="h4" color="blue-gray">
                                Rediger Atlet Information
                            </Typography>
                            <Typography className="mb-3 font-normal" variant="paragraph" color="gray">
                                ...
                            </Typography>
                            <Typography className="-mb-2" variant="h6">
                                Navn
                            </Typography>
                            <Input label={athlete?.name} size="lg" disabled crossOrigin="" />
                            <Typography className="-mb-2" variant="h6">
                                Køn
                            </Typography>
                            <Input label={athlete?.sex} size="lg" disabled crossOrigin="" />
                            <Typography className="-mb-2" variant="h6">
                                Alder
                            </Typography>
                            <Input label={athlete?.age?.toString()} size="lg" disabled crossOrigin="" />
                            <Typography className="-mb-2" variant="h6">
                                Klub
                            </Typography>
                            <Input label={athlete?.club} size="lg" disabled crossOrigin="" />
                            <Typography className="-mb-2" variant="h6">
                                Discipliner
                            </Typography>
                            {allDisciplines.map((discipline) => (
                                <Checkbox
                                    crossOrigin=""
                                    key={discipline.id}
                                    color="green"
                                    checked={selectedDisciplines.includes(discipline.name)}
                                    onChange={() => handleDisciplinesChange(discipline.name)}
                                    label={discipline.name}
                                ></Checkbox>
                            ))}
                        </CardBody>
                        <CardFooter className="pt-0">
                            <div className="flex">
                                <Button type="submit" variant="gradient" color="green" fullWidth>
                                    OK
                                </Button>
                                <Button variant="gradient" color="red" onClick={onClose} fullWidth>
                                    Fortryd
                                </Button>
                            </div>
                        </CardFooter>
                    </form>
                </Card>
            </Dialog>
        </>
    );
}
