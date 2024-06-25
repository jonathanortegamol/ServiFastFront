export enum SkillLevel {
    PRINCIPIANTE = 'Principiante',
    INTERMEDIO = 'Intermedio',
    AVANZADO = 'Avanzado'
}

export interface Skill {
    name: string;
    level: SkillLevel;
}