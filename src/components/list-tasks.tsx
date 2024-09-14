import { TypeTask } from "../types/task";
import { Task } from "./task";

export interface ListTasksProps {
  tasks: TypeTask[];
}

export function ListTasks(props: ListTasksProps) {
  const { tasks } = props;

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task description={task.description} completed={task.completed} />
      ))}
    </div>
  );
}
