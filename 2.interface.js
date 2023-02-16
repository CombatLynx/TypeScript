var rect = {
    id: '1',
    size: {
        width: 20,
        height: 30
    }
};
var rect2 = {
    id: '2',
    size: {
        width: 25,
        height: 35
    }
};
rect2.color = 'black'; // rect2 - const, мы в итоге работаем с js, а там если это массив или объект
// то мы можем менять их внутреннее состояние, но не можем переприсваивать их
// const rectNew = {}
// rect2 = rectNew
// rect2.id = '12' нельзя переприсваивать в данном случае, т.к. id - readonly
var rect3 = {}; // по умолчанию это пустой объект, но мы можем строго привести к типу Rect
var react4 = {
    id: '3',
    size: {
        width: 20,
        height: 10
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
console.log(react4.getArea());
