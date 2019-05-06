'use strict';

/*//null;
undefined;


let person ={

    name: "John",
    age: 25,
    isMarried: false
}

console.log(person.age);

var string = "Number";

console.log(string);
console.log(person.name);*/


//alert("пошел");

//let answer = confirm("are you here?");

//console.log(answer);

//let money = prompt("are you here?", "");

//console.log(money);


// let incr =10,
//     decr =10;

//      console.log(++incr);
//      console.log(--decr);
//     console.log ("2" == 3);


let money = +prompt("Ваш бюджет на месяц?", ''),
     time = prompt("Введите дату в формате YYYY-MM-DD", '');


let appData = {
     budget : money,
     timeData : time,
     expenses : {},
     optionalExpenses: {},
     income: [],
     saving: false
};    


for (let i = 0; i <2; i++) {
    let  a = prompt("Введите обязательную статью расходов в этом месяце", ''),
          b = prompt("Во сколько обойдется?", '');   

     if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
     && a != '' && b != '' && a.length <50) 
     {
               console.log("done");
               appData.expenses [a] = b;
               
          } else {  
               console.log ("вы сделали ошибку, повторите сначала");
                  i++; //если консоль выдает "done" то цикл начинается сначала


          }
           
}


appData.moneyPerDay = appData.budget/30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay <100) {
     console.log ("Минимальный уровень достатка");
} else if (appData.moneyPerDay >100 && appData.moneyPerDay <2000) {
     console.log ("Средний уровень достатка");
} else if (appData.moneyPerDay >2000) {
     console.log ("Высокий уровень достатка");
}










//  let num = 50;

//  switch (num) {
//       case num < 49:
//           console.log("no!");
//           break;
//     case num > 100:
//            console.log("no no!");
//          break;
//     case 50:
//            console.log("yes!");
//            break;
//       default:
//            console.log("no no no");
//            break;

// }



//console.log ( 2 && 1 && null && 0 && undefined);

//alert( "1"[0] )

//alert(0 || "" || 2 || undefined || true || falsе) 

