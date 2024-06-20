import { BASE_URL } from '../baseUrl';
import { IAthlete } from '../../models/athlete';

const ATHLETES_URL = `${BASE_URL}athletes`;

export default async function apiUpdateAthlete(updatedAthlete: IAthlete) {
    try {
        const response = await fetch(`${ATHLETES_URL}/${updatedAthlete.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedAthlete),
        });
        if (!response.ok) {
            const errorMessage = await response.text();
            console.log(`Error: ${errorMessage}`);
            return;
        }
    } catch (error) {
        console.log(`Error: ${error} failed to update athlete`);
    }
}
