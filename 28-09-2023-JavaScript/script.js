/* 
//Declaration, assignment
let myName = "Philip";
console.log("namn: ", myName);
const age = 30;

// Vad är en vilkorssats?

if (myName === "Philip") {
    console.log("javisst");
} else {
    console.log("nej");
}


if (age < 30) {
    console.log("ung")
} else if (age > 35 && age < 36) {
    console.log("rätt ålder")
} else {
    console.log("fel ålder");
} */

///////////////////////////////////////////////////////////////////

/* const animal = "CAT";

switch (animal) {
    case "DOG":
        console.log("Voff")
        break;
    case "CAT":
        console.log("Mjau")
        break;
    case "FOX":
        console.log("mee")
        break;
    default:
        console.log("Muu");
} */

///bigger//////////////////////////////////////////////////////////

/* let a = 10;
let b = 20;

if (a > b) {
    console.log("A är större än B")
} else {
    console.log("B är större än A")
}
 */
////equals or not///////////////////////////////////////////////////////

/* let c = 'apple';
let d = 'pear';

if (c === d) {
    console.log("C är lika med D")
} else {
    console.log("C är inte lika med D")
} */

///Biggest //////////////////////////////////////////////////////
/* 
let e = 40;
let f = 50;
if (e > f) {
    console.log(e)
} else if (f > e) {
    console.log(f)
} */

//Even or not////////////////////////////////////////////////////////

/* let g = 14;

//modulus kollar om det blir något restvärde från det insatta talet
if (g % 2 == 0) {
    console.log("Talet är jämt")
} else {
    console.log("Talet är udda")
} */

//////////////////////////////////////////////////////////////Lisebergsvakten

/* const h = prompt("Ange längd i cm: ")

if (h > 149) {
    console.log("Du får åka Helix!")
} else {
    console.log("Du får inte åka Helix!")
} */

/////////////////////////////////////////////////////////////Lisebergsvakten2

/* const answer = prompt("Vilket åkband har du? Small, medium, large eller platinum?")

if (answer == "small" || answer == "medium") {
    console.log("Du får inte åka")
}
else if (answer == "large" || answer == "platinum") {
    console.log("Du får åka!")
} else {
    console.log("Du kan enbart skriva small, medium, large eller platinum")
} */


/////////////////
/* console.log("1.01", typeof 1.01)
console.log("false", typeof false) */

//BMI kalkylator BMI ( Body Mass Index )

/* let weight = prompt("Ange din vikt: ")
let height = prompt("Ange din längd i m: ")

let total = weight / (height * height);

if (total < 18.5) {
    console.log(`Din bmi är ${total} och klassas som undervikt`)
}
else if (total >= 18.5 && total < 25) {
    console.log(`Din bmi är ${total} och klassas som normalvikt`)
}
if (total >= 25 && total < 30) {
    console.log(`Din bmi är ${total} och klassas som övervikt`)
}
if (total >= 30) {
    console.log(`Din bmi är ${total} och klassas som fetma`)
} */


//Weekdays///////////////////////////////////////////////

/* const weekday = 5;

switch (weekday) {
    case 1:
        console.log("Måndag");
        break;
    case 2:
        console.log("Tisdag");
        break;
    case 3:
        console.log("Onsdag");
        break;
    case 4:
        console.log("Torsdag");
        break;
    case 5:
        console.log("Fredag");
        break;
    case 6:
        console.log("Lördag");
        break;
    case 7:
        console.log("Söndag");
        break;
    default:
        console.log("Fel värde inmatat")

} */


////////////////////////////////////////

/* let date = "2019-02-24";
let date2 = "2018-01-01"

function getYearFromDate(kalleAnka) {
    const yearsFromString = kalleAnka.substr(0, 4);
    console.log(yearsFromString)
    return "hela året" + yearsFromString;
}

console.log(getYearFromDate(date2))

//Arrow function
const names = (namesss) => {
    const newBiggerNumber = namesss.toUpperCase();
    return newBiggerNumber;
};

console.log(names("lilla fågel blå"));


const myList = ["kalle", "hobbe", "anka", "nisse"];

const listan = myList.map((list) => {
    return list.toUpperCase();
});

console.log(listan);
 */

////////////////////////////////////////////////////////////////

/* let word = "Cello"

console.log(word.length) */





const word = "Cello";

const counter = (myWord) => {
    return myWord.length;
};

console.log(counter(word));