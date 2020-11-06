import unsplashApi from '../apis/unsplashApi'

export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: task
  }
}

export const taskDone = (task) => {
  return  {
    type: 'MARK_TASK_AS_DONE',
    payload: task
  }
}

export const fetchImages = () => async dispatch => {
  const result = await unsplashApi.get("/search/photos");

  dispatch({ type: 'FETCH_IMAGES', payload: result.data.results })
}
