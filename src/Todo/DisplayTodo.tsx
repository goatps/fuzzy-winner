import React from "react";
import TodoCard from "./TodoCard";

export default function DisplayTodo(props: any) {
  return <>
            {
            props.tasks.map((task: any) => {
                return (
                    <TodoCard
                        key={task.id}
                        title={task.title}
                        description={task.description}
                        createdAt={task.createdAt}
                    />
                )
            }
            )
        }
  </>;
}
