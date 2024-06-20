import { BASE_URL } from '../baseUrl';
import { IAthlete } from '../../models/athlete.ts';

const ATHLETES_URL = `${BASE_URL}athletes`;

export async function createAthlete(athlete: IAthlete) {
    try {
        const response = await fetch(ATHLETES_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(athlete),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            console.log(`Error: ${errorMessage}`);
            return;
        }
        const createdAthlete: IAthlete = await response.json();
        console.log(createdAthlete);
        return createdAthlete;
    } catch (error) {
        console.log(`Error: ${error} failed to create athlete`);
    }
}
