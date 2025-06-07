export interface Task {
  id: number;
  title: string;
  priority: "alta" | "media" | "baja";
  completed: boolean;
}
