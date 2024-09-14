import { useState } from "react";
import { TypeTask } from "../types/task";
import { EmptyTasks } from "./empty-tasks";
import { ListTasks } from "./list-tasks";

export function ManageTasks() {
  const [tasks] = useState<TypeTask[]>([
    { completed: true, description: "oi" },
  ]);
  const isEmpty = tasks.length === 0;

  return <>{(isEmpty && <EmptyTasks />) || <ListTasks tasks={tasks} />}</>;
}
