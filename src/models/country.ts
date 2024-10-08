import { IPeople, People } from "./people";
import { addChildCountToName } from "../helper";

export interface ICountry {
    name: string;
    people: IPeople[];
}

export class Country {
    name: string;
    people: People[];

    constructor(data: ICountry) {
        this.name = data.name;
        this.people = data.people.map((p) => new People(p))
    }

    public hasPeople(): boolean {
        return !!this.people.length;
    }

    public toCountryFiltered(query: string): Country {
        return new Country({
            name: this.name,
            people: this.people
                .map((p) => p.toPeopleFilteredByAnimalsName(query))
                .filter((p) => p.hasAnimals()),
        })
    }

    public toCountryWithCount() {
        return {
            name: addChildCountToName(this.name, this.people),
            people: this.people.map((p) => p.toPeopleWithCount())
        }
    }
} 