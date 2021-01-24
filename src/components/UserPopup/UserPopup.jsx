import {useState, useEffect} from 'react';
import cn from 'classnames';
import useUserFetch from '../../hooks/useUserFetch';
import CloseButton from '../CloseButton/CloseButton';
import {regPopupData} from '../../constants/userPopupData';
import {urlData} from '../../constants/urlData';
import './UserPopup.css';

const UserPopup = (props) => {
  const [visibility, setVisibility] = useState(false);
  const [username,  setUserName] = useState(undefined);
  const [userphone,  setUserPhone] = useState(undefined);
  const [email,  setUserEmail] = useState(undefined);
  const [password,  setUserPassword] = useState(undefined);

  const userData = {username, userphone, email, password};
  const loaderOn = props.loaderOn;
  const loaderOff = props.loaderOff;
  // console.log(userData);

  const {
    userAuth, 
    userLogin,
  } = useUserFetch(urlData.network, userData, loaderOn, loaderOff);

  // popup open
  useEffect(() => {
    props.state !== '' ? setVisibility(true) : setVisibility(false);
  }, [props.state])

  // popup close by click on wrapper
  const closeByWrapper = (e) => {
    !e.target.closest('.user-popup') && props.clearRegState();
  }

  // setting user name
  const setName = (e) => {
    setUserName(e.target.value);
    // console.log(e.target.value);
  }

  // setting user phone
  const setPhone = (e) => {
    setUserPhone(e.target.value);
    // console.log(e.target.value);
  }

  // setting user email
  const setEmail = (e) => {
    setUserEmail(e.target.value);
    // console.log(e.target.value);
  }

  // setting user password
  const setPassword = (e) => {
    setUserPassword(e.target.value);
    // console.log(e.target.value);
  }

  // create new user
  const createUser = () => {
    userAuth()
    .then(res => {
      // console.log(res);
      props.setUser(res);
    })
    .catch(err => {
      err.json()
      .then(err => console.log(err));
    })

  }

  // create new user
  const loginUser = () => {
    userLogin()
    .then(res => {
      props.setUser(res);
    })
    .catch(err => {
      err.json()
      .then(err => console.log(err));
    })

  }

    // start registration
    const registrate = (e) => {
      e.preventDefault();
      createUser(); 
      props.clearRegState();
    }
  
    // start login
    const login = (e) => {
      e.preventDefault();
      loginUser(); 
      props.clearRegState();
    }


  return (
    <div className={cn('user-popup__wrapper', {'user-popup__wrapper_visible': visibility})} onClick={closeByWrapper }>
      <form className='user-popup'>
        <h2 className='user-popup__title'>{props.state === 'registration' ? regPopupData.regTitle :regPopupData.loginTitle}</h2>
        {props.state === 'registration' && <input className='user-popup__input' type='text' name='name' placeholder={regPopupData.name} onChange={setName}></input>}
        {props.state === 'registration' && <input className='user-popup__input' type='text' name='phone' pattern='^(\+7|8)(\(|\s|-)?\d{3}(\)|\s|-)?\s?(\d(\s|-)?){6}\d' placeholder={regPopupData.phone} onChange={setPhone}></input>}
        <input className='user-popup__input' type='email' name='email' placeholder={regPopupData.email} onChange={setEmail}></input>
        <input className='user-popup__input' type='text' name='password' placeholder={regPopupData.password} onChange={setPassword}></input>
        <div className='user-popup__button-wrapper'>
          {props.state === 'registration' && <button className='user-popup__reg-button' onClick={registrate}>{regPopupData.regButton}</button>}
          <button className='user-popup__reg-button' onClick = {
            props.state === 'registration' ? props.setLoginState : login
          }>{regPopupData.loginButton}</button>
        </div>
        <CloseButton onPress={props.clearRegState} />
      </form>
    </div>

  )
}

export default UserPopup;
