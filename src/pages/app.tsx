import { ManageTasks } from "../components/manage-tasks";
import "../styles/pages/app.css";

export function App() {
  return (
    <div className="container">
      <div className="logo">
        <img src="/rocket.svg" alt="" />

        <div className="todo">
          <span>to</span>
          <span>do</span>
        </div>
      </div>

      <div className="create-task">
        <input type="text" placeholder="Add a new task" />

        <button>
          Criar
          <img src="/plus.svg" alt="" />
        </button>
      </div>

      <div className="board-tasks">
        <div className="info">
          <p>
            Tasks created <span>0</span>
          </p>

          <p>
            Completed <span>0</span>
          </p>
        </div>

        <ManageTasks />
      </div>
    </div>
  );
}
