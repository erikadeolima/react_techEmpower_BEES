import React from 'react';
import Input from '@/components/Input';
import { useState } from 'react';
import TodoList from '@/components/TodoList';
import { InputItem } from '@/types';

export default function Home() {
  const [inputList, setInputList] = useState<InputItem[]>([]);

  const addTodo = (item: InputItem) => {
    setInputList([...inputList, item]);
  };

  const removeTask = (index: number) => {
    const newList = [...inputList];
    newList.splice(index, 1);
    setInputList(newList);
  };

  const removeAllTasks = () =>{
    setInputList([]);
  };

  return (
    <>
      <div>TO DO LIST - APP</div>
      <div>
        <Input addTodo={addTodo} />
      </div>
      <div>
        <TodoList items={inputList} removeAllTasks={removeAllTasks} removeTask={removeTask}/>
      </div>
    </>
  );
}
