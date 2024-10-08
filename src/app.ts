import { data as rawData } from './data';
import { Country } from './models/country';

const FILTER_ARG = '--filter=';
const COUNT_ARG = '--count';

function getFilter(): string {
    return process.argv.find((val) => val.startsWith(FILTER_ARG))?.replace(FILTER_ARG, '') ?? '';
}

function getData(): Country[] {
    return rawData.map((c) => new Country(c))
}

function hasCountArgv(): boolean {
    return process.argv.includes(COUNT_ARG);
}

function getFilteredData(data: Country[], filter: string) {    
    return data
        .map(country => country.toCountryFiltered(filter))
        .filter((c) => c.hasPeople());
}

function getDataWithCount(data: Country[]) {
    if (!hasCountArgv()) {
        return data;
    }

    return data.map(country => country.toCountryWithCount());
}

const data = getData();
const filter = getFilter();
console.dir(getFilteredData(data, filter), { depth: 5 });
console.dir(getDataWithCount(data), { depth: 5 });

export {
    FILTER_ARG,
    COUNT_ARG,
    getData,
    getDataWithCount,
    getFilter,
    getFilteredData,
    hasCountArgv,
}