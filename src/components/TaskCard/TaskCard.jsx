import './TaskCard.css'

const TaskCard = (props) => {

  return (
    <section className='task-card'>
      <h2 className='task-card__title'>Подтип работы</h2>
      <p className='task-card__create-data'>Дата создания</p>
      <textarea className='task-card__description'>Описание заявки</textarea>
      
    </section>
    

  )
}

export default TaskCard;