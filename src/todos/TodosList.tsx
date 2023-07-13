import React from 'react'
import { TodoProps } from './../types/TodoProps';

type TodosListProps = {
  Todo: TodoProps[];
};

export const TodosList = ({ Todo }: TodosListProps) => {
  return (
    <div>
         {Todo && Todo.data?.map((todo: Array<string | number | any>) => (
          <div key={todo.id}>
           <p>{todo.attributes.title}</p>
          </div>
        ))}
    </div>
  )
}
