import { ObservableObject } from "//unpkg.com/can@pre/core.mjs";

// -------------------------------
// Define an observable Todo type:
// -------------------------------
class Person extends ObservableObject {
	static props = {
		// `first` is a String and represents the first name of the person.
		first: String,

		// `last` is a String and represents the last name of the person.
		last: String,

		// `fullName` is a getter function that returns a string
		// representing the full name of the person.
		get fullName() {
			return this.first + " " + this.last;
		}
	};
}

export default Person;
