import './CloseButton.css';

const CloseButton = (props) => {
  return (
    <button className='close-button' onClick={props.onPress} />
  )
}

export default CloseButton;