import {restModel} from "//unpkg.com/can@5/core.mjs";
import Todo from "./todo.mjs";
import TodoList from "./todo-list.mjs";
import TodoFixture from "./todo-fixture.mjs";

Todo.List = TodoList;

Todo.connection = restModel({
    Map: Todo,
    List: Todo.List,
    url: "/api/todos/{id}"
});

TodoFixture(25)

export default Todo;
