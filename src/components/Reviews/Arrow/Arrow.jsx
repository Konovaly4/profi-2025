import cn from 'classnames';
import './Arrow.css';

const Arrow = (props) => {

  return (
    <button className={cn('arrow', {
      'arrow_left': props.direction === 'left',
      'arrow_right': props.direction === 'right',
    })} 
    onClick={props.onArrowClick}
    />
  )
}

export default Arrow;