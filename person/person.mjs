import {DefineMap} from "//unpkg.com/can@5/core.mjs";

// -------------------------------
// Define an observable Todo type:
// -------------------------------
const Person = DefineMap.extend( "Person", {

    // `first` is a String, null, or undefined
    // and represents the first name of the person.
	first: "string",

    // `last` is a String, null, or undefined
    // and represents the last name of the person.
	last: "string",

    // `fullName` is a getter function that
    // returns a string representing
    // the full name of the person.
	get fullName() {
		return this.first + " " + this.last;
	}

} );

export default Person;
