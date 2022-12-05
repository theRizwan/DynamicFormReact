import { GET_FORMDATA, SET_LOADING, SUBMITTED_DATA } from '../constants';

type action={
    type:string,
    payload:any
}
const initialState = {
  FormData: [],
  isLoading: false,
  submittedData: {},
};

const FormReducer = (state: any = initialState, action:action): any => {
  switch (action.type) {
    case GET_FORMDATA:
      return {
        ...state,
        FormData: action.payload,
      };
    case SUBMITTED_DATA:
      return {
        ...state,
        submittedData: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default FormReducer;
