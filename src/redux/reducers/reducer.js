import * as actionType from '../action/actionTypes'

const initialState = {
  data: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_PAGE_LOAD_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};

export default dataReducer;
