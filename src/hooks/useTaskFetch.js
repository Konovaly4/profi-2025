// import React from 'react';

const useTaskFetch = (url, token, workData, userData, workerData) => {
  // getting all tasks
  const tasksGet = () => {
    return fetch(`${url}tasks`, {
      redirect: 'follow',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`,
    }})
    .then((res) => {
      console.log(res);
      return (res.ok ? res.json() : Promise.reject(res));
    })
  }
  
  // get client's tasks
  const tasksGetByClient = () => {
    return fetch(`${url}tasks?client_name=${userData.username}`, {
      redirect: 'follow',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    }})
    .then((res) => {
      return (res.ok ? res.json() : Promise.reject(res));
    })
  }

    // get worker's tasks
    const tasksGetByWorker = () => {
      return fetch(`${url}tasks?client_name=${workerData.worker_name}`, {
        redirect: 'follow',
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
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
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          type: `${workData.type}`,
          subtype: `${workData.subtype}`,
          description: `${workData.description}`,
          aссepted: false,
          completed: false,
          rating: '0',
          feedback: null,
          // unlock to use worker data
          // worker_name: null,
          // worker_phone: null,
          // worker_email: null,
          client_name: `${userData.username}`,
          client_phone: `${userData.userphone}`,
          client_email: `${userData.email}`,
        })
      })
      .then((res) => {
       return (res.ok ? res.json() : Promise.reject(res));
      })
    }

        // task update
        const taskUpdate = () => {
          return fetch(`${url}tasks/${workData.id}`, {
            redirect: 'follow',
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
              type: `${workData.type}`,
              subtype: `${workData.subtype}`,
              description: `${workData.description}`,
              accepted: `${workData.accepted}`,
              completed: `${workData.completed}`,
              rating: `${workData.rating}`,
              feedback: `${workData.feedback}`,
              // worker_name: `${workerData.DataName}`,
              // worker_phone: `${workerData.workDataerPhone}`,
              // worker_email: `${workerData.workerEmDataail}`,
              // client_name: `${userData.userName}`,
              // client_phone: `${userData.userPhone}`,
              // client_email: `${userData.userEmail}`,
            })
          })
          .then((res) => {
           return (res.ok ? res.json() : Promise.reject(res));
          })
        }

    // delete user
    const taskDelete = () => {
      return fetch(`${url}tasks/${workData.id}`, {
        redirect: 'follow',
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
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