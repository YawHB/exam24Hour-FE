import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { useState } from 'react';

export default function Form() {
    const [name, setName] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [club, setClub] = useState('');
    const [disciplines, setDisciplines] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const athlete = {
            name,
            sex,
            age,
            club,
            disciplines: disciplines.split(',').map((discipline) => discipline.trim()),
        };
        console.log(athlete);
    };

    return (
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Opret Ny Atlet
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Intast venligt atletes oplysninger
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Navn
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="Mads Hansen"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                        crossOrigin=""
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Køn
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="M / K"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                        crossOrigin=""
                        value={sex}
                        onChange={(event) => setSex(event.target.value)}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Alder
                    </Typography>
                    <Input
                        type="number"
                        size="lg"
                        placeholder="25"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                        crossOrigin=""
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Klub
                    </Typography>
                    <Input
                        type="text"
                        size="lg"
                        placeholder="klubnavn"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                        crossOrigin=""
                        value={club}
                        onChange={(event) => setClub(event.target.value)}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Discipliner
                    </Typography>
                    <Input
                        type="text"
                        size="lg"
                        placeholder="discipin1, disciplin2... disciplinN"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                        crossOrigin=""
                        value={disciplines}
                        onChange={(event) => setDisciplines(event.target.value)}
                    />
                </div>

                <Button className="mt-6 bg-green-600" fullWidth onClick={handleSubmit}>
                    Opret Atlet
                </Button>
            </form>
        </Card>
    );
}
