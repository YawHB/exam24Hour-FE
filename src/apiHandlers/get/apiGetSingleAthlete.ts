import { BASE_URL } from '../baseUrl';
import { IAthlete } from '../../models/athlete';

const ATHLETES_URL = `${BASE_URL}athletes/name`;

export async function getSingleAthleteByName(name: string) {
    try {
        const response = await fetch(`${ATHLETES_URL}/${name}`);

        if (!response.ok) {
            const errorMessage = await response.text();
            console.log(`Error: ${errorMessage}`);
            return;
        }
        const athlete: IAthlete = await response.json();
        console.log(athlete);
        return athlete;
    } catch (error) {
        console.log(`Error: ${error} failed to fetch athlete`);
    }
}
