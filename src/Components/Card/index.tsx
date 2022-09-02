import { FormEvent, useState } from 'react'
import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './index.module.css'

interface Task {
  id: number
  content: string
  check: boolean
}

interface CardProps {
  task: Task[]
  setTask: (task: Task[]) => void
}

const Card = ({ task, setTask }: CardProps) => {

  function HandleNewCollectionTask(index: number) {
    const newTasks = [...task]
    newTasks[index].check = !newTasks[index].check

    setTask(newTasks)
  }

  function HandleDeleteTask(index: number) {
    const newTasks = [...task]
    newTasks.splice(index, 1);

    setTask(newTasks)
  }

  return (
    <>
      {task?.map((event: Task, index) => (
        <div key={event.id} className={styles.sectionCard}>
          <div className={styles.labelIcon}>
            <div>
              {event.check ? (
                <CheckCircle
                  onClick={() => HandleNewCollectionTask(index)}
                  weight="bold"
                  size={25}
                  color="#5E60CE"
                />
              ) : (
                <Circle
                  onClick={() => HandleNewCollectionTask(index)}
                  size={25}
                  weight="bold"
                  color="#4EA8DE"
                />
              )}
            </div>
            <label className={event.check ? styles.check : ''}>{event.content}</label>
          </div>

          <i>
            <Trash onClick={() => HandleDeleteTask(index)} size={18} />
          </i>
        </div>
      ))}
    </>
  )
}

export default Card
