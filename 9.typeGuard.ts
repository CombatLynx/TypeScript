// type guard - это runtime проверка, которая гарантирует, что значение всегда будет определенного типа
// example 1

function test(value: unknown) {
    if (typeof value === "string") {
        value;
    } else {
        value;
    }
}

// Десериализация
// JSON.parse - для преобразования JSON в объект

// Сериализация объектов в JavaScript это процесс преобразования объектов в строку
// JSON.stringify - для преобразования объекта в JSON

// example 2

const getSaveName = () => {
    const name = localStorage.getItem('name')
    // const name: string | null

    // первое сужение
    if (name === null) {
        return
    }

    name
    // const name: string

    // десериализация
    const parsedName = JSON.parse(name)
    // const parsedName: any

    // второе сужение
    if (typeof parsedName !== 'string') {
        return
    }

    return parsedName
    // const parsedName: string
}

// Встроенные type guard'ы

// 1) type of
// 2) if else c версии ts 4.8
// 3) in operator с версии ts 4.9 (он проверяет что какой-то ключ существует в каком-то объекте)

// Кастомный type guard
// Если функция взвращает true, то переданный аргумент является типом string, иначе нет

function isString(value: unknown): value is string {
    return typeof value === "string"
}

function test(value: unknown) {
    if (isString(value)) {
        value
        // value: string
    } else {
        value
        // value: unknown
    }
}