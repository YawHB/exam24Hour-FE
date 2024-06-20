import ButtonProp from './Button';
import { IAthlete } from '../../models/athlete';
import EditAthleteModal from './modals/EditAthleteModal';
import { useState } from 'react';
import apiDeleteAthlete from '../../apiHandlers/delete/apiDeleteAthlete';

interface AthleteGridProps {
    athlete: IAthlete;
    onDelete: (athlete: IAthlete) => void;
    onEdit: (athlete: IAthlete) => void;
}

export default function AthleteGrid({ athlete, onDelete, onEdit }: AthleteGridProps) {
    const [open, setOpen] = useState(false);
    const [selectedAthlete, setSelectedAthlete] = useState<IAthlete | null>(null);

    const handleOpen = (athlete: IAthlete) => {
        setSelectedAthlete(athlete);
        setOpen(true);
    };

    const handleClose = () => {
        setSelectedAthlete(null);
        setOpen(false);
    };

    function handleDelete(athlete: IAthlete) {
        console.log(athlete);
        apiDeleteAthlete(athlete);
    }

    return (
        <div>
            <h1>Athlete Grid</h1>
            <div className="grid grid-cols-6 gap-4 mb-4">
                <div>
                    <p>Navn</p>
                    <div>{athlete.name}</div>
                </div>
                <div>
                    <p>Køn</p>
                    <div>{athlete.sex}</div>
                </div>
                <div>
                    <p>Alder</p>
                    <div>{athlete.age}</div>
                </div>
                <div>
                    <p>Klub</p>
                    <div>{athlete.club}</div>
                </div>
                <div>
                    <p>Discipliner</p>
                    <div>{athlete.disciplines ? athlete.disciplines.map((discipline) => discipline.name).join(', ') : ''}</div>
                </div>
                <div>
                    <ButtonProp buttonType="cancel" onClick={() => handleDelete(athlete)}>
                        Delete
                    </ButtonProp>
                    <ButtonProp
                        buttonType="neutral"
                        onClick={() => {
                            onEdit(athlete);
                            handleOpen(athlete);
                        }}
                    >
                        Edit
                    </ButtonProp>
                    {open && <EditAthleteModal open={open} onClose={handleClose} athlete={selectedAthlete} />}
                </div>
            </div>
        </div>
    );
}
