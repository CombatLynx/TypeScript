// 1. Object - используется для описания прототипа Object.prototype. Также в него можно присвоить все, кроме undefined и null

Object.prototype
// ObjectConstructor.prototype: Object

let a: Object = 'asdasd'
a = 124
a = []
a = {}
a = () => {}

// не будут работать
a = null
a = undefined

// 2. object - представляет любой непримитивный тип
let b: object = {}
b = () => {}
b = []

// не будут работать
b = 1
b = 'sadas'
b = null
b = undefined

// 3. {} - представляет из себя любое значение, отличающиеся от null и undefined
let c: {} = {}
c = []
c = () => {}

c = 'asd'
c = 123
c = false

// не будет работать
c = null
c = undefined

// 4. Record<string, unknown> - представляет объект, который имеет строки в качестве ключей(индексов)
let d: Record<string, unknown> = {}

d.foo
// будет unknown, т.к по такому ключу у нас нет объекта

d = () => {}
d = [1, 2, 3]

d = 1
d = 'sad'
d = true

d = null
d = undefined

// Вывод

// Record<string, unknown> - нужно использовать всегда, когда мы ожидаем настоящий объект

// Object - никогда не используйте этот тип!

// {} - никогда не используйте этот тип!

// object - может быть полезно если мы хотим принимать любые непримитивные значения.
// Рекомендуется использовать только тогда, когда без него не обойтись.