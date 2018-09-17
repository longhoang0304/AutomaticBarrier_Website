import { LogTypes } from '../constants/ActionTypes';

const initState = {
  errorMsg: '',
  isLoading: false,
  logList: [],
};

const logReducer = (state = initState, action) => {
  const { errorMsg, logList } = action.payload || {};
  switch (action.type) {
    case LogTypes.LOG_GET_ALL: {
      return {
        ...state,
        isLoading: true,
        errorMsg: '',
      };
    }
    case LogTypes.LOG_GET_ALL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errorMsg: '',
        logList,
      };
    }
    case LogTypes.LOG_GET_ALL_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMsg,
      };
    }
    default: {
      return state;
    }
  }
};

export default logReducer;