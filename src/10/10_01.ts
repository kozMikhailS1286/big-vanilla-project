export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type UserWithSkillsType = UserType & {
    skills: Array<number>
}


type CompanyType = {id: number, title: string}

export type WithCompaniesType = {
    companies: Array<CompanyType>
}



export function makeHairstyle (u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = copy.hair / power
    return copy
}

export function moveUser (u: UserWithLaptopType, city: string) {
   return {
        ...u,
        address: {
            ...u.address,
            city: city}
    }

    // copy.address = {
    //     ...copy.address,
    //     city: city}
}

export function moveUserToOtherHouse (u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house}
    }

    // copy.address = {
    //     ...copy.address,
    //     city: city}
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: string) {
    return {
        ...u,
        books: [...u.books, newBooks]
    }
}


export const updateBook = (u: UserWithLaptopType & UserWithBooksType,
                             oldBook: string,
                             newBook: string) => ({
    ...u,
    books: u.books.map(b => b === oldBook ? newBook : b)
})

export const updateSkills = (u: UserWithLaptopType & UserWithBooksType & UserWithSkillsType,
                       oldSkills: number,
                       newSkills: number) => ({
    ...u,
    skills: u.skills.map(s => s === oldSkills ? newSkills : s)
})


export const removeBook = (u: UserWithLaptopType & UserWithBooksType & UserWithSkillsType,
                             bookForDelete: string) => ({
    ...u,
    books: u.books.filter(b => b !== bookForDelete)
})


export const updateCompanyTitle = (u: WithCompaniesType,
                              companyId: number,
                              newtitle: string) => {
    const copy: WithCompaniesType = {
    ...u,
    companies: u.companies.map(c => c.id === companyId ? {...c, title: newtitle} : c)
    }
    return copy
}


export const updateCompanyTitle2 = (companies: {[key: string]: Array<CompanyType>},
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ?
        {...c, title: newTitle} : c)

    return companyCopy;
}