import axios from 'axios';
import api from '../api';
import { GET_FORMDATA, SET_LOADING, SUBMITTED_DATA } from '../constants';

export const setLoading = (loading: boolean) => async (dispatch:any) => {
  try {
    dispatch({ type: SET_LOADING, payload: loading });
  } catch (err: any) {
    console.log(err);
  }
};

export const getFormData = () => async (dispatch:any) => {
  try {
    setLoading(true);
    const response = await api.get('form');
    console.log(response.data.data);
    dispatch({ type: GET_FORMDATA, payload: response.data.data });
    setLoading(false);
  } catch (err: any) {
    console.log(err);
  }
};

export const submitFormData = (formData: any) => async (dispatch:any) => {
  try {
    setLoading(true);
    const response = await api.post('form', formData);
    console.log(response.data);
    dispatch({ type: SUBMITTED_DATA, payload: response.data });
    setLoading(false);
  } catch (err: any) {
    console.log(err);
  }
};
