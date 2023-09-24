import { AddTodoProps, InputItem } from "@/types";
import { useState } from "react";

export default function Input({addTodo}:AddTodoProps) {  
  const [itemTodo, setItemTodo] = useState<InputItem>({item: '', status: 'pendente'});

  return (
    <>
    <div>
      <div>
        <input 
        type="text" 
        placeholder="Insira uma tarefa na sua lista" 
        onChange={e=>{setItemTodo({item:e.currentTarget.value,status:'pendente'})}}
        />
      </div>
      <div>
      <button onClick={()=>{
          addTodo(itemTodo);
        }}>Adicionar</button>
      </div>
    </div>
    </>
  )
};