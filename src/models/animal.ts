export interface IAnimal {
    name: string;
}

export class Animal {
    name: string;

    constructor(data: IAnimal) {
        this.name = data.name;
    }

    public isIncludedName(query: string): boolean {
        return new RegExp(query, 'i').test(this.name);
    }
}