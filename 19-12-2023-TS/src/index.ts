import { Persons } from "./interfaces";

//Lägg till ? vid age_: number; om du vill att ålder ska vara frivilligt.

type People = {
    name: string;
    phoneNumber: string | number;
    age?: number;
    /* adress: (string | number)[]; */ // Denna är en array som kan innehålla både string och number.
}





let ja: People = {
    name: 'Anders',
    phoneNumber: '0701467985',
    /*     age: 87, */
}







let user: Persons = {
    firstName: 'John',
    lastName: 'Andersson',
    age: 43,
    city: 'Ålaholm',
};

function showName(person: Persons): void {
    console.log(person.firstName);

};

showName(user);




interface Book {
    title: string;
    author: string;
    pages: number;
};

const books: Book[] = [];

const book1: Book = {
    title: 'Aarons resa',
    author: 'Aaron',
    pages: 325,
};

const book2: Book = {
    title: 'Eerons resa',
    author: 'Eeron',
    pages: 25,
};

const books2: Book[] = [book1, book2];

books.push(book1);
books.push(book2);
console.log(books);
console.log(books2);


interface Order {
    adress: string;
}

interface TelephoneOrder extends Order {
    callNumber: string;
}

interface InternetOrder extends Order {
    email: string;
}


type possibleOrders = TelephoneOrder | InternetOrder | undefined;

declare function getOrder(): possibleOrders;


// fetch och/eller async är såkallade promises

const handleData = (data) => {
    console.log(data);
}

const url: string = "exempelUrl";

interface User {
    id: number;
    name: string;
    email: string;
}

async function fetchUserData(url: string): Promise<User[]> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`http error: ${response.status}`)
        }
        const userData: User[] = await response.json();
        return userData;
    } catch (error) {
        console.error('Fetch error:', error);
        throw new Error("Unable to fetch user data");
    }
}