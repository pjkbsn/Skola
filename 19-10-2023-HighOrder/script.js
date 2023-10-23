//////Övning 1- FOR-LOOP/////
//Skriv ett program som nedan array returnerar en ny array med de tal som är jämna (använd modulus % operatorn).
//Skriv programmet först med en for-loop och sedan igen där du använder metoden filter(). Använd arrow functions.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = [];

function returnEven(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i])
        }
    }
};
returnEven(numbers);
console.log(evenNumbers);
//////Övning 1- ARROW-FUNCTION/////
let result = numbers.filter((num) => num % 2 === 0)
console.log(result)


//////Övning 2- /////
//Returnera i en ny array alla böcker av författaren Jules Verne från nedanstående array. Använd metoden filter().
let books = [
    { author: 'Oscar Wilde', title: 'The importance of being earnest' },
    { author: 'Lewis Carroll', title: 'Alice in wonderland' },
    { author: 'Jules Verne', title: 'Around the world in eighty days' },
    { author: 'Victor Hugo', title: ' The Hunchback of Notre-Dame' },
]
const result2 = books.filter((book) => book.author == 'Jules Verne');
console.log(result2)

//////Övning 3- /////
//Skriv ett program som summerar ihop allas ålder och returnerar summan. Använd metoden reduce().
let people = [
    { age: 10, name: 'Gun-Britt' },
    { age: 20, name: 'Conny' },
    { age: 30, name: 'Aurora' },
    { age: 40, name: 'Kalle' },
    { age: 55, name: 'Max' },
]


let result3 = people.reduce((accumulator, totalAge) => accumulator + totalAge.age, 0);

console.log(result3);

//////Övning 4- /////
//Skriv ett program som från nedanstående array retunerar det högsta talet, använd reduce().
let number = [2, 3, 1, 5, 4, 10, 8, 7, 9, 6];

let newNumber = number.reduce((accumulator, biggestNum) => Math.max(accumulator, biggestNum));

console.log(newNumber);

//////Övning 5- /////
//Skriv ett program som returnerar alla titlar och skriver sedan ut dessa med console.log. Använd metoden map().
let books2 = [
    { author: 'Oscar Wilde', title: 'The importance of being earnest' },
    { author: 'Lewis Carroll', title: 'Alice in wonderland' },
    { author: 'Jules Verne', title: 'Around the world in eighty days' },
    { author: 'Victor Hugo', title: ' The Hunchback of Notre-Dame' },
]

/* let result4 = books2.map((item) => item.title); */
console.log(books2.map((item) => item.title));

//////Övning 6- /////
//Skriv ett program som kollar om alla är under 40 och returnerar true eller false.

let peoples = [
    { age: 10, name: 'Gun-Britt' },
    { age: 20, name: 'Conny' },
    { age: 30, name: 'Aurora' },
    { age: 40, name: 'Kalle' },
    { age: 55, name: 'Max' },
]

let result5 = peoples.map((underForty) => underForty.age < 40);

//////Övning 7- /////
//Nu ska vi bygga en reseguide! Skapa upp en array som innehåller ett antal land-objekt. Var land-objekt har egenskapen `name` som innehåller namnet på landet och egenskapen `continent` som innehåller vilken kontinent landet ligger i. Alla värdsdelar ska finnas med med minst ett land från varje världsdel.
//Skriv sedan ett program som gör följande:
//1. Skriver ut namnet på alla länder.
//2. Skriver ut namnet på alla kontinenter.
//3. Skriver ut namnet på alla länder i Europa.
//4. Du kan söka efter land eller kontinent och få tillbaka ett resultat av sökningen.

const travelGuide = [
    { name: 'Ghana', continent: 'Afrika' },
    { name: 'Sverige', continent: 'Europa' },
    { name: 'Tyskland', continent: 'Europa' },
    { name: 'Spanien', continent: 'Europa' },
    { name: 'Kina', continent: 'Asien' },
    { name: 'Kanada', continent: 'NordAmerika' },
    { name: 'Argentina', continent: 'SydAmerika' },
    { name: 'Nya Zeeland', continent: 'Oceania' },
]
//1.
let countries = travelGuide.map((country) => country.name);
console.log(countries);
//2.
let continents = travelGuide.map((continent) => continent.continent);
console.log(continents);
//3.
let allOfEurope = travelGuide.filter((europe) => europe.continent == 'Europa').map((europe) => europe.name);
console.log(allOfEurope);
//4.

