import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import styles from './index.module.css'
// import { Container } from './styles';

interface Task {
  id: number
  content: string
  check: boolean
}

interface AddTaskProps {
  setTask: (task: Task[]) => void;
  task: Task[];
}

const AddTask = ({ setTask, task }: AddTaskProps) => {
  const [newActivity, setNewActivity] = useState('')

  function newTask(e: FormEvent) {
    e.preventDefault();
    let data = [
      ...task,
      {
      id: task.length + 1,
      content: newActivity,
      check: false,
    }]
    setTask(data);
    setNewActivity('');
  }

  return (
    <div className={styles.sectionContainer}>
      <form onSubmit={newTask}>
        <input
          type="text"
          value={newActivity}
          onChange={(e) => setNewActivity(e.target.value)}
          placeholder="Adicione uma nova tarefa"
        />

        <button type="submit">
          Criar
          <PlusCircle weight="bold" size={20} />
        </button>
      </form>
    </div>
  )
}

export default AddTask
