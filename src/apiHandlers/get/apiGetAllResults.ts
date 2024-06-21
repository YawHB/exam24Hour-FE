import { BASE_URL } from '../baseUrl';
//import { IDiscipline } from '../../models/athlete.ts';

const RESULTS_URL = `${BASE_URL}results`;

export async function getAllDisciplines() {
    try {
        const response = await fetch(RESULTS_URL);

        if (!response.ok) {
            const errorMessage = await response.text();
            console.log(`Error: ${errorMessage}`);
            return;
        }
        const results: any = await response.json();
        console.log(results);
        return results;
    } catch (error) {
        console.log(`Error: ${error} failed to fetch disciplines`);
    }
}