function searchCountryOrContinent(searchTerm) {
    const results = [];

    for (const item of travelGuide) {
        if (item.name.includes(searchTerm) || item.continent.includes(searchTerm)) {
            results.push(item);
        }
    }

    return results;
}

console.log(searchCountryOrContinent('Amerika'));

//////Övning 8- /////
//Skapa en ny array med endast e-mailen från franska personer. Använd filter och map tillsammans!

let people2 = [
    { email: "Nael.Henry@example.com", "nat": "FR" },
    { email: "Sara.Faure@example.com", "nat": "FR" },
    { email: "Christel.Legrand@example.com", "nat": "CH" },
    { email: "Domenico.Bohner@example.com", "nat": "DE" },
    { email: "Ingebjorg.Rishaug@example.com", "nat": "NO" },
    { email: "Edwin.Hudson@example.com", "nat": "US" },
    { email: "Esma.Yilmazer@example.com", "nat": "TR" },
    { email: "Rasmus.Sakala@example.com", "nat": "FI" },
    { email: "Nuri.Schuldt@example.com", "nat": "DE" },
    { email: "Theo.Giraud@example.com", "nat": "FR" },
    { email: "Jose.Sanchez@example.com", "nat": "GB" },
    { email: "Lynn.Harink@example.com", "nat": "NL" },
    { email: "Layla.Johnson@example.com", "nat": "NZ" },
    { email: "Remi.Arnaud@example.com", "nat": "FR" },
    { email: "Nuno.Brun@example.com", "nat": "CH" },
    { email: "Paula.Patterson@example.com", "nat": "AU" },
    { email: "Encarnacion.Saez@example.com", "nat": "ES" },
    { email: "Jeff.Marshall@example.com", "nat": "IE" },
    { email: "Felecia.Washington@example.com", "nat": "AU" },
    { email: "Marc.Mendez@example.com", "nat": "ES" },
    { email: "Waseem.Snoeck@example.com", "nat": "NL" },
    { email: "Brooklyn.Duncan@example.com", "nat": "US" },
    { email: "Samu.Kangas@example.com", "nat": "FI" },
    { email: "Mathias.Larsen@example.com", "nat": "DK" },
    { email: "Mareike.Bonisch@example.com", "nat": "DE" },
    { email: "Liva.Sorensen@example.com", "nat": "DK" },
    { email: "ysmyn.Hydry@example.com", "nat": "IR" },
    { email: "Adam.Brunet@example.com", "nat": "FR" },
    { email: "Gerald.Graves@example.com", "nat": "US" },
    { email: "Albert.Nieto@example.com", "nat": "ES" },
    { email: "Osman.Lecomte@example.com", "nat": "CH" },
    { email: "Mary.Sims@example.com", "nat": "AU" },
    { email: "Bowe.Meijerink@example.com", "nat": "NL" },
    { email: "Lindaura.Oliveira@example.com", "nat": "BR" },
    { email: "Muhammed.Nordvik@example.com", "nat": "NO" },
    { email: "Maelya.Martinez@example.com", "nat": "FR" },
    { email: "myrHsyn.njty@example.com", "nat": "IR" },
    { email: "Gabe.Mccoy@example.com", "nat": "GB" },
    { email: "Suzanne.Clement@example.com", "nat": "CH" },
    { email: "Samara.Rezende@example.com", "nat": "BR" },
    { email: "Kaja.Kjorstad@example.com", "nat": "NO" },
    { email: "Lucie.Roussel@example.com", "nat": "FR" },
    { email: "Maxime.Brown@example.com", "nat": "CA" },
    { email: "ysmyn.shylyrd@example.com", "nat": "IR" },
    { email: "Yvette.DaSilva@example.com", "nat": "CH" },
    { email: "Kathleen.Lawrence@example.com", "nat": "IE" },
    { email: "Landon.Fox@example.com", "nat": "US" },
    { email: "Maeva.Lecomte@example.com", "nat": "FR" },
    { email: "Carter.Evans@example.com", "nat": "NZ" },
    { email: "Teobaldo.Jesus@example.com", "nat": "BR" },
    { email: "Nanna.Kristensen@example.com", "nat": "DK" },
    { email: "Willow.Taylor@example.com", "nat": "NZ" },
    { email: "Nicolas.Sirko@example.com", "nat": "CA" },
    { email: "Freya.Edwards@example.com", "nat": "NZ" },
    { email: "Martha.Alexander@example.com", "nat": "GB" },
    { email: "Vildan.Candan@example.com", "nat": "TR" },
    { email: "Ivan.Sims@example.com", "nat": "IE" },
    { email: "Elisa.Ehlert@example.com", "nat": "DE" },
    { email: "Enver.Boyer@example.com", "nat": "CH" },
    { email: "Candelaria.Santos@example.com", "nat": "BR" },
    { email: "Murat.Duygulu@example.com", "nat": "TR" },
    { email: "Ayub.Telle@example.com", "nat": "NO" },
    { email: "Onni.Heinonen@example.com", "nat": "FI" },
    { email: "Thorbjorn.Mykland@example.com", "nat": "NO" },
    { email: "Tracy.Bryant@example.com", "nat": "US" },
    { email: "Oscar.Moller@example.com", "nat": "DK" },
    { email: "Sergio.Little@example.com", "nat": "IE" },
    { email: "Kathleen.Jungling@example.com", "nat": "DE" },
    { email: "Marta.Marquez@example.com", "nat": "ES" },
    { email: "Mathias.Nguyen@example.com", "nat": "CH" },
    { email: "Pauline.Gundlach@example.com", "nat": "DE" },
    { email: "Nur.Vervuurt@example.com", "nat": "NL" },
    { email: "Clinton.Cooper@example.com", "nat": "GB" },
    { email: "Hermann.Henry@example.com", "nat": "CH" },
    { email: "artyn.shylyrd@example.com", "nat": "IR" },
    { email: "Deniz.Akgul@example.com", "nat": "TR" },
    { email: "Afsar.Numanoglu@example.com", "nat": "TR" },
    { email: "Lumi.Haataja@example.com", "nat": "FI" },
    { email: "Juan.Lozano@example.com", "nat": "ES" },
    { email: "Fredi.Helfrich@example.com", "nat": "DE" },
    { email: "Afsar.Aybar@example.com", "nat": "TR" },
    { email: "Dino.Schaffler@example.com", "nat": "DE" },
    { email: "Meagan.Epskamp@example.com", "nat": "NL" },
    { email: "Laura.Jensen@example.com", "nat": "DK" },
    { email: "Pinja.Mattila@example.com", "nat": "FI" },
    { email: "Jayden.Ward@example.com", "nat": "IE" },
    { email: "Jacob.Poulsen@example.com", "nat": "DK" },
    { email: "Cathy.Riley@example.com", "nat": "IE" },
    { email: "Susanna.Kyllingstad@example.com", "nat": "NO" },
    { email: "Donna.Fernandez@example.com", "nat": "GB" },
    { email: "Aron.Krogstad@example.com", "nat": "NO" },
    { email: "Stefania.Meyer@example.com", "nat": "CH" },
    { email: "Celestine.Dumas@example.com", "nat": "FR" },
    { email: "Charlie.Denys@example.com", "nat": "CA" },
    { email: "Veli.Klemm@example.com", "nat": "DE" },
    { email: "Alianne.Stroeken@example.com", "nat": "NL" },
    { email: "Davut.Tazegul@example.com", "nat": "TR" },
    { email: "Jens-Peter.Pingel@example.com", "nat": "DE" },
    { email: "Ailo.Sande@example.com", "nat": "NO" },
    { email: "Ted.Lambert@example.com", "nat": "AU" }
]

const frPeople = people2.filter((emailFR) => emailFR.nat == 'FR').map((emailFR) => emailFR.email);

console.log(frPeople);