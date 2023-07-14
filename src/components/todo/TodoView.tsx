import React from "react";
import { TODO } from "../../types/todo-types";
import { TodoElement } from "./TodoElement";

type TodoViewProps = {
  todos: TODO[];
};

export const TodoView = ({ todos }: TodoViewProps) => {
  return (
    <section className="flex flex-col gap-2 my-5 lg_my-10">
      {todos.map((todo: TODO) => (
        <TodoElement todo={todo} key={todo.id} />
      ))}
      {/* if no todos in store */}
      {todos.length <= 0 && (
        <p className="my-5 text-indigo-500 font-bold text-center">
          Create TODO`s now - no TODO`s created yet
        </p>
      )}
    </section>
  );
};
