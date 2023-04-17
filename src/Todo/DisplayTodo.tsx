import React from "react";
import TodoCard from "./TodoCard";

export default function DisplayTodo(props: any) {
  return (
    <>
      {props.tasks
        .filter((task: any) => task.status === props.status)
        .map((task: any) => {
          return (
            <TodoCard
              status = {props.status}
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              createdAt={task.createdAt}
              onButtonClick={props.onButtonClick}
              onDeleteClick={props.onDeleteClick}
              onEditClick={props.onEditClick}
            />
          );
        })}
    </>
  );
}
