import { BASE_URL } from '../baseUrl';
import { IDiscipline } from '../../models/athlete.ts';

const DISCIPLINES_URL = `${BASE_URL}disciplines`;

export async function getAllDisciplines() {
    try {
        const response = await fetch(DISCIPLINES_URL);

        if (!response.ok) {
            const errorMessage = await response.text();
            console.log(`Error: ${errorMessage}`);
            return;
        }
        const disciplines: IDiscipline[] = await response.json();
        console.log(disciplines);
        return disciplines;
    } catch (error) {
        console.log(`Error: ${error} failed to fetch disciplines`);
    }
}
