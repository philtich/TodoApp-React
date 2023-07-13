import React, { useEffect, useState } from 'react';
import { useGetTodos } from '../hooks/useGetTodos';
import { TodoProps } from '../types/TodoProps';
import { TodosList } from './TodosList';
import { Form } from '../components/Form';

export const Homepage = () => {
  const [Todo, setTodos] = useState([]);
  const { data } = useGetTodos();

  

  
  useEffect(() => {
    setTodos(data);
  }, [data]);
 
    
  return (
    <section>
        <TodosList Todo={data} />
    </section>
  );
};