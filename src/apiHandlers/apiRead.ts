import { BASE_URL } from './baseUrl';

const USERS_URL = `${BASE_URL}users`;
console.log(USERS_URL);

export async function getUsers() {
    return (await fetch(USERS_URL)).json();
}