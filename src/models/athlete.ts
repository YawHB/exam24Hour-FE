export interface IDiscipline {
    id?: number;
    name: string;
    resultType: 'DISTANCE' | 'TIME' | 'POINTS';
}

export interface IAthlete {
    id?: number;
    name: string;
    sex: string;
    age: number;
    club: string;
    disciplines?: IDiscipline[];
}
