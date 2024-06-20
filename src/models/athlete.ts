export interface IDiscipline {
    id?: number;
    name: string;
}

export interface IAthlete {
    id?: number;
    name: string;
    sex: string;
    age: number;
    club: string;
    disciplines?: IDiscipline[];
}
