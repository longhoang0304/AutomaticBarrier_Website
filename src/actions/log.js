import { LogTypes } from '../constants/ActionTypes';
import { get, APIUrl } from '../lib/helper';

const fetchingLogs = () => ({
  type: LogTypes.LOG_GET_ALL,
});

const getLogsSuccess = (logList) => ({
  type: LogTypes.LOG_GET_ALL_SUCCESS,
  payload: {
    logList,
  },
});

const getLogsFailed = (errorMsg) => ({
  type: LogTypes.LOG_GET_ALL_FAILED,
  payload: {
    errorMsg,
  },
});


const getLogs = () => async (dispatch) => {
  dispatch(fetchingLogs());
  let res;
  try {
    res = await get(APIUrl('logs'));
    const json = await res.json();
    if (res.ok) {
      dispatch(getLogsSuccess(json));
      return;
    }
    const { message } = json;
    dispatch(getLogsFailed(message || 'Unknown Error Occurred'));
  } catch (error) {
    console.log(error.message);
    dispatch(getLogsFailed(error.message));
  }
};

const LogsActions = {
  getLogs
};

export default LogsActions;