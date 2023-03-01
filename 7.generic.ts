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

// Infer type - подразумевать тип, делать вывод и тд

type Nullable<NT> = null | NT

const initialState = {
    age: 12,
    name: 'Misha',
    user: null as Nullable<UserType>,
    photo: null as Nullable<PhotoType>
}