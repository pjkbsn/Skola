var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let ja = {
    name: 'Anders',
    phoneNumber: '0701467985',
    /*     age: 87, */
};
let user = {
    firstName: 'John',
    lastName: 'Andersson',
    age: 43,
    city: 'Ålaholm',
};
function showName(person) {
    console.log(person.firstName);
}
;
showName(user);
;
const books = [];
const book1 = {
    title: 'Aarons resa',
    author: 'Aaron',
    pages: 325,
};
const book2 = {
    title: 'Eerons resa',
    author: 'Eeron',
    pages: 25,
};
const books2 = [book1, book2];
books.push(book1);
books.push(book2);
console.log(books);
console.log(books2);
// fetch och/eller async är såkallade promises
const handleData = (data) => {
    console.log(data);
};
const url = "exempelUrl";
function fetchUserData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error(`http error: ${response.status}`);
            }
            const userData = yield response.json();
            return userData;
        }
        catch (error) {
            console.error('Fetch error:', error);
            throw new Error("Unable to fetch user data");
        }
    });
}
export {};
