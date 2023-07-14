import React from "react";
import { Pageheader } from "./common/Pageheader";
import { TodoForm } from "./todo/TodoForm";
import { useAddTodo } from "../hooks/useAddTodo";
import { useGetAllTodos } from "../hooks/useGetAllTodos";
import { TodoView } from "./todo/TodoView";
//import { Loader } from "./common/Loader";
import { ErrorMessage } from "./common/ErrorMessage";

export const MainView = () => {
  // addtodo hook
  const { mutate: addTODO } = useAddTodo();
  // getAllTodos hook
  const {
    data: allTODOS,
    isLoading: allTODOSLoading,
    isError: allTODOSError,
  } = useGetAllTodos();

  return (
    <>
      <Pageheader />
      <main className="container my-5 lg:my-10">
        <TodoForm
          addTODO={(title: string) => addTODO({ title, isDone: false })}
        />

        {/* if TODOS render view */}
        {allTODOS && <TodoView todos={allTODOS} />}
        {allTODOSLoading }
        {allTODOSError && <ErrorMessage message="Error loading all TODOS" />}
      </main>
    </>
  );
};
