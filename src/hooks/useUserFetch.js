const useUserFetch = (url, data, loaderOn, loaderOff) => {

  // user authorization
  const userAuth = () => {
    loaderOn();
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
      loaderOff();
      return (res.ok ? res.json() : Promise.reject(res));
    })
  }

  // user login
  const userLogin = () => {
    loaderOn();
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
      loaderOff();
      return (res.ok ? res.json() : Promise.reject(res));
     })
  }

  // getting all users
  const usersGet = () => {
    loaderOn();
    return fetch(`${url}users`, {
      redirect: 'follow',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }})
    .then((res) => {
      loaderOff();
      return (res.ok ? res.json() : Promise.reject(res));
    })
  }
  
  // get one user
  const userGet = () => {
    loaderOn();
    return fetch(`${url}users/${data.userId}`, {
      redirect: 'follow',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }})
    .then((res) => {
      loaderOff();
      return (res.ok ? res.json() : Promise.reject(res));
    })
  }

    // user update
    const userUpdate = () => {
      loaderOn();
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
        loaderOff();
        return (res.ok ? res.json() : Promise.reject(res));
      })
    }

    // delete user
    const userDelete = () => {
      loaderOn();
      return fetch(`${url}users/:id`, {
        redirect: 'follow',
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data.token}`
      }})
      .then((res) => {
        loaderOff();
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