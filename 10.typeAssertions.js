//
// Проблема
function assertString(value) {
    if (typeof value !== 'string') {
        throw new Error('value must be string');
    }
}
function connectToDb(value) {
    assertString(value);
    console.log(typeof value);
    // value: unknown
}
connectToDb('');
// Решение
function assertString2(value) {
    if (typeof value !== 'string') {
        throw new Error('value must be string');
    }
}
function connectToDb2(value) {
    assertString2(value);
    value;
    // value: unknown
}
