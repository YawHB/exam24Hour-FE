import { BASE_URL } from '../baseUrl';
import { IAthlete } from '../../models/athlete';

const ATHLETES_URL = `${BASE_URL}athletes`;

export default async function apiDeleteAthlete(athlete: IAthlete) {
    //TODO implement handling of none existing athlete
    try {
        const response = await fetch(`${ATHLETES_URL}/${athlete.id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            const errorMessage = await response.text();
            console.log(`Error: ${errorMessage}`);
            return;
        }
    } catch (error) {
        console.log(`Error: ${error} failed to delete athlete`);
    }
}
