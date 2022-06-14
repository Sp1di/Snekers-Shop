//задание 1 

var arr= ["Москва", "Санкт-Петербург", "Воронеж"];
var arr1 = ["London", "Minsk", "Paris", "Berlin"];



function  Comma(towns) {
    if (Array.isArray(towns)){
    var result = (towns.join(", ")+".");
    return result;
    }
}



console.log(Comma(arr));
console.log(Comma(arr1));

// Задание 2 

var numb1 = 27;
var numb2 = 27.8;
var numb3 =41.7;



function roundNumb(numb) {
    var roundingByFive = numb % 5;
   
    if (roundingByFive === 0) {
        return numb;
    } else if (roundingByFive >= 2.5) {
        return (numb-roundingByFive+5);
    } else {
        if (roundingByFive < 2.5){
        return (numb-roundingByFive)}
    }
    }
  
    console.log(roundNumb(numb1));
    console.log(roundNumb(numb2));
    console.log(roundNumb(numb3));

// Задание 3

var numb1 = 25;
var numb2 = 41;
var numb3 = 1048;
var numb4 = 44;


function landEnd(int) {
    var myNum = String(int);
    var myNumArr = [];
    for (var i = 0; i < myNum.length; i++) {
        myNumArr.push(myNum.charAt(i));
    }
    
    var endPosition = myNumArr[myNumArr.length-1];
    var penultPosition = myNumArr[myNumArr.length-2];
    
    if ((endPosition >=5 && endPosition <= 9) ||  (endPosition === "0") ||
        (endPosition ==1 && penultPosition == 1) ||
        (endPosition >=2 && endPosition <= 4 && penultPosition == 1)
    ){
        console.log (int +" компьютеров");}
        
    if (endPosition == 1 && penultPosition !=1) {
        console.log (int + " компьютер")}
    
    if (endPosition >=2 && endPosition <= 4 && penultPosition != 1) {
        console.log(int + " компьютера")
    }
  
}
landEnd(numb1);
landEnd(numb2);
landEnd(numb3);
landEnd(numb4);

// Задание 4


var numb1 = 2;
var numb2 = 21;
var numb3 = 6;
var numb5 = 7;
var numb4 = 19;





function primeNumber(numb) {
    var count = 0;
    for (var i=2; i<=numb-1; i++){
        
        var divisior = numb % i;
        if (divisior === 0) {
            count = count +1;
        }}
        
        
        if  (count === 0){console.log(numb + " является простым числом")
        } else {
            console.log(numb + " неявляется простым числом")
        }
    
}

primeNumber(numb1);
primeNumber(numb2);
primeNumber(numb3);
primeNumber(numb4);
primeNumber(numb5);
primeNumber(numb6);

// Задание 5

var arrF = [7, 17, 1, 9, 1, 17, 56, 56, 23];
var arrS = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];

  var nums = [];
  for ( var i = 0; i < arrF.length; i++ ){
      if ( arrS.includes(arrF[i]) ){
           nums.push(arrF[i]);
      }
  }

console.log(nums);