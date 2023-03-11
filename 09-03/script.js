/******* 3 ********/
function combineStrings() {
    let result = '';
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

console.log(combineStrings('Привет', ' ', 'мир'));
console.log(combineStrings('Сегодня', ' ', 'хороший', ' ', 'день'));
