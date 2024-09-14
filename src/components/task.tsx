import { useState } from "react";
import { TrashIcon } from "../icons/trash";
import { TypeTask } from "../types/task";

export type TaskProps = TypeTask;

export function Task(props: TaskProps) {
  const { completed, description } = props;
  const [checked, setChecked] = useState(completed);

  function handlerCheck() {
    setChecked((state) => !state);
    console.log("checked");
  }

  function handlerDelete() {
    console.log("deleted");
  }

  function handleClickWhenPressingSpace(
    event: React.KeyboardEvent<HTMLDivElement>
  ) {
    if (event.code == "Space") {
      handlerCheck();
    }
  }

  return (
    <div className="task" tabIndex={0} onKeyDown={handleClickWhenPressingSpace}>
      <span
        className="checkbox"
        onClick={handlerCheck}
        data-checked={checked}
      ></span>

      <p onClick={handlerCheck}>{description} </p>

      <TrashIcon onClick={handlerDelete} />
    </div>
  );
}
