import Header from "./components/Header";
import TaskStats from "./components/TaskStats";
import InsertTask from "./components/InsertTask";
import TaskList from "./components/TaskList";
import Concepts from "./components/Concepts";

export default function App() {
  return (
    <main className="max-w-3xl mx-auto p-4">
      <Header />
      <TaskStats />
      <InsertTask />
      <TaskList />
      <Concepts />
    </main>
  );
}
