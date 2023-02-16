class Typescript {
    version: string;

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}

// =====================================================================================================
// Модификаторы полей: protected, public, private

// Поля с protected доступны внутри своего класса и внутри всех классов, которые наследуются от него
// Поля с private доступны внутри класса, в котором они были определены
// Поля с public доступны везде

class Animal {
    protected voice: string = '';
    public color: string = 'black';
    private size: number = 10;

    constructor(size: number) {
        this.size = size;
    }

    setSize(size: number) {
        this.size = size;
    }

    getSize() {
        return this.size;
    }

    private go(): void {
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}

const animal = new Animal(20);
console.log(animal);

animal.setSize(40);
console.log(animal.getSize());

// =====================================================================================================
// Абстрактные классы

abstract class Component {
     abstract render(): void
     abstract info(): void
}

class AppComponent extends Component {
    render(): void {
        console.log('component render')
    }

    info(): void {
        console.log('component info')
    }
}