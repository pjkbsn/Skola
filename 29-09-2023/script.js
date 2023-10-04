
//1: skriv en funktion som returnerar en rektangels area:

function rectangleArea(width, height) {
    let area = width * height
    return area
}

let area = rectangleArea(100, 200)
console.log(`Arean för rektangeln är: ` + area)



//2: skriv en funktion som kontrollerar om en sträng är tom:

// function checkIfStringEmpty <- första försöket till namn
function stringIsEmpty(string) {
    if (string.length === 0) {
        return true
    } else {
        return false
    }
    //Alternativa if-satser:
    //if(!string)
    //if(string === '')


    //Extra utmaning: man behöver inte använda en if-sats...
}
// const string1 <- första försöket till namn, men det är för generellt
const isEmpty1 = stringIsEmpty('');
console.log(`Är sträng 1 tom?` + isEmpty1)


const isEmpty2 = stringIsEmpty('hej');
console.log(`Är sträng 2 tom?` + isEmpty2)


//falsy 0, '', null, undefined


//3: skriv en funktion som kontrollerar om ett nummer är positivt eller negativt:

//MIN LÖSNING//
function numPosOrNeg(number1) {
    let num = Math.sign(number1);
    if (num >= 0) {
        return console.log("Ditt nummer är: positivt")
    } else {
        return console.log("Ditt nummer är: negativt")
    }
}

let num = numPosOrNeg(22)

//DAVIDS GENOMGÅNG//
//alternativt namn: checkIfPositiveOrNegative
function checkIfNumberIsPositive(number) {
    if (number > 0) {
        console.log(`Talet ${number} är positivt`)
    }
    else if (number < 0) {
        console.log(`Talet ${number} är negativt`)
    }
    else {
        console.log('Talet 0 är varken positivt eller negativt')
    }
}

checkIfNumberIsPositive(500);
checkIfNumberIsPositive(-2);
checkIfNumberIsPositive(0);


// Returnerar true om parametern är ett positivt tal. Se upp med nollan!
function numberIsPositive(number5) {
    if (number5 > 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

numberIsPositive(20);


//4: Skriv en funktion som räknar ut fakulteten :
//En factorial är en matematisk operation där du multiplicerar det givna talet med alla positiva heltal mindre än det.
//Rekursion: en funktion som anropar sig själv
// -basfall (enklast möjliga)
// - rekursionsfall ()

/* Mitt försök */
/* function multiply(factorialize) {
    if (factorialize < 0)
        return -1;
    else if (factorialize == 0)
        return 1;
    else {
        return (factorialize * multiply(factorialize - 1));
    }

}
*/

/* Davids genomgång */

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    else if (n === 2) {
        return 2
    } else {
        return n * factorial(n - 1)
    }
}

console.log('2! == ', factorial(2))
console.log('3! == ', factorial(3))
console.log('4! == ', factorial(4))




//5: Biggest
//Gör ett program som tar emot tre stycken numeriska värden. Programmet ska utvärdera vilket tal som är störst och skriva ut det.

function biggestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(`Största numret är nr.1: ${num1}`)
    } else if (num2 > num1 && num2 > num3) {
        console.log(`Största numret är nr.2: ${num2}`)
    } else {
        console.log(`Största numret är nr.3: ${num3}`)
    }
}
biggestNumber(200, 500, 100);


//6: kolla om en sträng Inkluderar ett visst ord 
//Gör ett program som tar en mening som argument och kollar om den innehåller

function doesWordExist(text) {
    if (text.includes("javaScript")) {
        return true
    } else {
        return false
    }
}

console.log(doesWordExist("Hej, jag har precis börjat läsa om javaScript"))


//7: Temperatur
//Gör ett program som konverterar Celsius till Fahrenheit


function celsiusToFahrenheit(temp) {
    const fahrenheit = (temp * 9 / 5) + 32;
    return fahrenheit
}

console.log(celsiusToFahrenheit(24))

//8: skriv en funktion som gör en grundläggande miniräknare av de 4 räknesätten:


let plus = 10;
let ganger = 20;
let minus = 30;
let delat = 40;

function calculator(calc) {
    if (calc === "+") {
        return plus + plus;
    } else if (calc === "-") {
        return plus - minus;
    } else if (calc === "/") {
        return delat / plus
    } else if (calc === "*") {
        return plus * minus
    } else {
        console.log("Fel inmatning")
    }
}

console.log(calculator("/"))


function checkIfPallidrom(word){
    
}