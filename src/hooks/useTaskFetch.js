// import React from 'react';

const useTaskFetch = (url, data) => {
  // getting all tasks
  const tasksGet = () => {
    return fetch(`${url}tasks`, {
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
  
  // get client's tasks
  const tasksGetByClient = () => {
    return fetch(`${url}tasks?client_name=${data.clientName}`, {
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

    // get worker's tasks
    const tasksGetByWorker = () => {
      return fetch(`${url}tasks?client_name=${data.workerName}`, {
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

    // task create
    const taskCreate = () => {
      return fetch(`${url}tasks`, {
        redirect: 'follow',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          type: `${data.username}`,
          subtype: `${data.email}`,
          description: `${data.password}`,
          assepted: false,
          completed: false,
          rating: 0,
          feedback: null,
          worker_name: null,
          worker_phone: null,
          worker_email: null,
          client_name: `${data.clientName}`,
          client_phone: `${data.clientPhone}`,
          client_email: `${data.clientEmail}`,
        })
      })
      .then((res) => {
       return (res.ok ? res.json() : Promise.reject(res));
      })
    }

        // task update
        const taskUpdate = () => {
          return fetch(`${url}tasks/:id`, {
            redirect: 'follow',
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${data.token}`,
            },
            body: JSON.stringify({
              type: `${data.username}`,
              subtype: `${data.email}`,
              description: `${data.password}`,
              assepted: `${data.assepted}`,
              completed: `${data.completed}`,
              rating: `${data.rating}`,
              feedback: `${data.feedback}`,
              worker_name: `${data.worker_name}`,
              worker_phone: `${data.worker_phone}`,
              worker_email: `${data.worker_email}`,
              client_name: `${data.clientName}`,
              client_phone: `${data.clientPhone}`,
              client_email: `${data.clientEmail}`,
            })
          })
          .then((res) => {
           return (res.ok ? res.json() : Promise.reject(res));
          })
        }

    // delete user
    const taskDelete = () => {
      return fetch(`${url}tasks/:id`, {
        redirect: 'follow',
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data.token}`,
      }})
      .then((res) => {
        return (res.ok ? res.json() : Promise.reject(res));
      })
    }  

  return {
    tasksGet,
    tasksGetByClient,
    tasksGetByWorker,
    taskCreate,
    taskUpdate,
    taskDelete
  }
}

export default useTaskFetch;