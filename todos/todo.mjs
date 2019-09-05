import {
	ObservableObject,
	ObservableArray,
	type
} from "//unpkg.com/can@pre/core.mjs";

// -------------------------------
// Define an observable Todo type:
// -------------------------------

// The custom Owner type used in Person's owner property definition.
class Owner extends ObservableObject {
	static props = {
		first: String,
		last: String
	};
}

class Todo extends ObservableObject {
	static props = {
		// `id` is a Number and uniquely identifies instances of this type.
		id: { type: type.convert(Number), identity: true },

		// `complete` is a Boolean and defaults to `false`.
		complete: { type: type.convert(Boolean), default: false },

		// `dueDate` is a Date
		dueDate: type.convert(Date),

		// `isDueWithin24Hours` property returns if the `.dueDate`
		// is in the next 24 hrs. This is a computed property.
		get isDueWithin24Hours() {
			let msLeft = this.dueDate - new Date();
			return msLeft >= 0 && msLeft <= 24 * 60 * 60 * 1000;
		},

		// `name` is a String
		name: type.convert(String),

		// `nameChangeCount` increments when `name` changes.
		nameChangeCount: {
			value({ listenTo, resolve }) {
				let count = resolve(0);
				listenTo("name", () => {
					count += 1;
					resolve(count);
				});
			}
		},

		// `owner` is a custom type with a first and last property.
		owner: Owner,

		// `tags` is an observable list of items that
		// defaults to including "new"
		tags: {
			get default() {
				return ["new"];
			}
		}
	};

	// `toggleComplete` is a method
	toggleComplete() {
		this.complete != this.complete;
	}
}

Todo.List = class TodoList extends ObservableArray {
	// Specify the behavior of items in the TodoList
	static items = type.convert(Todo);

	static props = {
		// Create a computed `complete` property
		get complete() {
			// Filter all complete todos
			return this.filter({ complete: true });
		}
	};
};

export default Todo;
