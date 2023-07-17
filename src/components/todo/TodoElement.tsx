import { useState } from "react";
import { TODOS } from "../../types/todo-types";
import { useDeleteTodoByID } from "../../hooks/useDeleteTodoByID";
import { useEditTodoByID } from "../../hooks/useEditTodoByID";

type TodoElementProps = {
  todo: TODOS;
};

export const TodoElement = ({ todo }: TodoElementProps) => {
  // state form checking if edit
  const [editTodo, setEditTodo] = useState(0);
  // edit input
  const [input, setInput] = useState("");

  // delete TODO
  const { mutate: deleteTODO } = useDeleteTodoByID();
  // edit TODO
  const { mutate: editTODO } = useEditTodoByID();

  // on submit edit form
  const handleEdit = () => {
    if (input.length <= 0) {
      alert("Please enter a title to save TODO!");
    }
    try {
      // edit todo with api
      editTODO({ id: editTodo, title: input, isDone: todo.attributes.isDone });
      // set edit mode to 0
      setEditTodo(0);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`h-20 px-5  w-full  drop-shadow-lg border-2 border-green-700 flex flex-wrap items-center justify-between ${
        todo.attributes.isDone && " opacity-30"
      }`}
    >
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() =>
            editTODO({
              id: todo.id,
              title: todo.attributes.title,
              isDone: !todo.attributes.isDone,
            })
          }
          className="text-green-700"
        >
        </button>

        {/* if edit - display input else show normal state */}
        {!editTodo ? (
          <span className="font-bold text-green-700 uppercase">
            {todo.attributes.title}
          </span>
        ) : (
          // react hook form with normal hook validation
          <div className="flex items-center gap-5">
            <input
              className="inputField"
              type="text"
              defaultValue={todo.attributes.title}
              onChange={(event) => setInput(event.target.value)}
            ></input>
            <button
              type="button"
              onClick={() => handleEdit()}
            >
              <img className="imageDeleteEdit" src="/src/assets/save-technology-svgrepo-com.svg"></img>
            </button>
          </div>
        )}
      </div>
      <div className="text-green-700 flex gap-5 items-center">
        <button
          className="hover:scale-105 hover:cursor-pointer"
          onClick={() => deleteTODO(todo.id)}
        ><img className="imageDeleteEdit" src="/src/assets/delete-button-svgrepo-com.svg"></img></button>
        <button
          className="hover:scale-105 hover:cursor-pointer"
          onClick={() => setEditTodo(todo.id)}
        ><img className="imageDeleteEdit" src="/src/assets/edit-button-svgrepo-com.svg"></img></button>
      </div>
    </div>
  );
};
