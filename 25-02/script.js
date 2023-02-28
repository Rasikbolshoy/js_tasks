/******* 1 ******/
function createDelayedMessage(delay, message) {
    return function() {
        setTimeout(function() {
            console.log(message);
        }, delay);
    };
}

const delayedMessage1 = createDelayedMessage(4000, 'Hello after 4 seconds');
const delayedMessage2 = createDelayedMessage(8000, 'Hello after 8 seconds');

setTimeout(delayedMessage1, 4000); // выведет "Hello after 4 seconds" через 4 секунды
setTimeout(delayedMessage2, 8000); // выведет "Hello after 8 seconds" через 8 секунд
