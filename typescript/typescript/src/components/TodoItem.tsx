import React from "react";
import type { Todo } from "../types/todo";

type TodoItemProps = {
  todo: Todo;
  onRemove: (id: number) => void;
};

export default function TodoItem({ todo, onRemove }: TodoItemProps) {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)} className="remove-button">
        Remove
      </button>
    </div>
  );
}
