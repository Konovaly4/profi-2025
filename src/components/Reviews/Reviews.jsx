import {useState, useEffect} from 'react';
import Arrow from './Arrow/Arrow';
import Review from './Review/Review';
import useTaskFetch from '../../hooks/useTaskFetch';
import {urlData} from '../../constants/urlData';
import './Reviews.css';

const Reviews = (props) => {
  const [dataList, setDataList] = useState([]);
  const [dataSearcnValue, setDataSearchValue] = useState(0);

  // constants
  const userData = props.user;
  const workData = undefined;
  const workerData = undefined;

  // hooks
  const {
    tasksGet,
    tasksGetByClient,
    tasksGetByWorker,
    taskCreate,
    taskUpdate,
    taskDelete
  } = useTaskFetch(urlData.network, props.token, workData, userData, workerData)

  // collect reviews
  useEffect(() => {
    tasksGet()
    .then(res => setDataList(res))
    .catch(err => console.log(err));
  }, [])

  const searchRight = () => {
    if (dataSearcnValue === (dataList.length - 2)) return;
    setDataSearchValue(dataSearcnValue + 1);
  }

  const searchLeft = () => {
    if (dataSearcnValue === 0) return;
    setDataSearchValue(dataSearcnValue - 1);
  }

  return (
    <section className='reviews'>
      <h2 className='reviews__title'>Отзывы</h2>
      <div className='reviews__container'>
        {(!dataList || dataList.length === 0) && <p className='reviews__note'>Пока нет ревью</p>}
        {dataList.length !== 0 && dataSearcnValue !== 0 && <Arrow direction= 'left' onArrowClick={searchLeft} />}
        {dataList.length !== 0 &&
          <ul className='reviews__list'>
            {dataList.slice(dataSearcnValue, dataSearcnValue + 2).map((i, num) => {
              return (
                <Review key={num} data={i} />
              )
            } )}
          </ul>
        }
        {dataList.length !== 0 && dataSearcnValue !== (dataList.length - 2) && <Arrow direction='right' onArrowClick={searchRight} />}
      </div>
    </section>
  )
}

export default Reviews;
