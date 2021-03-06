import * as actionTypes from './actions';

const FetchFromDatabase = () => {
  return (dispatch) => {
    fetch('/api/cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json' 
      }
    })
    .then(res => {
      try {
        if (!res.ok) {
          throw new Error(res.statusText);
        } 
        
        return res;
      } catch(error) {
        console.log(error);
      }
    })
    .then(res => res.json())
    .then(res => dispatch({
      type: actionTypes.UPDATE_STORE,
      payload: { ...res } 
    }))
    .catch(error => console.log(error));
  }
}

export default FetchFromDatabase;