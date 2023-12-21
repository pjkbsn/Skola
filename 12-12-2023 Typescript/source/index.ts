console.log("hello world");

let greeting: string = "kalle"

let isGreeting: boolean = true;

let randomNumber: number = Math.ceil(Math.random() * 10);

let changing: any = "hej";

let arr: string[] = ["hej", "då"];

function getName(firstName: string, lastName: string): string {
    const fullName = firstName + " " + lastName
    return fullName;
};

const fullName: string = getName("kalle", "anka");