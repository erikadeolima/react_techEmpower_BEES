import { TodoListProps} from '@/types';
import React from 'react';

export default function TodoList({items, removeAllTasks, removeTask}:TodoListProps) {
  return (
    <div>
    <div>
      Lista de tarefas a fazer:
    </div>
    <div>
      <button onClick={()=>removeAllTasks()}>Limpar lista</button>
    </div>
    <div>
    <ul>
      {items.map((item, index) => (
        <div>
          <li 
          key={index} 
          className={item.status}>
            {item.item}
          </li>
          <button 
          onClick={()=>removeTask(index)}>
            Remover Tarefa
          </button>
        </div>
      ))}
    </ul>
    </div>
    </div>
  );
};