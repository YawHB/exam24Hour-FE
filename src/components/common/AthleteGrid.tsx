import ButtonProp from './Button';
import { IAthlete, IDiscipline } from '../../models/athlete';

interface AthleteGridProps {
    athlete: IAthlete;
    onDelete: (athlete: IAthlete) => void;
    onEdit: (athlete: IAthlete) => void;
}

export default function AthleteGrid({ athlete, onDelete, onEdit }: AthleteGridProps) {
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
                    <div>{athlete.disciplines ? athlete.disciplines.map((discipline) => discipline.name).join(', ') : ''}</div>{' '}
                </div>
                <div>
                    <ButtonProp buttonType="cancel" onClick={() => onDelete(athlete)}>
                        Delete
                    </ButtonProp>
                    <ButtonProp buttonType="neutral" onClick={() => onEdit(athlete)}>
                        Edit
                    </ButtonProp>
                </div>
            </div>
        </div>
    );
}
