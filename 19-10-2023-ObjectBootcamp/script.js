//1. Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är `title`, `author`, `numPages`.

const books = {
    title: 'Harry Potter', author: 'J.K Rowling', numPages: 327,
}

//2. Skapa en array av objekt med flera stycken böcker

const multipleBooks = [
    { title: 'Harry Potter', author: 'J.K Rowling', numPages: 327 },
    { title: 'Dijon', author: 'Senap', numPages: 52 },
    { title: 'Ketchup', author: 'Korv', numPages: 102 },
    { title: 'Mayo', author: 'Korv', numPages: 521 },
    { title: 'Goblin', author: 'J.K Rowling', numPages: 5 },
    { title: 'Counter-Strike', author: 'Gaben', numPages: 1524 },
]

//3. Skapa en funktion som söker efter en titel i arrayen, om den hittar en så returneras objektet annars `null`. Låt funktionen ta emot arrayen med bok-objekt och söktermen som parametrar.

function searchTitle(array, searchWord) {
    const myBooks = array.filter((book) => book.title == searchWord);
    return myBooks;
}

console.log(searchTitle(multipleBooks, 'Dijon'));

//## Letter Frequency
//Räkna tecken i en sträng och organisera detta i ett objekt.
//Skapa en funktion som tar en sträng som input och ger ett objekt som output.
//Varje tecken är sin egna nyckel i objektet och värdet på nyckeln är antalet av det tecknet. Dvs, för varje tecken ska det finnas en nyckel i objektet och värdet på den nyckeln ska vara antal förekomster av det tecknet.
//Denna övning kräver dynamiska nycklar.
//letterFrequency("kalle") // => {"k": 1. "a": 1, "l": 2, "e": 1}
//letterFrequency("aaaa") // => {"a": 4}
//letterFrequency("ni talar bra latin") // => {"n": 2, "i":2, " ":3, "t":2, "a":4,"l": 2,"r":2", "b":1 }

function letterFrequency(input) {
    const letter = {};
    let templete = '';
    for (let i = 0; i < input.length; i++) {
        templete = input[i];
        if (letter[templete]) {
            letter[templete]++;
        }
        if (!letter[templete]) {
            letter[templete] = 1;
        }
    }
    return letter;
}

console.log(letterFrequency('kalle'))


//## User Register
//För samtliga uppgifter nedan, ladda ner och utgå från users.js genom att lägga till 
//`<script src="users.js">` innan er script-tag. Då har du en global variabel `users` som innehåller alla användare.

//### filterByCountry
//Skapa en funktion som tar emot listan på användare och en landskod och returnerar en ny lista innehållande endast användare med den landskoden.


const specificCountry = users.filter((filterByNat) => filterByNat.nat == 'DE');
console.log(specificCountry);


//### filterByGender

//Skapa en funktion som tar emot listan på användare och en sträng "Male" eller "Female" och returnerar en ny lista innehållande endast kvinnliga eller manliga användare.


function femaleOrMale(listOfUsers, mrOrMs) {
    const maleUsers = [];
    const femaleUsers = [];
    for (let i = 0; i < listOfUsers.length; i++) {
        switch (listOfUsers[i].name.title) {
            case 'Ms':
            case 'Mrs':
            case 'Miss':
            case 'Madame':
            case 'Mademoiselle':
                femaleUsers.push(listOfUsers[i]);
                break;
            case 'Mr':
            case 'Monsieur':
                maleUsers.push(listOfUsers[i]);
                break;
        }
    }

    if (mrOrMs === 'Male') {
        return maleUsers;
    } else if (mrOrMs === 'Female') {
        return femaleUsers;
    }

}

console.log(femaleOrMale(users, 'Male'));

/* function femaleOrMale(listOfUsers, mrOrMs) {
    const maleUsers = [];
    const femaleUsers = [];
    for (let i = 0; i < listOfUsers.length; i++) {
        if (listOfUsers[i].name.title === 'Mr' && mrOrMs === 'Male') {
            maleUsers.push(listOfUsers[i]);
        } else if (listOfUsers[i].name.title === 'Ms' && mrOrMs === 'Female') {
            femaleUsers.push(listOfUsers[i]);
        }
    }

    if (mrOrMs === 'Male') {
        return maleUsers;
    } else if (mrOrMs === 'Female') {
        return femaleUsers;
    }

}

console.log(femaleOrMale(users, 'Female')); */


//### listEmails

//Skapa en funktion som tar emot listan på användare och returnerar en lista innehållandes endast användarnas emailaddresser


const onlyEmail = users.filter((userEmail) => userEmail.email).map((userEmail) => userEmail.email);
console.log(onlyEmail)



//### Utmaning! - Reformat Emails
//Chefen på bolaget vill att alla användare ska få nya e-mailaddresser.
//Just nu följer deras e-mail formatet `förnamn.efternamn@example.com` 
//men chefen vill att de ska följa formatet `efternamn.förnamn@evilcorp.countrydomain`.
//
//Skapa en funktion som listar alla e-mail-adresser enligt det nya formatet.
//
//| Land | Nat | Domän |
//| ---- | ---- | ---- |
//| Frankrike | FR | .fr |
//| Schweiz | CH | .ch |
//| Tyskland | DE | .de |
//| Norge | NO | .no |
//| USA | US | .us |
//| Turkiet | TR | .tr |
//| Findland | FI | .fi |
//| Storbritannien | GB | .uk |
//| Nederländerna | NL | .nl |
//| Nya Zeeland | NZ | .nz |
//| Australien | AU | .au |
//| Estland | ES | .ee |
//| Irland | IE | .ie |
//| Danmark | DK | .dk |
//| Iran | IR | .ir |
//| Brasilien | BR | .br |
//| Kanada | CA | .ca |


//----Sortera in folk efter land?
//----Söka igenom listan för alla email adresser
//----Sortera email-adresserna
//----strukturera om dem
//----lägga till evilcorp.countrydomain
//----
//----



function addCountryDomain(userList) {
    for (let i = 0; i < userList.length; i++) {
        switch (userList[i].nat) {
            case 'FR':
                userList[i].domain = '.fr'
                break;
            case 'CH':
                userList[i].domain = '.ch'
                break;
            case 'DE':
                userList[i].domain = '.de'
                break;
            case 'NO':
                userList[i].domain = '.no'
                break;
            case 'US':
                userList[i].domain = '.us'
                break;
            case 'TR':
                userList[i].domain = '.tr'
                break;
            case 'FI':
                userList[i].domain = '.fi'
                break;
            case 'GB':
                userList[i].domain = '.uk'
                break;
            case 'NL':
                userList[i].domain = '.nl'
                break;
            case 'NZ':
                userList[i].domain = '.nz'
                break;
            case 'AU':
                userList[i].domain = '.au'
                break;
            case 'ES':
                userList[i].domain = '.ee'
                break;
            case 'IE':
                userList[i].domain = '.ie'
                break;
            case 'DK':
                userList[i].domain = '.dk'
                break;
            case 'IR':
                userList[i].domain = '.ir'
                break;
            case 'BR':
                userList[i].domain = '.br'
                break;
            case 'CA':
                userList[i].domain = '.ca'
                break;
        }


        /*  const user = userList[i] */

        const firstName = userList[i].name.first;
        const lastName = userList[i].name.last;
        const domain = userList[i].domain

        const newEmail = `${lastName}.${firstName}@evilcorp${domain}`

        userList[i].email = newEmail;
    }


    return userList;
}

console.log(addCountryDomain(users))









