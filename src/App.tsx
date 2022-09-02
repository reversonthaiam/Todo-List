import { useContext, useState } from 'react'
import styles from './App.module.css'
import Header from './Components/Header'
import AddTask from './Components/AddTask'
import Card from './Components/Card'

const data = [
  {
    id: 1,
    content: 'Preciso estudar as 9 horas da noite para conseguir passar no concurso',
    check: true,
  },
]

function App() {
  const [task, setTask] = useState(data);

  const countTask = task.filter(e => {
    return e.check === true;
  });

  return (
    <div className={styles.body}>
      <Header />
      <section className={styles.container}>
        <AddTask setTask={setTask} task={task}/>
        <div>
          <div className={styles.sectionTitle}>
            <div>
              <p>Tarefas criadas</p>
              <p className={styles.sectionNewTask}>{task.length}</p>
            </div>
            <div>
              <p>Concluídas</p>
              <p className={styles.sectionNewTask}>{`${countTask.length} de ${task.length}`}</p>
            </div>
          </div>

          <Card setTask={setTask} task={task}/>
        </div>
      </section>
    </div>
  )
}

export default App
