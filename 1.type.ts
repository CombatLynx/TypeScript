const isFetching: boolean = true;
const isLoading: boolean = false;

let int: number = 42;
int = 21;

const float: number = 12.2;

const message: string = 'Hello my friend';

const numberArray: number[] = [1, 2, 3];
const numberArray2: Array<number> = [1, 2, 3];

const words: string[] = ['1', '2', '3'];
const words2: Array<string> = ['1', '2', '3'];

//Tuple
const contact: [number, string] = [12, 'Misha'];

//Any
let data: any = 42;
data = 'Misha';

// Функция ничего не возвращает
function sayHello(str: string): void {
    console.log(str);
}

sayHello('Hello');

//Never
// 1) Функция вовзвращает нам ошибку и никогда не заканчивает свое выполнение
function throwError(message: string): never {
    throw new Error(message);
}

// 2) Функция постоянно что-либо делает
function infinite(): never {
    while (true) {

    }
}

//Type custom
type Login = string;
const login: Login = 'Misha';

type ID = string | number;
const id1: ID = 123;
const id2: ID = '123';

type SomeType = number | null | undefined;
const someElem: SomeType = undefined;