const arrayOfNumber: Array<number> = [1, 1, 2, 3, 5]
const arrayOfString: Array<string> = [`1`, `1`, `2`, `3`, `5`]

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

console.log(reverse(arrayOfNumber))
console.log(reverse(arrayOfString))

// ----------------------------------------------------------------------

type UserType = {
    firstName: string,
    lastName: string,
    age: number
}

type PhotoType = {
    large: string,
    small: string
}

type ServerResponseType<D> = {
    errorCode: number,
    messages: Array<string>,
    data: D
}

const response1: ServerResponseType<UserType> = {
    errorCode: 1,
    messages: ['1', '2', '3'],
    data: {
        firstName: 'Misha',
        lastName: 'Nefedov',
        age: 24
    }
}

const response2: ServerResponseType<PhotoType> = {
    errorCode: 1,
    messages: ['1', '2', '3'],
    data: {
        large: 'large',
        small: 'small'
    }
}

// ----------------------------------------------------------------------

type Nullable<NT> = null | NT

const initialState = {
    age: 12,
    name: 'Misha',
    user: null as Nullable<UserType>,
    photo: null as Nullable<PhotoType>
}

// Action creators

const AC1 = (age: number) => (
    {
        type: 'SET-AGE',
        age
    } as const)

const AC2 = (firstName: string, lastName: string) => (
    {
        type: 'SET-NAME',
        firstName,
        lastName
    } as const)

type AC1Type = ReturnType<typeof AC1>
type AC2Type = ReturnType<typeof AC2>

const action1: AC1Type = {
    type: 'SET-AGE', // из-за "as const" тип обязательно должны совпадать
    age: 24
}

const action2: AC2Type = {
    type: "SET-NAME", // тут тоже не может быть другого типа
    firstName: 'Misha',
    lastName: 'Nefedov'
}

// Conditional Type - условный тип
// Infer type - подразумевать тип, делать вывод и тд
// extends

