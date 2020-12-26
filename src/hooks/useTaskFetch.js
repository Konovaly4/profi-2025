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
        'Authorization': `Bearer ${data.userToken}`,
    }})
    .then((res) => {
      return (res.ok ? res.json() : Promise.reject(res));
    })
  }
  
  // get client's tasks
  const tasksGetByClient = () => {
    return fetch(`${url}tasks?client_name=${data.userName}`, {
      redirect: 'follow',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${data.userToken}`,
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
          'Authorization': `Bearer ${data.userToken}`,
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
          'Authorization': `Bearer ${data.userToken}`,
        },
        body: JSON.stringify({
          type: `${data.workType}`,
          subtype: `${data.workSubtype}`,
          description: `${data.workDescription}`,
          assepted: false,
          completed: false,
          rating: '0',
          feedback: null,
          worker_name: null,
          worker_phone: null,
          worker_email: null,
          client_name: `${data.userName}`,
          client_phone: `${data.userPhone}`,
          client_email: `${data.userEmail}`,
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
              'Authorization': `Bearer ${data.userToken}`,
            },
            body: JSON.stringify({
              type: `${data.workType}`,
              subtype: `${data.workSubtype}`,
              description: `${data.workDescription}`,
              assepted: `${data.assepted}`,
              completed: `${data.completed}`,
              rating: `${data.rating}`,
              feedback: `${data.feedback}`,
              worker_name: `${data.workerName}`,
              worker_phone: `${data.workerPhone}`,
              worker_email: `${data.workerEmail}`,
              client_name: `${data.userName}`,
              client_phone: `${data.userPhone}`,
              client_email: `${data.userEmail}`,
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
          'Authorization': `Bearer ${data.userToken}`,
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