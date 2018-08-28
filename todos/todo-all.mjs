import {restModel} from "//unpkg.com/can@5/core.mjs";
import Todo from "./todo.mjs";
import TodoList from "./todo-list.mjs";
import TodoFixture from "./todo-fixture.mjs";

Todo.connection = restModel({
    Map: Todo,
    List: TodoList,
    url: "/api/todos/{id}"
});

TodoFixture(25)

export default Todo;
