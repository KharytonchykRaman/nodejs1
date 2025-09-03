function randomNum(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const http = require("http");
//a) Напишите код, который сложит два числа (например, 5 и 7) и выведет результат на консоль.
http.createServer(function(request, response){
    let a = randomNum(1,100);
    let b = randomNum(1,100);
    response.write(`${a}+${b} ${a+b}`);

//b) Напишите код, который умножит два числа (например, 3 и 4) и выведет результат на консоль.

     a = randomNum(1,100);
     b = randomNum(1,100);
    response.write(`${a}*${b} ${a*b}`);

//a) Напишите код, который проверит, является ли число четным. Если число четное, выведите на консоль сообщение "Число четное", иначе выведите "Число нечетное".

    a = randomNum(1,100);
    if(a % 2 === 1){
        response.write(`Число нечетное`);
    }else response.write(`Число четное`);

//b) Напишите код, который проверит, является ли год високосным. Если год високосный, выведите на консоль сообщение "Год високосный", иначе выведите "Год не високосный".

    a = randomNum(1,100);
if(a % 4 === 0){
    response.write(`Год високосный`);
}else response.write(`Год не високосный`);



    response.end();

}).listen(3000);