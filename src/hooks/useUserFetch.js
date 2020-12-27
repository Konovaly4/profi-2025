const useUserFetch = (url, data) => {
  const loader = document.querySelector('.loader__wrapper');

  // user authorization
  const userAuth = () => {
    loader.classList.add('loader__wrapper_visible');
    return fetch(`${url}auth/local/register`, {
      redirect: 'follow',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: `${data.username}`,
        email: `${data.email}`,
        password: `${data.password}`,
        userphone: `${data.userphone}`,
        // permission: `${data.permission}`
      })
    })
    .then((res) => {
      loader.classList.remove('loader__wrapper_visible');
      return (res.ok ? res.json() : Promise.reject(res));
    })
  }

  // user login
  const userLogin = () => {
    loader.classList.add('loader__wrapper_visible');
    return fetch(`${url}auth/local`, {
      redirect: 'follow',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: `${data.email}`,
        password: `${data.password}`
      }) 
    })
    .then((res) => {
      loader.classList.remove('loader__wrapper_visible');
      return (res.ok ? res.json() : Promise.reject(res));
     })
  }

  // getting all users
  const usersGet = () => {
    loader.classList.add('loader__wrapper_visible');
    return fetch(`${url}users`, {
      redirect: 'follow',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }})
    .then((res) => {
      loader.classList.remove('loader__wrapper_visible');
      return (res.ok ? res.json() : Promise.reject(res));
    })
  }
  
  // get one user
  const userGet = () => {
    loader.classList.add('loader__wrapper_visible');
    return fetch(`${url}users/${data.userId}`, {
      redirect: 'follow',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }})
    .then((res) => {
      loader.classList.remove('loader__wrapper_visible');
      return (res.ok ? res.json() : Promise.reject(res));
    })
  }

    // user update
    const userUpdate = () => {
      loader.classList.add('loader__wrapper_visible');
      return fetch(`${url}users/:id`, {
        redirect: 'follow',
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data.token}`
        },
        body: JSON.stringify({
          username: `${data.username}`,
          email: `${data.email}`,
          password: `${data.password}`,
          userphone: `${data.userphone}`,
          permission: `${data.permission}`
        })
      })
      .then((res) => {
        loader.classList.remove('loader__wrapper_visible');
        return (res.ok ? res.json() : Promise.reject(res));
      })
    }

    // delete user
    const userDelete = () => {
      loader.classList.add('loader__wrapper_visible');
      return fetch(`${url}users/:id`, {
        redirect: 'follow',
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data.token}`
      }})
      .then((res) => {
        loader.classList.remove('loader__wrapper_visible');
        return (res.ok ? res.json() : Promise.reject(res));
      })
    }  

  return {
      userAuth, 
      userLogin,
      usersGet,
      userGet,
      userUpdate,
      userDelete
  }
}

export default useUserFetch;