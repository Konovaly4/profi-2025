// import React from 'react';

const useUserFetch = (url, data) => {
  // user authorization
  const userAuth = () => {
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
        phone: `${data.phone}`,
        permission: `${data.permission}`
      })
    })
    .then((res) => {
     return (res.ok ? res.json() : Promise.reject(res));
    })
  }

  // user login
  const userLogin = () => {
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
      return (res.ok ? res.json() : Promise.reject(res));
     })
  }

  // getting all users
  const usersGet = () => {
    return fetch(`${url}users`, {
      redirect: 'follow',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }})
    .then((res) => {
      return (res.ok ? res.json() : Promise.reject(res));
    })
  }
  
  // get one user
  const userGet = () => {
    return fetch(`${url}users/:id`, {
      redirect: 'follow',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }})
    .then((res) => {
      return (res.ok ? res.json() : Promise.reject(res));
    })
  }

    // user update
    const userUpdate = () => {
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
          phone: `${data.phone}`,
          permission: `${data.permission}`
        })
      })
      .then((res) => {
       return (res.ok ? res.json() : Promise.reject(res));
      })
    }

    // delete user
    const userDelete = () => {
      return fetch(`${url}users/:id`, {
        redirect: 'follow',
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data.token}`
      }})
      .then((res) => {
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