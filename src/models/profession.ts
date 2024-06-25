export enum Type {
    PROFESSION = 'Profesión',
    JOB = 'Oficio'
}

export interface Profession {
    id: string;
    name: string;
    description: string;
    type: Type;
}