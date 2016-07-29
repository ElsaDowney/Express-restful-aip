var express = require('express');
const request = require('request');

console.log('Welcome!\n');

const Answer = {
    baseUrl: 'http://localhost:3000',
    url: '/',
    method: 'GET',
    json: true
};

function value(input) {
    return input.split('').every((digit, index, array) => {
        return array.lastIndexOf(digit) === index;
    });
}

request(Answer, (err, res, body) => {
    const answer = body;
    // console.log(answer);
    var count = 10;
    console.log(`Please input your number(${count}):`);
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (input) => {
        if (!(value(input.trim()))) {
            console.log('Cannot input duplicate numbers!');
            console.log(`Please input your number(${count}):`);
        }
        else {
            const compare = {
                baseUrl: 'http://localhost:3000',
                url: '/',
                method: 'POST',
                json: true,
                body: {
                    answer: answer,
                    input: input
                }
            }
            request(compare, (err, res, body)=> {
                if (body === '4A0B') {
                    console.log('Congratulations!');
                    process.exit();
                } else {
                    console.log(body);
                    count--;
                    if (count === 0) {
                        console.log('Game Over\n');
                        console.log(`Answer:${answer}`);
                        process.exit();
                    } else {
                        console.log(`Please input your number(${count}):`);
                    }
                }

            });
        }
    });
});


