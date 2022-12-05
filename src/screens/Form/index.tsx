import { CircularProgress, Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import FieldsGenerator from '../../components/FieldsGenerator';
import { getFormData, submitFormData } from '../../redux/actions';
import { SUBMITTED_DATA } from '../../redux/constants';

const style = {
  width: '100%',
  height: '90vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const style2 = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

const Form = () => {
  const dispatch = useDispatch();
  const { FormData, isLoading, submittedData } = useSelector((state: RootStateOrAny) => state.FormData);
  const selectedValues = useRef<any>({});
  useEffect(() => {
    dispatch(getFormData());
  }, []);
  useEffect(() => {
    FormData.forEach((element:any) => {
      selectedValues.current = {
        ...selectedValues.current,
        [element.fieldName]: element.value,
      };
    });
  }, [FormData]);
  useEffect(() => {
    console.log(submittedData);
  }, [submittedData]);
  const handleChange = (e: any) => {
    selectedValues.current = {
      ...selectedValues.current,
      [e.target.name]: e.target.value,
    };
  };
  const handleSubmit = () => {
    dispatch(submitFormData(selectedValues.current));
  };

  if (submittedData?.success) {
    return (
      <>
        <div style={style2}><h2>Response From Server</h2></div>
        <div style={style}>
          <pre>{JSON.stringify(submittedData, null, '\t')}</pre>
        </div>
      </>
    );
  }
  return (
    <>
      {isLoading
        ? (
          <div style={style}>
            <CircularProgress />
          </div>
        ) : <FieldsGenerator FormData={FormData} handleChange={handleChange} handleSubmit={handleSubmit} />}
    </>
  );
};

export default Form;
