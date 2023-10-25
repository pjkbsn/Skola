//# API Bootcamp
//## Övning 1:
//1. Hämta alla pokemons genom en fetch mot API'et

let url = "https://majazocom.github.io/Data/pokemons.json";



/* function fetchPokemonData(pokemon) {
    fetch(pokemon).then((response) => response.json())
        .then(data => console.log(data))
}

fetchPokemonData(url); */

//2. Rendera ut objekten en och en ut i konsollen

/* function fetchPokemonData(pokemon) {
    fetch(pokemon).then((response) => response.json())
        .then(data => console.log(data[0]))
}

fetchPokemonData(url) */


//3. Rendera ut objektens namn i DOM'en istället så de blir synliga för en användare

/* function fetchPokemonData(adress) {

    const nameList = document.querySelector(`#output`);

    fetch(adress).then((response) => response.json())
        .then(data => {
            data.map((pokemon) => {
                const listItem = document.createElement(`li`);
                listItem.textContent = pokemon.name;
                nameList.appendChild(listItem);

            });
        })

}

fetchPokemonData(url); */

//## Övning 2: 
//1. Hämta alla hundar genom en fetch mot API'et

let url2 = "https://majazocom.github.io/Data/dogs.json"

/* function fetchDogs(adress) {
    fetch(adress).then((response) => response.json())
        .then((data) => console.log(data))
}

fetchDogs(url2) */


//2. Rendera ut NAMNEN en och en ut i konsollen

/* function fetchDogs(adress) {
    fetch(adress).then(response => response.json())
        .then(data => {
            data.map((dogs) => console.log(dogs.name))

        });
}

fetchDogs(url2) */

//3. Rendera ut dem i DOM'en istället så de blir synliga för en användare

/* function fetchDogs(adress) {
    const dogNameList = document.querySelector(`#output`)

    fetch(adress).then(response => response.json())
        .then(data => {
            data.map((dogs) => {
                const listItems = document.createElement(`li`);
                listItems.textContent = dogs.name;
                dogNameList.appendChild(listItems);
            })
        })
}

fetchDogs(url2) */


//## Övning 3:
//1. Hämta alla böcker genom en fetch mot API'et

let url3 = 'https://majazocom.github.io/Data/books.json'

/* function fetchBookData(adress) {
    fetch(adress).then((response) => response.json())
        .then(data => console.log(data))
}

fetchBookData(url3) */

//2. Rendera ut de böcker vars sidor inte är längre än 500 pages

/* function fetchBookData(adress) {
    fetch(adress).then(response => response.json())
        .then(data => {
            const pages = data.filter((numPages) => numPages.pages <= 500);
            console.log(pages)
        })
}
fetchBookData(url3) */


//## Övning 4:
//1. Hämta alla besökare till ett jobb-event genom en fetch mot API'et

let url4 = 'https://majazocom.github.io/Data/attendees.json'

/* function fetchAttendees(adress) {
    fetch(adress).then(response => response.json())
        .then(data => console.log(data))
}
fetchAttendees(url4) */


//2. Rendera enbart ut de som skall komma

/* function fetchAttendees(adress) {
    fetch(adress).then(response => response.json())
        .then(data => {
            const filterAttending = data.filter((attendees) => attendees.attending === true)
            console.log(filterAttending)
        })
}
fetchAttendees(url4) */

//attending: true

//3. Rendera enbart ut de som skall komma OCH som har allergier

// function fetchAttendees(adress) {

//     fetch(adress).then(response => response.json())
//         .then(data => {
//             const filterAttending = data.filter((attendees) => attendees.attending === true)
//             const everyone = filterAttending.filter((allergies) => allergies.allergies.length)

//             console.log(everyone)
//         })
// }

// fetchAttendees(url4)

// Din uppgift
// 1.Hämta datan från API:et

/* function fetchAttendees(adress) {
    fetch(adress).then(response => response.json())
        .then(data => console.log(data))
}
fetchAttendees(url4) */


// 2.Skapa en vy för att se vilka som kommer att delta på eventet

function fetchAttendees(adress) {

    const attendingList = document.querySelector(`#output`)

    fetch(adress).then(response => response.json())
        .then(attendees => {
            const peopleAttending = attendees.filter((attendees) => attendees.attending === true);
            peopleAttending.map((list) => {

                const peopleList = document.createElement(`li`)

                peopleList.textContent = list.name;

                attendingList.appendChild(peopleList)
            })

        })
}
fetchAttendees(url4)

// 3.Stylea den fint

document.body.style.backgroundColor = 'purple'
document.getElementById("output").style.color = 'yellow'

// Level-ups

// 4.Kunna lägga till en ny deltagare
// 5.Sortera deltagarna i alfabetsordning
// 6.Få ut enbart de som har matpreferenser
// 7.Skapa en spelgenerator där deltagarna kan slumpa fram vilket brädspel de ska spela på eventet



