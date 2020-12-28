import {useState, useEffect} from 'react';
import cn from 'classnames';
import CloseButton from '../CloseButton/CloseButton';
import AlertPopup from '../AlertPopup/AlertPopup';
import useTaskFetch from '../../hooks/useTaskFetch';
import useQuoteFetch from '../../hooks/useQuoteFetch';
import {urlData} from '../../constants/urlData';
import {ratingValue} from '../../constants/ratingValue';
import {taskButtonPlaceholders, buttonData, alertPopupData, taskFormSubtypeList} from '../../constants/formData';
import popupLabel from '../../images/popup-label.svg';
import './TaskCard.css'

const TaskCard = (props) => {
  // set work status
  const [workConfirmation, setWorkConfirmation] = useState('not-confirmed');
  const [alertVisibility, SetAlertVisibility] = useState(false);
  const [feedbackValue, setFeedbackValue] = useState('');
  const [rating, setRating] = useState(0);
  const [quote, setQuote] = useState('');

  // constants
  const taskCreatedTime = props.currentTask.created_at.slice(0, 10);
  const workSubTypeList = taskFormSubtypeList[props.currentTask.type];
  const workData = props.currentTask;
  const loaderOn = props.loaderOn;
  const loaderOff = props.loaderOff;
  const worker = undefined;

  // hooks
  // task hook
  const {
    taskUpdate,
    taskDelete
  } = useTaskFetch(urlData.network, props.token, workData, props.user, worker, loaderOn, loaderOff);

  // qoute hook
  const {quoteSearch} = useQuoteFetch(urlData.quoteUrl, feedbackValue);

  // set initial rating
  useEffect(() => {
    setRating(props.currentTask.rating);
  }, [props.currentTask])

  //set feedback value
  useEffect(() => {
    const keywordList = ratingValue[rating];
    const keyword = rating == 0 ? ratingValue[0] :  keywordList[Math.round(Math.random() * (keywordList.length - 1))];
    setFeedbackValue(keyword);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating])

  // set quote
  useEffect(() => {
    if (rating == 0) {
      setQuote(feedbackValue);
    }
    quoteSearch()
    .then(data => {
      if (!data) return;
      setQuote(data);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedbackValue])

  // work status setter
  const setWorkStatus = () => {
    setWorkConfirmation(workConfirmation === 'not-confirmed' ? 'confirmed' : workConfirmation === 'confirmed' ? 'done' : 'not-confirmed');
  }

  // closing by clicking on wrapper
  const closeByWrapper = (e) => {
    e.preventDefault();
    !e.target.closest('.task-card') && props.onClose();
  }

  // open alert popup
  const alertOpen = () => {
    SetAlertVisibility(true);
  }

  // close alert popup
  const alertClose = (e) => {
    e.preventDefault();
    SetAlertVisibility(false);
  }

  const changeRating = (e) => {
    if (e.target.id == rating) {
      setRating(e.target.id - 1);
    } else setRating(e.target.id);
  }

  const updateTask = (e) => {
    e.preventDefault();
    workData.feedback = quote;
    workData.rating = rating;
    if (workConfirmation === 'not-confirmed') {
      workData.accepted = false;
      workData.completed = false;
    } else if (workConfirmation === 'confirmed') {
      workData.accepted = true;
      workData.completed = false;
    }else if (workConfirmation === 'done') {
      workData.accepted = true;
      workData.completed = true;
    };
    taskUpdate()
    .then(res => console.log(res))
    .catch(err => console.log(err));
    props.onClose();
  }

  const deleteTask = (e) => {
    e.preventDefault();
    taskDelete()
    .then(res => console.log(res))
    .catch(err => console.log(err));
    SetAlertVisibility(false);
    props.onClose();
  }

  return (
    <div className={cn('task-card__wrapper', {'task-card__wrapper_visible': props.visibility})} onClick={closeByWrapper}>
      <section className='task-card'>
        <h2 className='task-card__title'>{workSubTypeList[props.currentTask.subtype]  }</h2>
        <p className='task-card__create-data'>{taskCreatedTime}</p>
        <p className='task-card__description'>{props.currentTask.description}</p>
        <button className='task-card__confirm-button' onClick={setWorkStatus}>{
          workConfirmation === 'not-confirmed' ? taskButtonPlaceholders.notConfirmed : 
          workConfirmation === 'confirmed' ? taskButtonPlaceholders.confirmed : taskButtonPlaceholders.finished
          }</button>
        <ul className='task-card__rating-container'>
          <li id='1' className={cn('task-card__rating-item', {'task-card__rating-item_active': rating >= 1})} onClick={changeRating} />
          <li id='2' className={cn('task-card__rating-item', {'task-card__rating-item_active': rating >= 2})} onClick={changeRating} />
          <li id='3' className={cn('task-card__rating-item', {'task-card__rating-item_active': rating >= 3})} onClick={changeRating} />
          <li id='4' className={cn('task-card__rating-item', {'task-card__rating-item_active': rating == 4})} onClick={changeRating} />
        </ul>
        <div className='task-card__button-wrapper'>
          <button className='task-card__button task-card__button_save-button' onClick={updateTask}>{buttonData.save}</button>
          <button className='task-card__button task-card__button_delete-button' onClick={alertOpen} >{buttonData.delete}</button>
        </div>
        <CloseButton onPress={props.onClose} />
        <AlertPopup visibility={alertVisibility} title={alertPopupData.dataCardDelete} onYesClick={deleteTask} onNoClick={alertClose} />
        <img className='task-card__label' src={popupLabel} alt='task-card-label' />
      </section>
    </div>
  )
}

export default TaskCard;