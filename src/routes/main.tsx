import React from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import Form from '../screens/Form';

const Main = () => (
  <>
    <div className="navigationContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  </>
);
export default Main;
