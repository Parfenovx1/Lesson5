// 1 ЗАДАНИЕ 1 Способ
var i = 1;
do{
    console.log(i);
    i++;
}
while((i % 2) != 0);

// 1 ЗАДАНИЕ 2 Способ
var i = 1;
while((i % 2) != 0){
    console.log(i);
    i++;
}


// 2 ЗАДАНИЕ
var input = prompt("Введите число:");
var quantity = prompt("Введите количество чисел:");
var min = 1;
var max = 1000000;
var current = 1;
for(var i = min; i <= max; i++){
    if(input % i == 0){
        if(current++ <= quantity){
                console.log(i);
        }else{
            break;
        }
}}


// 3 ЗАДАНИЕ
var number1 = Number(Math.ceil(Math.random() * 10));
var user;

while(user !== number1)
{
    user = prompt("Угадайте число от 1 до 10");
    if(user == number1)
    {
        console.clear();
        console.log("Правильно!")
        break;
    }
    if(user === null)
    {
        console.clear();
        console.log("Вы отменили игру");
        break;
    }
    console.log("Попробуйте еще раз");

}
