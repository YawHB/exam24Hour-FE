import { useState } from 'react';
import AthleteGrid from '../components/common/AthleteGrid';
import { getSingleAthleteByName } from '../apiHandlers/get/apiGetSingleAthlete';
import { IAthlete } from '../models/athlete';

export default function AthleteDetailsPage() {
    const [search, setSearch] = useState('');
    const [athlete, setAthlete] = useState<IAthlete | null>(null);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleSearchClick = async () => {
        getSingleAthleteByName(search).then((data) => {
            if (data) {
                setAthlete(data);
            }
        });
    };

    return (
        <>
            <h1 className="text-3xl"> Dette er AthleteDetailsPage🏠</h1>
            <div>
                <input type="text" value={search} onChange={handleSearchChange} placeholder="Search for athlete" />
                <button onClick={handleSearchClick}>Search</button>
                {athlete && <AthleteGrid athlete={athlete} onDelete={() => {}} onEdit={() => {}} />}
            </div>
        </>
    );
}
