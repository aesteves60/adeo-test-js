import { addChildCountToName } from "../helper";
import { Animal, IAnimal } from "./animal";

export interface IPeople {
    name: string;
    animals: IAnimal[];
}

export class People {
    name: string;
    animals: Animal[];

    constructor(data: IPeople) {
        this.name = data.name;
        this.animals = data.animals.map((a) => new Animal(a));
    }

    public hasAnimals(): boolean {
        return !!this.animals.length;
    }

    public toPeopleFilteredByAnimalsName(query: string): People {
        return new People({
            name: this.name,
            animals: this.animals.filter((a) => a.isIncludedName(query)),
        });
    }

    public toPeopleWithCount() {
        return {
            name: addChildCountToName(this.name, this.animals),
            animals: this.animals,
        }
    }
}