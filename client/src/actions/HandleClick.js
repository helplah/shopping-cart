import * as actionTypes from './actions';

const HandleClick = (event, num) => ({
  type: actionTypes.ADD_TO_CART,
  event,
  num
});

export default HandleClick;