import axios from 'axios'

let target = process.server_url

// Action Defination
export const demoAction = (json) => ({ type: 'UPDATE_DEMO_JSON', json })

// Dispatch to Methods Defination
export const demoRequest = () => {
  let url = target + '/getCourse'
  return (dispatch) => {
    return axios.get(url).then((response) => {
      dispatch({
        type: 'GET_COURSE',
        course: response.data
      })
    })
  }
}
