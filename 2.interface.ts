interface Rect {
    readonly id: string,
    color?: string, // не обязательное поле
    size: {
        width: number,
        height: number
    }
}

const rect: Rect = {
    id: '1',
    size: {
        width: 20,
        height: 30
    }
}

const rect2: Rect = {
    id: '2',
    size: {
        width: 25,
        height: 35
    }
}

rect2.color = 'black'; // rect2 - const, мы в итоге работаем с js, а там если это массив или объект
                       // то мы можем менять их внутреннее состояние, но не можем переприсваивать их
                       // const rectNew = {}
                       // rect2 = rectNew

// rect2.id = '12' нельзя переприсваивать в данном случае, т.к. id - readonly

const rect3 = {} as Rect; // по умолчанию это пустой объект, но мы можем строго привести к типу Rect

// =====================================================================================================

interface RectWithArea extends Rect {
    getArea: () => number;
}

const react4: RectWithArea = {
    id: '3',
    size: {
        width: 20,
        height: 10
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}

console.log(react4.getArea());

// =====================================================================================================

interface IClock {
    date: Date,
    setTime(date: Date): void;
}

class Clock implements IClock {
    date: Date = new Date();
    setTime(date: Date) {
        this.date = date;
    }
}

// =====================================================================================================

// перебор всех данных по ключу, чтобы каждый не писать в interface
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '20px',
    borderRadius: '10px'
}